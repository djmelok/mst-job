<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import vEmptyLayout from "@/layouts/v-empty-layout";
import vMainLayout from "@/layouts/v-main-layout";

export default {
  name: "App",
  computed: {
    layout() {
      return this.$route.meta.layout || "v-empty-layout";
    },
  },
  components: {
    vEmptyLayout,
    vMainLayout,
  },
};
</script>