#!/bin/bash
set -e

echo "🚀 Complete Intel Website Setup"
echo "================================"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Step 1: Fix Git
echo -e "${BLUE}Step 1: Fixing Git Issues...${NC}"
cd /home/user/intel-website

# Check if git repo
if [ ! -d .git ]; then
    echo -e "${RED}❌ Not a git repository! Initializing...${NC}"
    git init
    git checkout -b main
fi

# Remove locks
echo -e "${YELLOW}Removing lock files...${NC}"
find .git -name "*.lock" -delete 2>/dev/null || true

# Get current branch
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "main")

# Stash changes
if [ -n "$(git status --porcelain 2>/dev/null)" ]; then
    echo -e "${YELLOW}Stashing changes...${NC}"
    git stash push -m "Auto-stash $(date)" || true
fi

# Reset to remote if exists
if git remote get-url origin &>/dev/null; then
    echo -e "${YELLOW}Resetting to remote...${NC}"
    git fetch origin
    git reset --hard origin/$CURRENT_BRANCH 2>/dev/null || \
    git reset --hard origin/main 2>/dev/null || \
    echo -e "${YELLOW}Could not reset to remote, continuing...${NC}"
fi

echo -e "${GREEN}✅ Git fixed${NC}"

# Step 2: Create CI/CD files
echo -e "\n${BLUE}Step 2: Setting up CI/CD...${NC}"

# Create GitHub Actions workflow
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'WORKFLOW'
name: Deploy to Firebase

on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: \${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: \${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
          projectId: web-projects-486505
          channelId: live
WORKFLOW

# Create firebase.json
cat > firebase.json << 'FIREBASE'
{
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "cleanUrls": true,
    "trailingSlash": false
  }
}
FIREBASE

# Create .firebaserc
cat > .firebaserc << 'FIRERC'
{
  "projects": {
    "default": "web-projects-486505"
  }
}
FIRERC

echo -e "${GREEN}✅ CI/CD files created${NC}"

# Step 3: Update package.json if needed
echo -e "\n${BLUE}Step 3: Updating package.json...${NC}"
if [ -f package.json ]; then
    # Add deploy script if not present
    if ! grep -q '"deploy"' package.json; then
        echo -e "${YELLOW}Adding deploy script to package.json${NC}"
        # Use sed to add deploy script
        sed -i '/"scripts"/,/}/ s/"scripts": {/"scripts": {\n    "deploy": "firebase deploy --only hosting",/' package.json
    fi
else
    # Create package.json
    cat > package.json << 'PKG'
{
  "name": "intel-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "npx serve public -p \$PORT",
    "deploy": "firebase deploy --only hosting"
  }
}
PKG
fi

echo -e "${GREEN}✅ package.json updated${NC}"

# Step 4: Add to Git
echo -e "\n${BLUE}Step 4: Committing changes...${NC}"
git add .
if git diff --cached --quiet; then
    echo -e "${YELLOW}No changes to commit${NC}"
else
    git commit -m "feat: Add CI/CD pipeline and fix Git issues

- Added GitHub Actions workflow for Firebase deployment
- Created firebase.json configuration
- Fixed Git HEAD lock issues
- Updated package.json with deploy script"
    
    # Push if remote exists
    if git remote get-url origin &>/dev/null; then
        echo -e "${YELLOW}Pushing to remote...${NC}"
        git push origin $CURRENT_BRANCH || \
        echo -e "${YELLOW}Push failed, check your remote${NC}"
    fi
fi

# Step 5: Summary
echo -e "\n${GREEN}🎉 Setup Complete!${NC}"
echo -e "${BLUE}========================${NC}"
echo "Files created/modified:"
echo "  ✓ .github/workflows/deploy.yml"
echo "  ✓ firebase.json"
echo "  ✓ .firebaserc"
echo "  ✓ package.json (updated)"
echo ""
echo "Next steps:"
echo "1. Set up GitHub Secrets:"
echo "   - Go to GitHub repo → Settings → Secrets → Actions"
echo "   - Add FIREBASE_SERVICE_ACCOUNT with Firebase service account JSON"
echo ""
echo "2. Test deployment:"
echo "   git push origin $CURRENT_BRANCH"
echo ""
echo "3. Check Actions tab in GitHub"
echo ""
echo "4. Your site: https://web-projects-486505.web.app"
