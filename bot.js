const { Client, GatewayIntentBits, PermissionsBitField } = require('discord.js');
const axios = require('axios');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const token = 'DEIN_BOT_TOKEN';
const idsFileUrl = 'https://raw.githubusercontent.com/RyuguDev/CleanUpBot/main/Ids.txt';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    if (message.content === '+cleanup' && message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        try {
            const response = await axios.get(idsFileUrl);
            const data = response.data;
            const ids = data.split('\n')
                .map(line => line.trim())
                .filter(line => !line.startsWith('//') && line.length > 0);

            if (ids.length === 0) {
                message.channel.send('No valid IDs found in the file.');
                return;
            }

            message.channel.send(`Starting cleanup for ${ids.length} users...`);

            for (const id of ids) {
                try {
                    const user = await client.users.fetch(id);
                    await message.guild.members.ban(user, { reason: 'Cleanup command issued' });
                    console.log(`Banned user: ${user.tag}`);
                } catch (error) {
                    console.error(`Failed to ban user with ID: ${id}`, error);
                    message.channel.send(`Failed to ban user with ID: ${id}. Check the console for details.`);
                }

                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            message.channel.send('Cleanup complete.');
        } catch (error) {
            console.error('Error fetching or processing the IDs file:', error);
            message.channel.send('Error fetching the IDs file. Check the console for details.');
        }
    }
});

client.login(token);
