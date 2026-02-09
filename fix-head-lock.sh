#!/bin/bash
echo "🔧 Fixing HEAD lock error..."

# Navigate to your project
cd /home/user/intel-website

# 1. Backup current HEAD
echo "💾 Backing up current HEAD..."
cp .git/HEAD .git/HEAD.backup 2>/dev/null || true

# 2. Check current HEAD
echo "📊 Current HEAD reference:"
cat .git/HEAD

# 3. The error shows two different commits:
#    Current: 93df323e3288d85ea8c0f9b2ec2bc913d3197e43
#    Expected: 947cf9a6a4a94467d4359e0f18a909b2c0ded8f3
#
# This usually happens when someone force-pushed to remote
# Let's check both commits:

echo ""
echo "🔍 Checking commit 93df323e..."
git show --oneline 93df323e3288d85ea8c0f9b2ec2bc913d3197e43 2>/dev/null || echo "Commit not found locally"

echo ""
echo "🔍 Checking commit 947cf9a6..."
git show --oneline 947cf9a6a4a94467d4359e0f18a909b2c0ded8f3 2>/dev/null || echo "Commit not found locally"

# 4. Check what refs point to these commits
echo ""
echo "📌 References pointing to these commits:"
git show-ref | grep -E "93df323e|947cf9a6" || echo "No refs found"

# 5. Check remote
echo ""
echo "🌐 Checking remote branch..."
git ls-remote origin

# 6. Fix options
echo ""
echo "🛠️  Choose fix method:"
echo "1. Force reset to remote (will lose local changes)"
echo "2. Create new branch from current state"
echo "3. Try to merge/rebase"
echo "4. Just fix the lock and continue"

read -p "Enter choice (1-4): " choice

case $choice in
    1)
        echo "🔄 Force resetting to remote..."
        git fetch origin
        git reset --hard origin/$(git branch --show-current)
        ;;
    2)
        echo "🌿 Creating backup branch..."
        BACKUP_BRANCH="backup-$(date +%Y%m%d-%H%M%S)"
        git checkout -b $BACKUP_BRANCH
        ;;
    3)
        echo "�� Attempting to merge..."
        git fetch origin
        git merge origin/$(git branch --show-current) || echo "Merge failed"
        ;;
    4)
        echo "🔓 Just fixing lock..."
        # Manually fix the HEAD ref
        BRANCH_NAME=$(git branch --show-current)
        echo "ref: refs/heads/$BRANCH_NAME" > .git/HEAD
        ;;
    *)
        echo "❌ Invalid choice"
        ;;
esac

# 7. Verify
echo ""
echo "✅ Verification:"
git status
echo ""
git log --oneline -3
