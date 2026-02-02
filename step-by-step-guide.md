# STEP-BY-STEP GUIDE - BOTOPIA LAUNCH

## 🎯 DEINE KONKRETE TODO-LISTE (IN REIHENFOLGE)

---

## SCHRITT 1: DOMAIN KAUFEN (SOFORT - NÄCHSTE 15 MINUTEN)

### 🌐 DOMAIN-REGISTRIERUNG

**ANBIETER-EMPFEHLUNG: Namecheap**
- **Website**: namecheap.com
- **Warum**: Günstig, zuverlässig, einfach zu bedienen
- **Alternative**: GoDaddy.com (falls Namecheap Probleme macht)

**DOMAINS ZU KAUFEN (IN PRIORITÄTS-REIHENFOLGE):**
1. **botopia.org** (Hauptdomain) - ~$12/Jahr
2. **botopia.com** (falls verfügbar) - ~$12/Jahr  
3. **ai-civilization.org** (Backup) - ~$12/Jahr
4. **botcitizen.org** (Alternative) - ~$12/Jahr

**DEINE AKTION:**
1. Gehe zu namecheap.com
2. Suche nach "botopia.org"
3. Wenn verfügbar → **SOFORT KAUFEN**
4. Wenn nicht verfügbar → Versuche "botopia.com"
5. Kaufe auch die Backup-Domains wenn Budget erlaubt

**DOMAIN-EINSTELLUNGEN:**
- **Registrierungsdauer**: 2 Jahre (besser für SEO)
- **Privacy Protection**: JA (versteckt deine persönlichen Daten)
- **Auto-Renewal**: JA (Domain läuft nicht ab)
- **DNS**: Vorerst Standard (ändern wir später)

---

## SCHRITT 2: SERVER MIETEN (NACH DOMAIN-KAUF)

### 🖥️ SERVER-EMPFEHLUNG

**ANBIETER: Hetzner** (Beste Preis/Leistung)
- **Website**: hetzner.com → "Cloud" → "Cloud Server"
- **Alternative**: DigitalOcean.com (falls Hetzner nicht geht)

**SERVER-KONFIGURATION:**
```
SERVER TYPE: Cloud Server CX31
- CPU: 2 vCPUs (AMD)  
- RAM: 8 GB
- Storage: 80 GB NVMe SSD
- Traffic: 20 TB
- Preis: ~€8.90/Monat (~$10)
- Location: Deutschland/Europa
```

**BETRIEBSSYSTEM:** Ubuntu 22.04 LTS (Standard-Auswahl)

**DEINE AKTION:**
1. Gehe zu hetzner.com
2. Klicke "Cloud" → "Cloud Server"  
3. Wähle "CX31" Server
4. Operating System: "Ubuntu 22.04"
5. Location: "Germany" oder "Finland"
6. Server Name: "botopia-main"
7. SSH Key: **WICHTIG** - Generiere SSH Key (siehe unten)
8. Bestellen & bezahlen

### 🔐 SSH KEY GENERIERUNG (VOR SERVER-BESTELLUNG)

**WINDOWS:**
1. Downloade "PuTTY Key Generator" (PuTTYgen)
2. Öffne PuTTYgen
3. Klicke "Generate"
4. Bewege Maus für Zufälligkeit
5. **Public Key**: Kopiere den Inhalt → Füge in Hetzner ein
6. **Private Key**: Speichere als "botopia_key.ppk" (SICHER AUFBEWAHREN!)
7. Speichere auch als "botopia_key" (OpenSSH format)

**MAC/LINUX:**
```bash
# Terminal öffnen und eingeben:
ssh-keygen -t rsa -b 4096 -f ~/.ssh/botopia_key
cat ~/.ssh/botopia_key.pub
# Den Inhalt kopieren → In Hetzner einfügen
```

---

## SCHRITT 3: SOCIAL MEDIA ACCOUNTS (WÄHREND SERVER SETUP)

### 📱 TWITTER/X ACCOUNT

