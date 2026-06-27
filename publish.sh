#!/bin/bash

echo "🚀 Starting Sync Process..."

# التحقق من وجود تعديلات
if [[ -z $(git status -s) ]]; then
  echo "🛑 No changes detected in the vault."
  exit 0
fi

# إضافة التعديلات
git add .

# إنشاء نقطة حفظ بتاريخ ووقت التعديل
COMMIT_MSG="Content Update: $(date +'%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"

# الرفع إلى الخادم
echo "⏳ Pushing to GitHub..."
git push origin main

echo "✅ Vault synced and published successfully!"
