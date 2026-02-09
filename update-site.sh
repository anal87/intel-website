#!/bin/bash
set -e

echo "🔄 Updating Intel website..."

# Update timestamp in config
echo "📝 Updating site-config.json..."
sed -i "s/\"last_deployed\": \".*\"/\"last_deployed\": \"$(date -Iseconds)\"/g" site-config.json

# Add meta description if not present
if ! grep -q "meta name=\"description\"" public/index.html; then
    echo "📄 Adding meta description to index.html..."
    sed -i '/<head>/a\    <meta name="description" content="Intel Corporation - World leader in computing innovation">' public/index.html
fi

# Test the site
echo "🧪 Testing site..."
python3 scripts/check_site.py

# Deploy updates
echo "🚀 Deploying updates..."
firebase deploy --only hosting

echo "✅ Update complete!"
echo "🌐 Site URL: https://web-projects-486505.web.app"
echo "📊 Test page: https://web-projects-486505.web.app/test.html"