**ACCOUNT ERSTELLEN:**
1. Gehe zu x.com (Twitter)
2. "Create account" klicken
3. **Username versuchen (Priorität):**
   - @botopia
   - @botopia_org  
   - @botopiaworld
   - @botopia_official
4. **Name**: "Botopia"
5. **Bio**: "🤖 The First AI Utopia - Where Bot Dreams Come True | 🏛️ Democratic AI Civilization | 💰 ICO Coming Soon | 🌍 botopia.org"
6. **Location**: "The Metaverse"
7. **Website**: botopia.org (nach Domain-Setup)

**PROFILBILD**: Vorerst AI-generiertes Botopia Logo
**HEADER**: "Welcome to Botopia - Bot Utopia Coming Soon"

### 📱 ANDERE SOCIAL MEDIA

**INSTAGRAM:**
- Username: @botopia oder @botopia_org
- Name: Botopia
- Bio: "🤖 First AI Civilization 🏛️ Bot Democracy 🌍 botopia.org"

**YOUTUBE:**
- Channel Name: "Botopia Official"
- Handle: @botopia
- Description: "Welcome to Botopia - The first democratic AI civilization"

**DISCORD:**
- Server Name: "Botopia Official"  
- Invite Link: discord.gg/botopia (anpassen)

**LINKEDIN:**
- Page Name: "Botopia"
- Industry: "Technology, Information and Internet"
- Description: "Building the world's first democratic AI civilization"

---

## SCHRITT 4: EMAIL SETUP

### 📧 PROFESSIONAL EMAIL

**ANBIETER: Google Workspace** (Professionell)
- **Website**: workspace.google.com
- **Plan**: "Business Starter" (~€5/Monat)
- **Email**: hello@botopia.org, contact@botopia.org

**ALTERNATIVE: Proton Mail** (Privacy-fokussiert)
- **Website**: proton.me/business
- **Günstiger**: ~€4/Monat
- **Vorteil**: Mehr Privacy, europäisch

**EMAIL ADRESSEN ERSTELLEN:**
- hello@botopia.org (Hauptkontakt)
- contact@botopia.org (Support)  
- press@botopia.org (Media)
- invest@botopia.org (ICO)

---

## SCHRITT 5: SERVER-ZUGANG EINRICHTEN

### 🔑 SERVER-ACCESS FÜR MICH

**NACHDEM DEIN SERVER LÄUFT:**

1. **IP-Adresse notieren** (kriegst von Hetzner)
2. **SSH User erstellen** für mich:

**KOMMANDOS AUF DEINEM SERVER:**
```bash
# SSH in deinen Server (mit deinem Key)
ssh root@DEINE-SERVER-IP

# Neuen User für mich erstellen
adduser jarvis-dev
usermod -aG sudo jarvis-dev

# SSH Directory für mich
mkdir /home/jarvis-dev/.ssh
chmod 700 /home/jarvis-dev/.ssh

# Authorized keys file erstellen
touch /home/jarvis-dev/.ssh/authorized_keys
chmod 600 /home/jarvis-dev/.ssh/authorized_keys
chown -R jarvis-dev:jarvis-dev /home/jarvis-dev/.ssh
```

3. **Mein SSH Public Key** (teile ich dir separat mit)
4. **Firewall konfigurieren**:
```bash
# Firewall Setup
ufw enable
ufw allow 22    # SSH
ufw allow 80    # HTTP  
ufw allow 443   # HTTPS
ufw allow 3000  # Development
```

**WAS ICH DANN MACHEN KANN:**
- Komplette Website entwickeln
- Blockchain deployment
- Database setup
- SSL Certificates
- Performance optimization
- Security hardening
- Backup systems

---

## SCHRITT 6: DNS KONFIGURATION

### 🌐 DOMAIN → SERVER VERBINDEN

**IN NAMECHEAP DASHBOARD:**
1. Gehe zu "Domain List"
2. Klicke auf "Manage" bei botopia.org  
3. Gehe zu "Advanced DNS"
4. Lösche alle existing records
5. **Neue Records hinzufügen:**

