<template>
    <div>
        <Header />
        <Sidebar />
        <div class="main">
            <div class="page-content">
                <div class="page-header">
                    <h1>{{ page.attributes.title }}</h1>
                    <h2 />
                </div>
                <div class="page-body">
                    <div class="markdown-body">
                        <slot name="default"></slot>
                    </div>
                </div>
                <div class="page-footer">
                    <time class="page-time">
                        {{ formatDate(page.attributes.createdAt) }}
                    </time>
                </div>
                <div class="prev-next" v-if="page.prevPost || page.nextPost">
                    <router-link v-if="page.prevPost" :to="page.prevPost.attributes.permalink" class="prev">
                        ← {{ page.prevPost.attributes.title }}
                    </router-link>
                    <router-link v-if="page.nextPost" :to="page.nextPost.attributes.permalink" class="next">
                        {{ page.nextPost.attributes.title }} →
                    </router-link>
                </div>
            </div>
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
                return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
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