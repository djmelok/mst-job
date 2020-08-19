<template>
  <div class="login">
    <h2>Login</h2>
    <form>
      <input required v-model="email" type="email" placeholder="Email" />
      <input required v-model="password" type="password" placeholder="Password" />
      <button type="submit" @click="submitLoginUser">
        Sign in
        <i class="material-icons">login</i>
      </button>
      <router-link to="sign_up">Sign up</router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["updateLoginStatus"]),
    ...mapMutations(["updateLoginName"]),
    ...mapActions(["getUsersFromApi"]),

    async checkLoginUser(user) {
      await axios
        .get(
          `http://localhost:3000/registered_users?email=${user.email}&password=${user.password}`
        )
        .then((response) => {
          if (response.data.length == 0) {
            throw Error("Incorrect email or password.");
          }
          localStorage.login_status = true;
          localStorage.login_name = response.data[0].email;
          this.updateLoginStatus();
          this.updateLoginName();
          this.getUsersFromApi();
          this.$router.push("/");
        });
    },
    submitLoginUser(e) {
      e.preventDefault();
      this.checkLoginUser({ email: this.email, password: this.password });
    },
  },
};
</script>

<style scoped>
.login {
  width: 20%;
  text-align: center;
  margin: 0 auto;
}

form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

form input,
form button {
  margin-bottom: 10px;
}

form button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

form button i {
  margin-left: 6px;
}

form a {
  margin-left: auto;
}
</style>
