#!/bin/bash
set -e

echo "🔧 Fixing Git Issues..."
echo "========================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored messages
print_message() {
    echo -e "${2}${1}${NC}"
}

# 1. Check if we're in a git repository
if [ ! -d .git ]; then
    print_message "❌ Not a git repository!" "$RED"
    exit 1
fi

print_message "📁 Current directory: $(pwd)" "$YELLOW"

# 2. Remove any lock files
print_message "🔓 Removing lock files..." "$YELLOW"
rm -f .git/index.lock .git/HEAD.lock .git/refs/heads/*.lock 2>/dev/null || true
print_message "✅ Lock files removed" "$GREEN"

# 3. Check current branch
CURRENT_BRANCH=$(git branch --show-current)
print_message "🌿 Current branch: $CURRENT_BRANCH" "$YELLOW"

# 4. Check git status
print_message "�� Checking git status..." "$YELLOW"
git status --short

# 5. Stash any uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    print_message "💾 Stashing uncommitted changes..." "$YELLOW"
    git stash save "Auto-stash before fix $(date '+%Y-%m-%d %H:%M:%S')"
    print_message "✅ Changes stashed" "$GREEN"
fi

# 6. Check remote
print_message "🌐 Checking remote..." "$YELLOW"
REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "No remote")
print_message "Remote URL: $REMOTE_URL" "$YELLOW"

# 7. Fix HEAD issue
print_message "🔧 Fixing HEAD reference..." "$YELLOW"
CURRENT_HEAD=$(git rev-parse HEAD)
print_message "Current HEAD: $CURRENT_HEAD" "$YELLOW"

# Check for the specific error from your log
if git show-ref HEAD | grep -q "refs/heads/$CURRENT_BRANCH"; then
    print_message "✅ HEAD points to correct branch" "$GREEN"
else
    print_message "⚠️  HEAD might be detached, fixing..." "$YELLOW"
    git checkout $CURRENT_BRANCH 2>/dev/null || git checkout -b $CURRENT_BRANCH
fi

# 8. Fetch latest from remote
if [ "$REMOTE_URL" != "No remote" ]; then
    print_message "⬇️  Fetching from remote..." "$YELLOW"
    git fetch origin
    
    # Check if remote branch exists
    if git show-ref --verify --quiet refs/remotes/origin/$CURRENT_BRANCH; then
        print_message "✅ Remote branch exists" "$GREEN"
        
        # Reset to remote if needed
        read -p "Do you want to reset to origin/$CURRENT_BRANCH? (y/n): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            print_message "🔄 Resetting to origin/$CURRENT_BRANCH..." "$YELLOW"
            git reset --hard origin/$CURRENT_BRANCH
            print_message "✅ Reset complete" "$GREEN"
        fi
    else
        print_message "⚠️  No remote branch found for $CURRENT_BRANCH" "$YELLOW"
    fi
fi

# 9. Clean up
print_message "🧹 Cleaning up..." "$YELLOW"
git gc --prune=now --aggressive 2>/dev/null || true
git prune 2>/dev/null || true

# 10. Verify fix
print_message "✅ Verifying fix..." "$YELLOW"
echo "--- Git Status ---"
git status
echo "--- Latest Commit ---"
git log --oneline -1
echo "--- Branch Info ---"
git branch -vv

print_message "🎉 Git issues fixed!" "$GREEN"
print_message "Next steps:" "$YELLOW"
echo "1. If you stashed changes: git stash pop"
echo "2. To push changes: git push origin $CURRENT_BRANCH"
echo "3. To create new commit: git add . && git commit -m 'Your message'"
echo ""
print_message "✅ Script completed successfully!" "$GREEN"
