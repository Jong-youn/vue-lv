<template>
  <div>
    <div v-for="news in fetchedNews" v-bind:key=news.id>{{ news.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // ...mapGetters({
    //   fetchedNews: 'fetchedNews'
    // })
    ...mapGetters([
      'fetchedNews'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>