const { Client, GatewayIntentBits, PermissionsBitField } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const token = 'YOUR_DISCORD_BOT_TOKEN';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    if (message.content === '+cleanup' && message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        const filePath = path.join(__dirname, 'Ids.txt');
        const data = fs.readFileSync(filePath, 'utf8');
        
        // Extract IDs from the file
        const ids = data.split('\n')
            .map(line => line.trim())
            .filter(line => !line.startsWith('//') && line.length > 0);
        
        for (const id of ids) {
            try {
                const user = await client.users.fetch(id);
                await message.guild.members.ban(user, { reason: 'Cleanup command issued' });
                console.log(`Banned user: ${user.tag}`);
            } catch (error) {
                console.error(`Failed to ban user with ID: ${id}`, error);
            }
        }

        message.channel.send('Cleanup complete.');
    }
});

client.login(token);
