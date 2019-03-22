<template>
    <div class="sidebar" data-state="false">
        <div class="site-title">
            <saber-link to="/">
                <h1>{{ title }}</h1>
                <h2>{{ subTitle }}</h2>
            </saber-link>
        </div>
        <div class="site-nav">
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
    import { themeConfig } from 'saber/config'

    export default {
        data() {
            return {
                title: themeConfig.title,
                subTitle: themeConfig.subTitle,
                nav: themeConfig.sideBar,
                copyRight: themeConfig.copyRight
            }
        }
    }
</script>