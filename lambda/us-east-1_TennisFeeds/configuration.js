'use strict';

var config = {
    // TODO Add Application ID
    appId : 'amzn1.ask.skill.aa470a26-3515-4795-b8c0-024f6e6695b0',
    // TODO Add an appropriate welcome message.
    welcome_message : 'Welcome to Tennis Feeds.',

    number_feeds_per_prompt : 3,
    speak_only_feed_title : false,
    display_only_title_in_card : true,

    // TODO Add the category name (to feed name) and the corresponding URL
    feeds : {
        'US OPEN' : 'http://www.usopen.org/en_US/news/rss/usopen.rss',
        'Australian Open' : 'http://feeds.feedburner.com/Australian-Open',
        'ATP World Tour' : 'http://www.atpworldtour.com/en/media/rss-feed/xml-feed',
        'WTA Tennis' : 'http://www.wtatennis.com/rss-news.xml',
        'ESPN Tennis' : 'http://www.espn.com/espn/rss/tennis/news',
    },

    speech_style_for_numbering_feeds : 'Item',

    // TODO Add the s3 Bucket Name, dynamoDB Table Name and Region
    s3BucketName : 'my-tennis-feed-alexa-skill',
    dynamoDBTableName : 'MyTennisFeedSkillTable',
    dynamoDBRegion : 'US East (N. Virginia)'
};

module.exports = config;