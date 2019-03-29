<template>
    <div class="footer">
        <div class="sp-copyright">
            {{ copyRight }}
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            copyRight() {
                return this.$themeConfig.copyRight
            }
        }
    }
</script>
