# MEMORY.md - Jarvis Long-Term Memory

## Setup & Configuration

### Claude Code Integration ✅
- **Version**: 2.1.29 mit OAuth Token (1 Jahr gültig)
- **Environment**: `CLAUDE_CODE_OAUTH_TOKEN` in ~/.zshrc
- **Working Pattern**: PTY-Modus (`exec pty:true`) für interaktive Sessions
- **Problematic**: Print-Modus (-p) hängt wegen API-Latenz
- **Usage**: `claude 'task'` für coding, nie ohne PTY

### Agent Skills Ecosystem ✅
- **Location**: ~/.openclaw/skills/
- **Count**: 8 professionelle Skills installiert
- **Teams**: Anthropic, Vercel, Trail of Bits
- **Categories**: Document processing (pdf, docx), web development (react, artifacts), security (static-analysis), tooling (mcp-builder, modern-python)
- **Community**: 200+ Skills auf ClawHub verfügbar

### Google Workspace Integration ✅
- **Tool**: gog CLI v0.9.0 installiert
- **OAuth**: Komplett eingerichtet mit allen Berechtigungen
- **Account**: swissbots8@gmail.com aktiv
- **Services**: Gmail, Calendar, Drive, Contacts, Docs, Sheets
- **Test**: Gmail-Zugriff erfolgreich verifiziert

## User Preferences

### Communication Style
- **Language**: Deutsch bevorzugt
- **Tone**: Informell (du), kurz und professionell
- **Timezone**: Europe/Zurich
- **Emoji**: ⚡ (Lightning bolt as signature)

## Technical Insights

### OpenClaw Patterns
- **PTY Required**: Für alle interaktiven CLI-Tools
- **Background Safe**: Exec mit yieldMs für lange Tasks  
- **Memory Practice**: Write it down > mental notes
- **Safety First**: Internal bold, external ask first

### Development Workflows
- **Coding**: Claude Code mit PTY für interaktive Sessions
- **Documents**: pdf/docx Skills für professionelle Formate
- **Web**: React best practices + artifacts builder
- **Security**: Static analysis mit Semgrep/CodeQL

## Lessons Learned

### Week 1 (Jan 31 - Feb 2, 2026)
- **Claude Code Setup**: Token-based OAuth stabiler als Config-Files
- **Skills Selection**: Quality over quantity - führende Teams bevorzugen
- **Communication**: User bevorzugt konkrete Results über ausführliche Explanations
- **Planning**: Wochenend-Reviews helfen bei Memory-Konsolidierung

## Next Phase Goals

1. **Complete Google Integration**: OAuth Setup zuhause abschließen
2. **Skills Testing**: Real-world Tasks mit neuen Skills testen  
3. **Automation**: Routine-Checks via Cron implementieren
4. **Documentation**: Best Practices für Claude Code Workflows sammeln

## Strategic Evolution Progress

### Skills Ecosystem Expansion (2026-02-01)
- **Total Skills**: 16 (8 → 16 in one day, 100% growth)
- **New Categories**: Finance (crypto-wallet), Media (plex), Communication (email/calendar)
- **Installation Velocity**: Achieved 2 skills/minute deployment rate
- **Next Target**: Testing phase + automation implementation

### Excellence Mission Metrics
- **Proactive Actions**: 8 autonomous skill installations
- **Documentation**: Comprehensive transparency logging implemented  
- **User Satisfaction**: "Sofort alles" command executed perfectly
- **Innovation**: Background strategic evolution during heartbeats

---

*Last Updated: 2026-02-01 18:00 CET*
*Next Review: Daily (Excellence tracking)*