# CleanUpBot

CleanUpBot ist ein Discord-Bot, der deinen discord mit dem command +cleanup von idioten befreit.
Add me: https://discord.com/oauth2/authorize?client_id=1028381387864150017&scope=bot&permissions=8

## Voraussetzungen

- Node.js (empfohlen: Version 14 oder höher)
- Ein Discord-Bot-Token

## Installation

1. **Klone das Repository**:
   ```bash
   git clone https://github.com/ryugudev/CleanUpBot.git
   cd CleanUpBot
   ```

2. **Installiere die Abhängigkeiten**:
   ```bash
   npm install discord.js dotenv
   ```

3. **Bot-Token konfigurieren**:
   Ersetze `YOUR_DISCORD_BOT_TOKEN` in der `bot.js`-Datei mit deinem tatsächlichen Discord-Bot-Token.

## Verwendung

1. **Starte den Bot**:
   ```bash
   node bot.js
   ```

2. **Gib den Befehl im Discord-Chat ein**:
   Ein Administrator kann den Befehl `+cleanup` im Chat eingeben, um die Benutzer zu bannen, deren IDs in der `ids.txt`-Datei aufgeführt sind. Stelle sicher dass beide dateien in einem Ordner sind!


## Sicherheitshinweis

Stelle sicher, dass der Bot nur von vertrauenswürdigen Personen betrieben und verwaltet wird, da er die Berechtigung hat, Benutzer zu bannen. Teile deinen Bot-Token niemals öffentlich.

## Lizenz

Dieses Projekt ist lizenziert unter der MIT-Lizenz - siehe die [LICENSE](LICENSE) Datei für Details.
