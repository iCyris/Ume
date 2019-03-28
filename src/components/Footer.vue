<template>
    <div class="footer">
        <div class="sp-copyright">
            {{ copyRight }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                copyRight: this.$themeConfig.copyRight
            }
        }
    }
</script>
