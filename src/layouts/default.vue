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
                <div class="page-tags" v-if="tags">
                    <saber-link class="tag" :to="`/tags/${tag}`" v-for="tag in tags" :key="tag">
                        #{{ tag }}
                    </saber-link>
                </div>
                <div class="page-footer">
                    <time class="page-time">
                        {{ formatDate(page.attributes.createdAt) }}
                    </time>
                </div>
                <div class="prev-next" v-if="page.prevPost || page.nextPost">
                    <saber-link v-if="page.prevPost" :to="page.prevPost.permalink" class="prev">
                        ← {{ page.prevPost.title }}
                    </saber-link>
                    <saber-link v-if="page.nextPost" :to="page.nextPost.permalink" class="next">
                        {{ page.nextPost.title }} →
                    </saber-link>
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
        computed: {
            tags() {
                return this.page.attributes.tags && this.page.attributes.tags.sort()
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