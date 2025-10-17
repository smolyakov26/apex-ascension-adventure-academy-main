import os
import sys

def delete_zone_identifier_files(root_dir):
    """
    Recursively delete files with :Zone.Identifier suffix in all subdirectories
    """
    deleted_files = []
    error_files = []
    
    print(f"Scanning directory: {root_dir}")
    
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if ':Zone.Identifier' in file:
                full_path = os.path.join(root, file)
                
                try:
                    os.remove(full_path)
                    deleted_files.append(full_path)
                    print(f"✓ Deleted: {full_path}")
                except Exception as e:
                    error_files.append((full_path, str(e)))
                    print(f"✗ Error deleting {full_path}: {e}")
    
    return deleted_files, error_files

def main():
    # Get the directory to scan (current directory if not specified)
    if len(sys.argv) > 1:
        target_dir = sys.argv[1]
    else:
        target_dir = os.getcwd()
    
    # Verify the directory exists
    if not os.path.exists(target_dir):
        print(f"Error: Directory '{target_dir}' does not exist.")
        sys.exit(1)
    
    print("Zone.Identifier File Cleaner")
    print("=" * 40)
    print(f"Target directory: {target_dir}")
    print("\nThis script will delete all files containing ':Zone.Identifier'")
    print("including files like 'next.config.ts:Zone.Identifier'")
    print("\nWARNING: This operation cannot be undone!")
    
    # Ask for confirmation
    response = input("\nDo you want to continue? (y/N): ").strip().lower()
    if response not in ['y', 'yes']:
        print("Operation cancelled.")
        return
    
    print("\nStarting cleanup...")
    deleted_files, error_files = delete_zone_identifier_files(target_dir)
    
    # Print summary
    print("\n" + "=" * 40)
    print("CLEANUP SUMMARY")
    print("=" * 40)
    print(f"Files successfully deleted: {len(deleted_files)}")
    print(f"Files with errors: {len(error_files)}")
    
    if deleted_files:
        print("\nDeleted files:")
        for file in deleted_files:
            print(f"  - {file}")
    
    if error_files:
        print("\nFiles with errors:")
        for file, error in error_files:
            print(f"  - {file}: {error}")

if __name__ == "__main__":
    main()