<template>
  <form class="search_area">
    <select v-model="selected">
      <option disabled value>Search by:</option>
      <option value="firstName">First name</option>
      <option value="lastName">Last name</option>
      <option value="email">Email</option>
      <option value="age">Age</option>
      <option value="phone">Phone</option>
    </select>
    <input type="text" v-model="search_value" />
    <button @click="sumbitSearch(search_value, selected)">
      <i class="material-icons">search</i>
    </button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      selected: "firstName",
      search_value: "",
    };
  },
  computed: {},
  methods: {
    ...mapMutations(["searchContect"]),
    sumbitSearch(value, selected) {
      selected = String(selected);
      this.searchContect({ value, selected });
    },
  },
};
</script>

<style scoped>
.search_area {
  display: flex;
  align-items: center;
}

.search_area input {
  margin: 0 6px;
}

.search_area button {
  height: 100%;
  padding: 0 12px;
}
</style>
