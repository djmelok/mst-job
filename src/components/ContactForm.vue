<template>
  <div class="contact_info">
    <template v-if="edit_mode">
      <p>
        <input v-model="user.firstName" />
      </p>
      <p>
        <input v-model="user.lastName" />
      </p>
      <p>
        <input v-model="user.email" />
      </p>
      <p>
        <input v-model="user.age" />
      </p>
      <p>
        <input v-model="user.phone" />
      </p>
    </template>
    <template v-else>
      <p>{{user.firstName}}</p>
      <p>{{user.lastName}}</p>
      <p>{{user.email}}</p>
      <p>{{user.age}}</p>
      <p>{{user.phone}}</p>
    </template>
    <form>
      <button v-if="!edit_mode" type="submit" @click="sumbitEditUser">
        <i class="material-icons">edit</i>
      </button>
      <button v-else type="submit" @click="sumbitConfirmUser">
        <i class="material-icons">check</i>
      </button>
      <button type="submit" @click="sumbitDeleteUser">
        <i class="material-icons">delete</i>
      </button>
    </form>
  </div>
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

    sumbitEditUser(e) {
      e.preventDefault();
      this.edit_mode = true;
    },
    sumbitConfirmUser(e) {
      e.preventDefault();
      this.edit_mode = false;
      this.editUser(this.user);
    },
    sumbitDeleteUser() {
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
}

.contact_info p {
  width: 18%;
}

.contact_info p input {
  width: 100%;
  padding: 7px;
}

form {
  display: flex;
  margin-left: auto;
}

form button:first-child {
  margin-right: 6px;
}
</style>
