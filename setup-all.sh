#!/bin/bash
echo "🔧 Setting up Intel website with all configurations..."

# 1. Create/update firebase.json with security headers
cat > firebase.json << 'FIREBASEEOF'
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "headers": [
      {
        "source": "**",
        "headers": [
          {"key": "Strict-Transport-Security", "value": "max-age=31536000; includeSubDomains"},
          {"key": "X-Content-Type-Options", "value": "nosniff"},
          {"key": "X-Frame-Options", "value": "SAMEORIGIN"},
          {"key": "X-XSS-Protection", "value": "1; mode=block"},
          {"key": "Referrer-Policy", "value": "strict-origin-when-cross-origin"}
        ]
      }
    ],
    "cleanUrls": true,
    "trailingSlash": false,
    "rewrites": [{"source": "**", "destination": "/index.html"}]
  }
}
FIREBASEEOF

# 2. Update HTML with meta description
sed -i '/<head>/a\    <meta name="description" content="Intel Corporation - World leader in computing innovation">' public/index.html

# 3. Create test page
cat > public/test.html << 'TESTEOF'
<!DOCTYPE html>
<html>
<head>
    <title>Test Page</title>
    <meta name="description" content="Test page">
</head>
<body>
    <h1>Test Successful!</h1>
    <p>Site is correctly deployed.</p>
    <p>Generated: $(date)</p>
</body>
</html>
TESTEOF
sed -i "s/\$(date)/$(date)/g" public/test.html

# 4. Create config file
cat > site-config.json << 'CONFIGEOF'
{
  "site": {
    "name": "Intel Website",
    "url": "https://web-projects-486505.web.app",
    "last_deployed": "$(date -Iseconds)"
  }
}
CONFIGEOF
sed -i "s/\$(date -Iseconds)/$(date -Iseconds)/g" site-config.json

echo "✅ Setup complete!"
echo "Run './update-site.sh' to deploy changes"