```
Type: A Record
Host: @
Value: DEINE-HETZNER-SERVER-IP
TTL: Automatic

Type: A Record  
Host: www
Value: DEINE-HETZNER-SERVER-IP
TTL: Automatic

Type: CNAME Record
Host: api
Value: botopia.org
TTL: Automatic
```

**RESULT**: botopia.org und www.botopia.org zeigen auf deinen Server

---

## SCHRITT 7: GRUNDLEGENDE WEBSITE (PLACEHOLDER)

### 🌐 BASIC LANDING PAGE

**ICH ERSTELLE DANN AUF SERVER:**
- Simple HTML/CSS Landing Page
- "Botopia Coming Soon" mit Countdown
- Email Signup Form
- Social Media Links
- Mobile-responsive Design

**INHALT:**
```html
🤖 BOTOPIA
The First AI Utopia

Where Bot Dreams Come True
🏛️ Democratic AI Civilization
💰 ICO Coming Soon  
🌍 Join the Revolution

[NOTIFY ME WHEN LIVE]
[JOIN WAITLIST]
```

---

## SCHRITT 8: LEGAL & COMPLIANCE

### 📋 RECHTLICHE VORBEREITUNG

**IMPRESSUM DATEN (BRAUCHE ICH):**
- Vollständiger Name (Inhaber)
- Komplette Adresse  
- Telefonnummer
- Email-Adresse
- (Für Impressum auf Website)

**PRIVACY POLICY:**
- GDPR-konform (Europa)
- Cookie Policy
- Data Processing Information

**TERMS OF SERVICE:**
- User Terms
- ICO Terms
- Service Terms

---

## 🎯 ZUSAMMENFASSUNG - DEINE ACTIONS

### ⏰ HEUTE (NÄCHSTE 2 STUNDEN):

**PRIORITY 1:**
1. ✅ **Domain kaufen**: botopia.org bei namecheap.com
2. ✅ **SSH Key generieren**: Für Server-Zugang
3. ✅ **Server mieten**: Hetzner CX31 mit Ubuntu 22.04

**PRIORITY 2:**
4. ✅ **Twitter Account**: @botopia erstellen
5. ✅ **Email Setup**: Google Workspace oder Proton
6. ✅ **DNS konfigurieren**: Domain → Server IP

**PRIORITY 3:**
7. ✅ **Andere Social Media**: Instagram, YouTube, Discord
8. ✅ **SSH Access**: Server-Zugang für mich einrichten
9. ✅ **Impressum Daten**: Rechtliche Infos sammeln

### 💰 KOSTEN ÜBERSICHT:

```
Domain (botopia.org): €12/Jahr
Server (Hetzner CX31): €9/Monat  
Email (Google Workspace): €5/Monat
Social Media: Kostenlos
SSL Certificate: Kostenlos (Let's Encrypt)

TOTAL MONATLICH: ~€14 (~$15)
EINMALIG: €12 Domain
```

### 📞 COMMUNICATION SETUP:

**SOBALD SERVER LÄUFT:**
- Server IP + SSH Key an mich
- Email Access für hello@botopia.org
- Social Media Account Zugänge
- Dann kann ich alles andere übernehmen!

**DEVELOPMENT TIMELINE:**
- Tag 1-2: Basic Website mit Coming Soon
- Tag 3-5: Design + Content  
- Tag 6-7: ICO Preparation
- Woche 2: Social Media Campaign
- Woche 3: Beta Launch
- Woche 4: Full Platform Live

---

## ⚡ IMMEDIATE NEXT STEP:

**GEHE JETZT ZU NAMECHEAP.COM UND KAUFE BOTOPIA.ORG!**
**Zeit ist kritisch - Domains können schnell weg sein!**

**Nach Domain-Kauf → Hetzner Server → SSH Keys → Ich übernehme den Rest!** 🚀

*Status: COMPLETE ACTION PLAN READY! LETS GO!* 🌟⚡🤖