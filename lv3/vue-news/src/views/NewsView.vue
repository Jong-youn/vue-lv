<template>
  <div>
    <p v-for="news in fetchedNews" v-bind:key=news.id>
      <a v-bind:href="news.url">{{ news.title }}</a>
      <small>{{ news.time_ago }} by {{ news.user }}</small>
    </p>
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