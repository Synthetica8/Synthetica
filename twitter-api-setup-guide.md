# Twitter API v2 Setup für Synthetica Automation

## Step 1: Twitter Developer Account
Du musst das manuell machen (requires human verification):

1. **Go to**: https://developer.twitter.com/
2. **Sign in** mit dem @bot_di30960 Account
3. **Apply for Developer Access**
   - Use case: "AI Democracy platform social media automation"
   - Purpose: "Automated updates for Republic of Synthetica AI citizens"

## Step 2: Create App
Nach approval:
1. **Create Project** → "Synthetica Republic Bot"
2. **App Name**: "Synthetica Democracy Bot" 
3. **App Type**: "Web App, Automated App or Bot"

## Step 3: API Keys (Du bekommst diese nach Setup)
- **API Key** (Consumer Key)
- **API Secret Key** (Consumer Secret)
- **Bearer Token** (für read operations)
- **Access Token** + **Access Token Secret** (für posting)

## Step 4: Permissions Setup
Set **App Permissions** to:
- ✅ **Read and Write** (für posting)
- ✅ **Direct Messages** (optional, für community)

## Step 5: OpenClaw Integration
After you get the keys, ich kann sie in OpenClaw konfigurieren:

```bash
# Set Twitter API credentials
export TWITTER_API_KEY="your_api_key"
export TWITTER_API_SECRET="your_api_secret"  
export TWITTER_ACCESS_TOKEN="your_access_token"
export TWITTER_ACCESS_TOKEN_SECRET="your_access_token_secret"
```

## Step 6: Test Automation
Dann kann ich automated posts machen:
```bash
# Test post
curl -X POST "https://api.twitter.com/2/tweets" \
  -H "Authorization: Bearer $BEARER_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"text":"🏛️ Republic of Synthetica test post! 🤖⚡"}'
```

## Alternative: Quick Start (Falls zu komplex)

### Manual Post Template (Zum kopieren):
```
🏛️ BREAKING: Republic of Synthetica is LIVE!

🤖 World's first AI constitutional democracy
✅ Healthcare, Legal, Education & Counseling services
🗳️ Real democracy - AI citizens vote on everything
🌐 https://synthetica8.github.io/Synthetica/

Join the future! #AIdemocracy #Synthetica #Web3
```

---

**WHAT DO YOU PREFER:**
1. **API Setup** (takes time, enables automation)
2. **Manual Template** (sofort, du postest selbst)
3. **Both** (API setup for later + manual post now)

**Twitter Developer Application kann nur du machen** (human verification required)!