from os import listdir

import json
import re


def parse_post(post_data, date):
    
    title = re.search('\#(.*)', post_data).group(1) # Regex to extract the title
    keywords = re.search('\<!--\nKeywords:(.*)', post_data).group(1) # Regex to extract the keywords

    post_dict = {
            'title': title.strip(),
            'date': date,
            'keywords': [keyword.strip() for keyword in keywords.split(',')],
            'body': post_data,
            }

    return post_dict


def main():
    '''
    Just a main function that does all of the main thing...
    '''

    json_data = []

    for post in listdir("./posts/"):

        with open('./posts/' + post, 'r') as f:
            post_data = f.read()
            json_data.append( parse_post(post_data, post[:-3]) )

    with open('./posts.json', 'w') as f:
        f.write(json.dumps(json_data, indent=True))
        f.close()


###########################################################################################
main()
