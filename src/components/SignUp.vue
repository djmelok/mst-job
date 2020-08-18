<template>
  <div class="sign_up">
    <h2>Registration</h2>
    <form>
      <input required v-model="email" type="email" placeholder="Email" />
      <input required v-model="password" type="password" placeholder="Password" />
      <input required v-model="password_again" type="password" placeholder="Password again" />
      <button type="submit" @click="submitSignUpUser">
        Sign Up
        <i class="material-icons">login</i>
      </button>
      <router-link to="/">Login</router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      password_again: "",
    };
  },
  computed: {
    ...mapGetters(["getLogin"]),
  },
  methods: {
    ...mapMutations(["updateLoginStatus"]),
    ...mapMutations(["updateLoginName"]),
    ...mapActions(["getUsersFromApi"]),

    async updateRegUsers(user) {
      await axios
        .post("http://localhost:3000/registered_users", user)
        .then((response) => {
          console.log("AXIOS: ", response.data);
          localStorage.login_status = true;
          localStorage.login_name = response.data.email;
          this.updateLoginStatus();
          this.updateLoginName();
          this.$router.push("/");
        })
        .catch((e) => alert(e));
    },
    async checkRegUsers(user) {
      await axios
        .get("http://localhost:3000/registered_users?email=" + user.email)
        .then((response) => {
          if (response.data.length != 0) {
            throw Error("This user already exists.");
          }
          this.updateRegUsers(user);
        })
        .catch((e) => alert(e));
    },
    submitSignUpUser() {
      if (!this.email || !this.password || !this.password_again) {
        alert("Please fill in all fields");
        return;
      } else if (this.password != this.password_again) {
        alert("Password mismatch.");
        return;
      } else if (this.password.length < 6) {
        alert("Short password (more than 6 characters)");
        return;
      }

      this.checkRegUsers({
        id: Date.now(),
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.sign_up {
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
