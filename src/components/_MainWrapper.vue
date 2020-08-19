<template>
  <div class="main_wrapper">
    <AddContactToForm />
    <div class="main_body">
      <div class="main_body__header">
        <SearchContact />
        <UserInfo />
      </div>
      <div class="table" v-if="!getUsers.length == 0">
        <div class="table__header">
          <p>First name</p>
          <p>Last name</p>
          <p>Email</p>
          <p>Age</p>
          <p>Phone</p>
        </div>
        <div class="table__body">
          <ContactForm v-for="user in getUsers" :key="user.id" :user="user" />
        </div>
      </div>
      <div class="no_contacts" v-else>
        <p>No contacts.</p>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from "../components/UserInfo.vue";
import SearchContact from "../components/SearchContact.vue";
import AddContactToForm from "../components/AddContactToForm.vue";
import ContactForm from "../components/ContactForm.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["getUsers"]),
  },
  methods: {
    ...mapMutations(["updateLoginStatus"]),
    ...mapMutations(["updateLoginName"]),
    ...mapActions(["getUsersFromApi"]),
  },
  async mounted() {
    this.updateLoginStatus();
    this.updateLoginName();
    this.getUsersFromApi();
  },
  components: {
    UserInfo,
    SearchContact,
    AddContactToForm,
    ContactForm,
  },
};
</script>

<style scoped>
.main_wrapper {
  width: 100%;
  display: flex;
}

.main_body {
  width: 82%;
  display: flex;
  flex-direction: column;
}

.main_body__header {
  display: flex;
}

.table {
  margin-top: 12px;
}

.table__header {
  display: flex;
  background: #efefef;
  padding: 12px;
  border-radius: 6px 6px 0 0;
  text-align: center;
}

.table__header p {
  width: 18%;
}

.table__body {
  overflow: auto;
  max-height: 80vh;
}

.table__body div:nth-child(even) {
  background: #efefef;
}

.table__body div:last-child {
  border-radius: 0 0 6px 6px;
}

.no_contacts {
  padding: 24px;
  background: #efefef;
  margin-top: 12px;
  border-radius: 6px;
}
</style>
