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
    <div class="search_input">
      <input type="text" v-model="search_value" />
      <i class="material-icons">search</i>
    </div>
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
  },
  watch: {
    selected: function (selected) {
      this.searchContect({ value: this.search_value, selected });
    },
    search_value: function (value) {
      this.searchContect({ value, selected: this.selected });
    },
  },
};
</script>

<style scoped>
.search_area {
  display: flex;
  align-items: center;
}

.search_input {
  margin: 0 6px;
  position: relative;
}

.search_input input {
  padding-right: 30px;
}

.search_input i {
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  right: 4px;
}
</style>
