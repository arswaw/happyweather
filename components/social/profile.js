import { ProfileTemplate} from '../../templates/social/profile-template.js'
import MainBio from './profile/main-bio.js';
import AboutSection from './profile/about-section.js';
import ProfilePhotosGrid from './profile/profile-photos-grid.js';
import ProfileFeed from './profile/profile-feed.js';

const Profile = {
    template: ProfileTemplate,
    components: {
        'main-bio': MainBio,
        'about-section': AboutSection,
        'profile-photos-grid': ProfilePhotosGrid,
        'profile-feed': ProfileFeed
    }
}

export default Profile
