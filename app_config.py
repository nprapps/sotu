#!/usr/bin/env python

"""
Project-wide application configuration.

DO NOT STORE SECRETS, PASSWORDS, ETC. IN THIS FILE.
They will be exposed to users. Use environment variables instead.
"""

import os

PROJECT_NAME = 'State of the Union'
DEPLOYED_NAME = 'state-of-the-union-2013'

PRODUCTION_S3_BUCKETS = ['apps.npr.org', 'apps2.npr.org']
PRODUCTION_SERVERS = ['cron.nprapps.org']

STAGING_S3_BUCKETS = ['stage-apps.npr.org']
STAGING_SERVERS = ['cron-staging.nprapps.org']

S3_BUCKETS = []
SERVERS = []
DEBUG = True

PROJECT_DESCRIPTION = 'Listen in and discuss the State of the Union address with NPR\'s correspondents on our live blog.'
SHARE_URL = 'http://%s/%s/' % (PRODUCTION_S3_BUCKETS[0], DEPLOYED_NAME)

TWITTER = {
    'TEXT': PROJECT_DESCRIPTION,
    'URL': SHARE_URL
}

FACEBOOK = {
    'TITLE': PROJECT_NAME,
    'URL': SHARE_URL,
    'DESCRIPTION': PROJECT_DESCRIPTION,
    'IMAGE_URL': 'http://media.npr.org/assets/img/2012/01/24/sotu01_sq-s2.jpg',
    'APP_ID': '138837436154588'
}

NPR_DFP = {
    'STORY_ID': '171421875',
    'TARGET': '\/news_politics;storyid=171421875'
}

GOOGLE_ANALYTICS_ID = 'UA-5828686-4'

CHAT = {
    'ID': '74796',
    'TOKEN': 'FtP7wRfX',
    'UPDATE_INTERVAL': 5000,
    'FILTER_USER_ID': 14062382
}

def configure_targets(deployment_target):
    """
    Configure deployment targets. Abstracted so this can be
    overriden for rendering before deployment.
    """
    global S3_BUCKETS
    global SERVERS
    global DEBUG
    global CHAT

    if deployment_target == 'production':
        S3_BUCKETS = PRODUCTION_S3_BUCKETS
        SERVERS = PRODUCTION_SERVERS
        DEBUG = False

        CHAT['ID'] = '80516'
        CHAT['FILTER_USER_ID'] = 1417200
    else:
        S3_BUCKETS = STAGING_S3_BUCKETS
        SERVERS = STAGING_SERVERS
        DEBUG = True

        CHAT['ID'] = '74796'
        CHAT['FILTER_USER_ID'] = 14062382

DEPLOYMENT_TARGET = os.environ.get('DEPLOYMENT_TARGET', None)

configure_targets(DEPLOYMENT_TARGET)
