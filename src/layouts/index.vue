<template>
    <div id="stage">
        <Header />
        <Sidebar />
        <div class="main" v-if="page.posts">
            <div class="index-content">
                <saber-link class="li-item" v-for="post in page.posts" :key="post.permalink" :to="post.attributes.permalink">
                    <div class="li-item-title">
                        {{ post.attributes.title }}
                    </div>
                    <div class="li-item-time">
                        {{ formatDate(post.attributes.createdAt) }}
                    </div>
                </saber-link>
            </div>
        </div>
        <div class="pagination" v-if="page.pagination">
            <div class="current">
                    {{ page.pagination.current }}/{{ page.pagination.total }}
            </div>
            <saber-link
                    class="prev"
                    title="新的文章"
                    v-if="page.pagination.hasPrev"
                    :to="page.pagination.prevLink">
                &#60;
            </saber-link>
            <saber-link
                    class="next"
                    title="旧的文章"
                    v-if="page.pagination.hasNext"
                    :to="page.pagination.nextLink">
                &#62;
            </saber-link>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Sidebar from '../components/Sidebar.vue'
    import Footer from '../components/Footer.vue'

    export default {
        components: {
            Header,
            Sidebar,
            Footer
        },
        props: ['page'],
        methods: {
            formatDate(v) {
                const date = new Date(v)
                return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
            }
        },
        head() {
            const pageTitle = this.page.attributes.title
            return {
                title: pageTitle ? `${pageTitle} - ${this.$siteConfig.title}` : this.$siteConfig.title,
                meta: [
                    {
                        name: 'description',
                        content: this.$siteConfig.description
                    }
                ]
            }
        }
    }
</script>