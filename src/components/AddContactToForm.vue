<template>
  <div class="user_add_area">
    <h4>Add new contact:</h4>
    <form>
      <input required v-model="first_name" type="text" placeholder="First name" />
      <input required v-model="last_name" type="text" placeholder="Last name" />
      <input required v-model="email" type="text" placeholder="Email" />
      <input required v-model="age" type="text" placeholder="Age" />
      <input required v-model="phone" type="text" placeholder="Phone" />
      <button type="submit" @click="submitAddContact">
        <i class="material-icons">add</i>
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      age: "",
      phone: "",
    };
  },
  computed: {
    ...mapGetters(["getLoginName"]),
  },
  methods: {
    ...mapActions(["addUser"]),
    submitAddContact(e) {
      if (
        !this.first_name ||
        !this.last_name ||
        !this.email ||
        !this.age ||
        !this.phone
      ) {
        alert("Please fill in all fields");
        return;
      }

      e.preventDefault();
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
  display: flex;
  flex-direction: column;
}

.user_add_area input {
  width: 100%;
  margin-bottom: 8px;
}
</style>
