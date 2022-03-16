<template>
  <!-- 템플릿 루트는 하나의 element만 가질 수 있다 -->
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름"상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
      v-on:renew="renewStr"
      v-bind:propsdata="str"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  data () {
    return {
      str: 'Header'
    }
  },
  components: {
    AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = 'hi'
    }
  }
}
</script>

<style>

</style>