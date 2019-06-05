exports.onCreatePages = function() {
    // Sort posts by createdAt (date) from new to old
    const posts = [...this.pages.values()]
        .filter(page => page.attributes.type === 'post' && !page.attributes.draft)
        .sort((a, b) => {
            return a.attributes.createdAt > b.attributes.createdAt ? 1 : -1
        })
    const selectFields = page => (page && {
        title: page.attributes.title,
        permalink: page.attributes.permalink
    })
    this.config.siteConfig.tags = []
    for (const [index, post] of posts.entries()) {
        post.prevPost = selectFields(posts[index - 1])
        post.nextPost = selectFields(posts[index + 1])
        this.config.siteConfig.tags = [...this.config.siteConfig.tags, ...post.attributes.tags]
    }
}
