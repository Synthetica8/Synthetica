# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## Claude Code Workflows

### ✅ Working Patterns
- **Interactive**: `claude` (PTY mode) - most reliable
- **Background**: `exec pty:true background:true` for long tasks
- **Quick fallback**: Local Qwen 2.5:7b when Claude hangs

### ❌ Problematic Patterns  
- **Print mode**: `claude -p` consistently hangs (API latency)
- **No timeout**: Commands without timeout parameter get stuck
- **Direct exec**: Simple `claude` commands without PTY fail

### Token Setup
- OAuth token stored in `~/.zshrc`
- Valid for 1 year from setup date
- Environment: `CLAUDE_CODE_OAUTH_TOKEN`

---

Add whatever helps you do your job. This is your cheat sheet.
