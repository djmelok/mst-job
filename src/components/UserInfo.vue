<template>
  <div class="user">
    <div class="user_name">
      <i class="material-icons">account_circle</i>
      {{getLoginName[0].toUpperCase() + getLoginName.slice(1).split("@")[0]}}
    </div>
    <form>
      <button @click="submitLogoutUser" type="submit">
        Log out
        <i class="material-icons">exit_to_app</i>
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["getLoginName"]),
  },
  methods: {
    ...mapMutations(["updateLoginStatus"]),
    submitLogoutUser() {
      delete localStorage.login_status;
      delete localStorage.login_name;
      this.updateLoginStatus();
    },
  },
};
</script>

<style scoped>
.user {
  display: flex;
  margin-left: auto;
}

.user_name {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

form {
  width: 60%;
  display: flex;
  margin: 0 auto;
}

form button {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
}

form button i {
  margin-left: 4px;
}
</style>
