const Discord = require('discord.js');
const fs = require('fs');
const readline = require('readline');

const client = new Discord.Client();
const configPath = './config.txt';
const banListPath = './Ids.txt';

let botToken;

if (fs.existsSync(configPath)) {
    botToken = fs.readFileSync(configPath, 'utf8').trim();
} else {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Bitte geben Sie Ihren Bot-Token ein: ', (token) => {
        botToken = token.trim();
        fs.writeFileSync(configPath, botToken);
        console.log('Bot-Token wurde erfolgreich gespeichert!');
        rl.close();
    });
}

client.login(botToken);

client.once('ready', () => {
    console.log('Bot Ready to Clean your Discord Up :3');
});

client.on('message', message => {
    if (message.content.toLowerCase() === '+idiotcleanup' && message.author.bot === false) {
        const bannedUsers = fs.readFileSync(banListPath, 'utf8').trim().split('\n');

        bannedUsers.forEach(line => {
            const userId = line.trim().split('//')[1];
            const user = client.users.cache.get(userId);
            if (user) {
                message.guild.members.ban(user, { reason: 'Nicht Sozialfähig' })
                    .then(() => console.log(`Benutzer ${user.username} (${userId}) erfolgreich verbannt.`))
                    .catch(err => console.error(`Fehler beim Bannen von Benutzer ${user.username} (${userId}):`, err));
            }
        });
    }
});
