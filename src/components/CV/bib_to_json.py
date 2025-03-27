#!/usr/bin/env python3
"""
Script to convert BibTeX file to JSON for use in React component
"""

import json
import re
import sys

def parse_bibtex(bib_file_path):
    """Parse BibTeX file and return a list of publication entries"""
    with open(bib_file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Remove comments and extra whitespace
    content = re.sub(r'%.*?\n', '\n', content)
    content = re.sub(r'\s+', ' ', content)
    
    # Extract individual entries
    entries = []
    pattern = r'@(\w+)\{([^{]+?),\s*((?:[^=]+=[^,]+,\s*)+)\}'
    matches = re.finditer(pattern, content, re.DOTALL)
    
    for match in matches:
        print(match)
        entry_type = match.group(1)
        entry_key = match.group(2)
        fields_text = match.group(3)
        
        # Parse fields
        fields = {}
        field_pattern = r'(\w+)\s*=\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}'
        field_matches = re.finditer(field_pattern, fields_text)
        
        for field_match in field_matches:
            field_name = field_match.group(1)
            field_value = field_match.group(2)
            # Clean up the value (remove extra whitespace and braces)
            field_value = re.sub(r'\s+', ' ', field_value).strip()
            fields[field_name] = field_value
        
        # Create entry object
        entry = {
            'type': entry_type,
            'key': entry_key,
            'fields': fields
        }
        entries.append(entry)
    
    return entries

def format_authors(author_string):
    """Format author string from BibTeX format to readable format"""
    # Remove any curly braces and extra whitespace
    author_string = re.sub(r'\{|\}', '', author_string)
    author_string = re.sub(r'\s+', ' ', author_string).strip()
    
    # Replace "and" with commas for consistent formatting
    authors = author_string.split(' and ')
    return ', '.join(authors)

def convert_to_json_format(entries):
    """Convert parsed BibTeX entries to the required JSON format"""
    publications = []
    
    for entry in entries:
        fields = entry['fields']
        pub_type = fields.get('type', 'Conference Paper')
        venue = fields.get('venue', '')
        year = fields.get('year', '')
        title = fields.get('title', '')
        authors = format_authors(fields.get('author', ''))
        booktitle = fields.get('booktitle', '')
        journal = fields.get('journal', '')
        venue_full = journal if journal else booktitle
        award = fields.get('award', '')
        
        publication = {
            'title': title,
            'authors': authors,
            'venue': venue_full,
            'venueShort': venue,
            'year': year,
            'type': pub_type,
            'award': award
        }
        publications.append(publication)
    
    # Sort publications by year (newest first)
    publications.sort(key=lambda x: x['year'], reverse=True)
    
    return publications

def main():
    """Main function to parse BibTeX and output JSON"""
    if len(sys.argv) != 3:
        print("Usage: python bib_to_json.py <path_to_bib_file> <output_json_file>")
        sys.exit(1)
    
    bib_file = sys.argv[1]
    json_file = sys.argv[2]
    
    try:
        entries = parse_bibtex(bib_file)
        publications = convert_to_json_format(entries)
        
        # Write to output file
        with open(json_file, 'w', encoding='utf-8') as file:
            json.dump({'publications': publications}, file, indent=2, ensure_ascii=False)
        
        print(f"Successfully converted {len(publications)} publications to JSON.")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
