<template>
    <PostHeader v-if="showPostHeader" />
  <div class="container">
    <Header v-if="showHeader" />
    <router-view />
  </div>
  <Footer v-if="showFooter" />
</template>

<script>
import Header from './components/includes/header.vue'
import Footer from './components/includes/footer.vue'
import PostHeader from './views/Dashboard/MyAds/include/header.vue'
export default {
    components: {
        Header,
        Footer,
        PostHeader
    },

    computed: {
        showHeader() {
            return this.$route.meta.showHeader !== false;
        },
        showFooter() {
            return this.$route.meta.showFooter !== false;
        },
        showPostHeader() {
            return this.$route.meta.showPostHeader !== false;
        },
    }
}
</script>
<style scoped>
.container{
  margin-top: 1rem;
}
</style>
