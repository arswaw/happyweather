import { ProfileFeedTemplate } from '../../../templates/social/profile/profile-feed-template.js'
import StatusUpdate from './feed/status-update.js';
import FeedItem from './feed/feed-item.js';

const ProfileFeed = {
    template: ProfileFeedTemplate,
    components: {
        'status-update': StatusUpdate,
        'feed-item': FeedItem
    },
    data: function () {
        return {
            items: [
                {
                    author: 'Lil Pump',
                    authorId: 12,
                    id: 1234,
                    datePosted: '10m',
                    text: `Your mom still live in a tent.
                        Me and my grandma take meds,
                        still slingin' dope in the 'jects?
                    `,
                    replies: [2346,3457]
                },
                {
                    author: 'Smokepurpp',
                    authorId: 13,
                    id: 1235,
                    datePosted: '4m',
                    text: `I am a levelheaded individual
                        who writes hit rap songs.
                    `,
                    replies: []
                },
                {
                    author: 'Lil Wayne',
                    authorId: 14,
                    id: 1236,
                    datePosted: '2m',
                    text: `Y'all my mini-mes
                    But the kid is not my son, shout out Billie Jean
                    `,
                    replies: []
                }
            ]
        }
     }
}

export default ProfileFeed
