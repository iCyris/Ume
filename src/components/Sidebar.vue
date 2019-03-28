<template>
    <div class="sidebar" data-state="false">
        <div class="site-title">
            <saber-link to="/">
                <h1>{{ title }}</h1>
                <h2>{{ subTitle }}</h2>
            </saber-link>
        </div>
        <div class="site-nav">
            <div class="nav-item" v-if="screenWidth <= 760">
                <saber-link :to="spHome.link">{{ spHome.title }}</saber-link>
            </div>
            <div class="nav-item" v-for="(item, index) in nav" :key="index">
                <saber-link :to="item.link">{{ item.title }}</saber-link>
            </div>
        </div>
        <div class="site-copyright">
            <p>
                {{ copyRight }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: this.$themeConfig.title,
                subTitle: this.$themeConfig.subTitle,
                nav: this.$themeConfig.sideBar,
                copyRight: this.$themeConfig.copyRight,
                spHome: this.$themeConfig.spHome,
                screenWidth: ''
            }
        },

        mounted: function () {
            this.screenWidth = document.documentElement.clientWidth
            window.addEventListener('resize', this.handleResize)
        },
        beforeDestroy: function () {
            window.removeEventListener('resize', this.handleResize)
        },

        methods: {
            handleResize (event) {
                this.screenWidth = document.documentElement.clientWidth
            }
        }
    }
</script>