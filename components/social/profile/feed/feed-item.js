import { FeedItemTemplate } from '../../../../templates/social/profile/feed/feed-item-template.js'
import { FeedItemReplies } from './feed-item-replies.js';

const FeedItem = {
    props: ['item'],
    template: FeedItemTemplate,
    components: {
        'feed-item-replies': FeedItemReplies
    }
}

export default FeedItem
