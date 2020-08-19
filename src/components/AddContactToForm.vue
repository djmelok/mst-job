<template>
  <div class="user_add_area">
    <h4>Add new contact:</h4>
    <div class="flash_error" v-if="error_msg">
      <span>{{error_msg}}</span>
      <i @click="error_msg = null" class="material-icons">close</i>
    </div>
    <form @submit.prevent="submitAddContact">
      <input v-model="first_name" type="text" placeholder="First name" />
      <input v-model="last_name" type="text" placeholder="Last name" />
      <input v-model="email" type="text" placeholder="Email" />
      <input v-model="age" type="text" placeholder="Age" />
      <input v-model="phone" type="text" placeholder="Phone" />
      <button type="submit">
        <i class="material-icons">add</i>
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { email, between, required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      age: "",
      phone: "",
      error_msg: "",
    };
  },
  validations: {
    first_name: { required },
    last_name: { required },
    email: { required, email },
    age: { required, between: between(0, 100) },
    phone: { required },
  },
  computed: {
    ...mapGetters(["getLoginName"]),
  },
  methods: {
    ...mapActions(["addUser"]),
    submitAddContact() {
      this.error_msg = "";
      if (this.$v.$invalid) {
        if (
          !this.$v.first_name.required ||
          !this.$v.last_name.required ||
          !this.$v.email.required ||
          !this.$v.age.required ||
          !this.$v.phone.required
        ) {
          this.error_msg = "All fields is required.";
        } else if (!this.$v.email.email) {
          this.error_msg = "Incorrect email field.";
        } else if (!this.$v.age.between) {
          this.error_msg = "Incorrect age field.";
        }

        this.$v.$touch();
        return;
      }

      this.addUser({
        id: Date.now(),
        firstName: this.first_name,
        lastName: this.last_name,
        email: this.email,
        age: this.age,
        phone: this.phone,
        owner: this.getLoginName,
      });

      this.first_name = this.last_name = this.email = this.age = this.phone =
        "";
    },
  },
};
</script>

<style scoped>
.user_add_area {
  width: 16%;
  margin-right: auto;
}

.user_add_area h4 {
  margin-bottom: 8px;
}

.user_add_area form {
  padding: 20px;
  border: 1px solid #d8dee2;
  display: flex;
  flex-direction: column;
}

.user_add_area input {
  width: 100%;
  margin-bottom: 8px;
}
</style>
