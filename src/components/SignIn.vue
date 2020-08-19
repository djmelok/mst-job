<template>
  <div class="login">
    <h2>Login</h2>
    <div class="flash_error" v-if="error_msg">
      <span>{{error_msg}}</span>
      <i @click="error_msg = null" class="material-icons">close</i>
    </div>
    <form @submit.prevent="submitLoginUser">
      <input v-model.trim="email" placeholder="Email" />
      <input v-model.trim="password" type="password" placeholder="Password" />
      <button type="submit">
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
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      error_msg: "",
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
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
            this.error_msg = "Incorrect email or password.";
            return;
          }

          localStorage.login_status = true;
          localStorage.login_name = response.data[0].email;
          this.updateLoginStatus();
          this.updateLoginName();
          this.getUsersFromApi();
          this.$router.push("/");
        });
    },
    submitLoginUser() {
      this.error_msg = "";
      if (this.$v.$invalid) {
        if (!this.$v.email.required || !this.$v.password.required) {
          this.error_msg = "Email and password fields is required.";
        } else if (!this.$v.email.email) {
          this.error_msg = "Incorrect email field.";
        } else if (!this.$v.password.minLength) {
          this.error_msg = `Password must be more than ${this.$v.password.$params.minLength.min} characters.`;
        }

        this.$v.$touch();

        return;
      }

      this.checkLoginUser({ email: this.email, password: this.password });
    },
  },
};
</script>

<style scoped>
.invalid {
  color: red;
}

.login {
  width: 20%;
  text-align: center;
  margin: 0 auto;
}

form {
  padding: 20px;
  border: 1px solid #d8dee2;
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
  font-weight: bold;
}

form button i {
  margin-left: 6px;
}

form a {
  margin-left: auto;
}
</style>
