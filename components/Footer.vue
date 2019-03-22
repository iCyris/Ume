<template>
    <div class="footer">
        <div class="sp-copyright">
            {{ copyRight }}
        </div>
    </div>
</template>

<script>
    import { themeConfig } from 'saber/config'

    export default {
        data() {
            return {
                copyRight: themeConfig.copyRight
            }
        }
    }
</script>
