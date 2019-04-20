const FeedItemRepliesTemplate = /*html*/`
    <section>
        <ul class="list-group">
            <li
                class="list-item"
                v-for="reply of list">
                <div class="status-name-and-date">
            <h3>{{reply.author}}</h3>
            <small>{{reply.datePosted}}</small>
        </div>
        <br>
        <p class="text">{{reply.text}}</p><br>
            </li>
        </ul>
    </section>
`

export { FeedItemRepliesTemplate}
