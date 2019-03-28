<template>
    <div class="header">
        <div id="sp-button" v-on:click="clickEvent">
            <div></div>
        </div>
        <div class="sp-title">
            <saber-link to="/">
                <h1>{{ title }}</h1>
                <h2>{{ subTitle }}</h2>
            </saber-link>
        </div>
        <transition name="fade">
            <div v-if="show" v-on:click="clickEvent" class="sp-cover"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: this.$themeConfig.title,
                subTitle: this.$themeConfig.subTitle,
                show: false
            }
        },

        methods: {
            clickEvent() {
                const sideBar = document.querySelector('.sidebar');
                const spButton = document.querySelector('#sp-button');
                if (sideBar.dataset.state === 'true') {
                    this.show = !this.show;
                    sideBar.dataset.state = 'false';
                    spButton.dataset.state = 'false';
                }
                else {
                    this.show = !this.show;
                    sideBar.dataset.state = 'true';
                    spButton.dataset.state = 'true';
                }
            }
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>