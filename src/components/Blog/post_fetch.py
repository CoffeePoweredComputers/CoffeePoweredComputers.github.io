from os import listdir

import json
import re
import urllib3
import feedparser
from bs4 import BeautifulSoup



def parse_post(post_data):

    title = post_data['title']
    link = post_data['link']
    keywords = [ tag['term'].strip() for tag in post_data['tags'] ]
    date = post_data['published']

    #Extract the first paragraph
    soup = BeautifulSoup(post_data['content'][0]['value'], 'html.parser')
    abstract = soup.find('p').get_text()


    post_dict = {
            'title': title.strip(),
            'link': link,
            'date': date,
            'keywords': keywords,
            'body': abstract
            }


    return post_dict


def main():
    '''
    Just a main function that does all of the main thing...
    '''

    url = "https://medium.com/feed/@davidhsmith4"
    feed = feedparser.parse(url)

    json_data = []

    for entry in feed['entries']:
        json_data.append(parse_post(entry))

    with open('./posts.json', 'w') as f:
        f.write(json.dumps(json_data, indent=True))
        f.close()


###########################################################################################
main()
