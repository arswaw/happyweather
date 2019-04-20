import { ProfileFeedTemplate } from '../../../templates/social/profile/profile-feed-template.js'
import StatusUpdate from './feed/status-update.js';
import FeedItem from './feed/feed-item.js';

const ProfileFeed = {
    template: ProfileFeedTemplate,
    components: {
        'status-update': StatusUpdate,
        'feed-item': FeedItem
    }
}

export default ProfileFeed
