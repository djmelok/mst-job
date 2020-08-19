<template>
  <form @submit.prevent="sumbitConfirmUser" class="contact_info">
    <template v-if="edit_mode">
      <p>
        <input required v-model="user.firstName" type="text" placeholder="First name" />
      </p>
      <p>
        <input required v-model="user.lastName" type="text" placeholder="Last name" />
      </p>
      <p>
        <input required v-model="user.email" type="email" placeholder="Email" />
      </p>
      <p>
        <input required v-model="user.age" type="text" placeholder="Age" />
      </p>
      <p>
        <input required v-model="user.phone" type="text" placeholder="Phone" />
      </p>
    </template>
    <template v-else>
      <p>{{user.firstName}}</p>
      <p>{{user.lastName}}</p>
      <p>{{user.email}}</p>
      <p>{{user.age}}</p>
      <p>{{user.phone}}</p>
    </template>
    <div class="action_btns">
      <button v-if="!edit_mode" type="button" @click="buttonEditUser">
        <i class="material-icons">edit</i>
      </button>
      <button v-else type="submit">
        <i class="material-icons">check</i>
      </button>
      <button type="button" @click="buttonDeleteUser">
        <i class="material-icons">delete</i>
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    user: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      edit_mode: false,
    };
  },
  methods: {
    ...mapActions(["editUser"]),
    ...mapActions(["deleteUser"]),

    buttonEditUser(e) {
      e.preventDefault();
      this.edit_mode = true;
    },
    sumbitConfirmUser() {
      this.edit_mode = false;
      this.editUser(this.user);
    },
    buttonDeleteUser(e) {
      e.preventDefault();
      this.deleteUser(this.user);
    },
  },
};
</script>

<style scoped>
.contact_info {
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 8px;
  padding: 8px 12px;
  padding-right: 0;
}

.contact_info p {
  width: 18%;
  border-right: 1px solid #b4b4b4;
}

.contact_info p input {
  width: 90%;
  padding: 7px;
}

.action_btns {
  display: flex;
  margin: 0 auto;
}

.action_btns button:first-child {
  margin-right: 6px;
}
</style>
