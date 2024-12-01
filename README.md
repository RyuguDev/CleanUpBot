# CleanUpBot

CleanUpBot ist ein Discord-Bot, der deinen Server mit dem Befehl `+cleanup` von unerwünschten Benutzern befreit.

[**Bot hinzufügen**](https://discord.com/oauth2/authorize?client_id=737537444723032086&scope=bot&permissions=8)

---

## Voraussetzungen

- **Node.js** (Empfohlen: Version 14 oder höher)
- **Ein Discord-Bot-Token**

---

## Installation

1. **Repository klonen**:
   ```bash
   git clone https://github.com/RyuguDev/CleanUpBot.git
   cd CleanUpBot
   ```

2. **Abhängigkeiten installieren**:
   ```bash
   npm install discord.js axios
   ```

3. **Bot-Token konfigurieren**:
   - Öffne die Datei `bot.js`.
   - Ersetze den Platzhalter `const token = 'DEIN_BOT_TOKEN';` mit deinem tatsächlichen Discord-Bot-Token.

---

## Verwendung

1. **Bot starten**:
   ```bash
   node bot.js
   ```

2. **Befehl im Discord-Chat eingeben**:
   - Nur Administratoren können den Befehl `+cleanup` verwenden.
   - Der Bot liest die IDs aus meiner Repo und bannt die entsprechenden Benutzer.

---

## Sicherheitshinweis

- **Schütze deinen Bot-Token!** Teile ihn niemals öffentlich oder speichere ihn in einem öffentlichen Repository.
- Stelle sicher, dass nur vertrauenswürdige Personen Zugriff auf den Bot haben, da er Benutzer bannen kann.
