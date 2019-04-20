const FeedItemTemplate = /*html*/`
    <section>
        <div class="status-name-and-date">
            <h3>{{item.author}}</h3>
            <small>{{item.datePosted}}</small>
        </div>
        <br>
        <p class="text">{{item.text}}</p>
        <feed-item-replies
             v-bind:replies="item.replies" 
             class="feed-item-replies"
             v-if="item.replies.length > 0">
        </feed-item-replies><hr>
    </section>
`

export { FeedItemTemplate}
