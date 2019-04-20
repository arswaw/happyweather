import {
    FeedItemRepliesTemplate
} from '../../../../templates/social/profile/feed/feed-item-replies-template.js'

const FeedItemReplies = {
    props: ['replies'],
    template: FeedItemRepliesTemplate,
    data: function () {
        return {
            list: [{
                    author: 'Lil Pump',
                    authorId: 12,
                    id: 1234,
                    datePosted: '1m',
                    text: `Only wear designer, Esskeetit
                    Poppin' on the wraith, Esskeetit
                    `
                },
                {
                    author: 'Smokepurpp',
                    authorId: 13,
                    id: 1235,
                    datePosted: '1m',
                    text: `I make only the best replies.`
                }
            ]
        }
    }
}

export {
    FeedItemReplies
}