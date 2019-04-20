const ProfileFeedTemplate = /*html*/`
    <aside>
        <status-update></status-update><hr>
        <feed-item v-bind:item="item" :key="item.id" v-for="item of items"></feed-item>
    </aside>
`

export { ProfileFeedTemplate }