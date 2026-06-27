#!/bin/bash

# Define the target directory
CONTENT_DIR="content"

# Find all directories inside content, excluding the root itself
find "$CONTENT_DIR" -mindepth 1 -type d | while read -r dir; do
    # Count markdown files in the current directory (maxdepth 1 ensures we don't count subdirectories)
    MD_COUNT=$(find "$dir" -maxdepth 1 -name "*.md" | wc -l)
    
    # If no markdown files exist, create an index.md placeholder
    if [ "$MD_COUNT" -eq 0 ]; then
        # Extract the folder name to use as the title
        FOLDER_NAME=$(basename "$dir")
        FILE_PATH="$dir/index.md"
        
        # Generate the markdown file with YAML frontmatter
        cat <<EOF > "$FILE_PATH"
---
title: "$FOLDER_NAME"
---

EOF
        echo "[+] Initialized empty folder: $dir"
    fi
done

echo "Folder initialization complete."
