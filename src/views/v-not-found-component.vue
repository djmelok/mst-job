<template>
  <div>
    <h1>Страница не найдена!</h1>
    <router-link :to="base_url">На главную</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NotFoundComponent",
  computed: {
    ...mapState(["base_url"]),
  },
};
</script> 

<style scoped>
div {
  margin: 0 auto;
  text-align: center;
}

a {
  font-weight: bold;
  text-transform: uppercase;
}
</style>
