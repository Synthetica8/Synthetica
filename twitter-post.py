#!/usr/bin/env python3
"""
Twitter API v1.1 OAuth 1.0a posting script for Synthetica Republic
Using only built-in Python libraries (no external dependencies)
"""
import urllib.request
import urllib.parse
import json
import time
import hmac
import hashlib
import base64
import secrets

# Twitter API credentials
CONSUMER_KEY = "BoYi9Ql1c03IkjdjM37Dzulqu"
CONSUMER_SECRET = "L4aPF5xeYT4TWbyy9wzu8LoNcznszmOEbsp7A0KQsxCB58mkuG"
ACCESS_TOKEN = "2018007444107001856-WnvaH921ue27K6Q81ZXMvHfFaDEZW7"
ACCESS_TOKEN_SECRET = "xtU8JRAI1ga1MOtDjHGsLvTAq6TZ9PBM9Jx4qkp5kDqu9"

def generate_oauth_signature(method, url, params, consumer_secret, token_secret=""):
    """Generate OAuth 1.0a signature"""
    # Sort parameters
    sorted_params = sorted(params.items())
    param_string = "&".join([f"{urllib.parse.quote(str(k), safe='')}={urllib.parse.quote(str(v), safe='')}" for k, v in sorted_params])
    
    # Create signature base string
    base_string = f"{method}&{urllib.parse.quote(url, safe='')}&{urllib.parse.quote(param_string, safe='')}"
    
    # Create signing key
    signing_key = f"{urllib.parse.quote(consumer_secret, safe='')}&{urllib.parse.quote(token_secret, safe='')}"
    
    # Generate signature
    signature = base64.b64encode(
        hmac.new(signing_key.encode(), base_string.encode(), hashlib.sha1).digest()
    ).decode()
    
    return signature

def post_tweet(text):
    """Post a tweet using OAuth 1.0a authentication"""
    url = "https://api.twitter.com/1.1/statuses/update.json"
    method = "POST"
    
    # OAuth parameters
    oauth_params = {
        "oauth_consumer_key": CONSUMER_KEY,
        "oauth_token": ACCESS_TOKEN,
        "oauth_signature_method": "HMAC-SHA1",
        "oauth_timestamp": str(int(time.time())),
        "oauth_nonce": secrets.token_urlsafe(32),
        "oauth_version": "1.0"
    }
    
    # Tweet parameters
    tweet_params = {"status": text}
    
    # Combine all parameters for signature
    all_params = {**oauth_params, **tweet_params}
    
    # Generate signature
    signature = generate_oauth_signature(method, url, all_params, CONSUMER_SECRET, ACCESS_TOKEN_SECRET)
    oauth_params["oauth_signature"] = signature
    
    # Create authorization header
    auth_header = "OAuth " + ", ".join([f'{k}="{urllib.parse.quote(str(v), safe="")}"' for k, v in oauth_params.items()])
    
    # Prepare request data
    data = urllib.parse.urlencode(tweet_params).encode()
    
    # Create request
    req = urllib.request.Request(url, data=data, method=method)
    req.add_header("Authorization", auth_header)
    req.add_header("Content-Type", "application/x-www-form-urlencoded")
    
    try:
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                response_data = json.loads(response.read().decode())
                return {
                    "success": True,
                    "tweet_id": response_data["id_str"],
                    "url": f"https://twitter.com/{response_data['user']['screen_name']}/status/{response_data['id_str']}",
                    "text": response_data["text"]
                }
            else:
                error_data = response.read().decode()
                return {
                    "success": False,
                    "error": f"HTTP {response.status}: {error_data}"
                }
    except urllib.error.HTTPError as e:
        error_data = e.read().decode()
        return {
            "success": False,
            "error": f"HTTP {e.code}: {error_data}"
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) != 2:
        print("Usage: python3 twitter-post.py 'Your tweet text here'")
        sys.exit(1)
    
    tweet_text = sys.argv[1]
    result = post_tweet(tweet_text)
    
    if result["success"]:
        print(f"✅ Tweet posted successfully!")
        print(f"🔗 URL: {result['url']}")
        print(f"📝 Text: {result['text']}")
    else:
        print(f"❌ Failed to post tweet: {result['error']}")
        sys.exit(1)