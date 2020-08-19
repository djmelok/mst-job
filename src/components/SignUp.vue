<template>
  <div class="sign_up">
    <h2>Registration</h2>
    <div class="flash_error" v-if="error_msg">
      <span>{{error_msg}}</span>
      <i @click="error_msg = null" class="material-icons">close</i>
    </div>
    <form @submit.prevent="submitSignUpUser">
      <input v-model.trim="email" type="text" placeholder="Email" />
      <input v-model.trim="password" type="password" placeholder="Password" />
      <input v-model.trim="repeat_password" type="password" placeholder="Repeat password" />
      <button type="submit">
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
import { email, required, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      repeat_password: "",
      error_msg: "",
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    repeat_password: { sameAsPassword: sameAs("password") },
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
          localStorage.login_status = true;
          localStorage.login_name = response.data.email;
          this.updateLoginStatus();
          this.updateLoginName();
          this.$router.push("/");
        });
    },
    async checkRegUsers(user) {
      await axios
        .get("http://localhost:3000/registered_users?email=" + user.email)
        .then((response) => {
          if (response.data.length != 0) {
            this.error_msg = "This user already exists.";
            return;
          }
          this.updateRegUsers(user);
        });
    },
    submitSignUpUser() {
      this.error_msg = "";

      if (this.$v.$invalid) {
        if (!this.$v.email.required || !this.$v.password.required) {
          this.error_msg = "Email and password fields is required.";
        } else if (!this.$v.email.email) {
          this.error_msg = "Incorrect email field.";
        } else if (!this.$v.password.minLength) {
          this.error_msg = `Password must be more than ${this.$v.password.$params.minLength.min} characters.`;
        } else if (!this.$v.repeat_password.sameAs) {
          this.error_msg = "Passwords must be identical.";
        }

        this.$v.$touch();
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
