import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        login_status: false,
        login_name: '',
        users: [],
        const_users: [],
    },
    getters: {
        getLogin(state) {
            return state.login_status;
        },
        getLoginName(state) {
            return state.login_name;
        },
        getUsers(state) {
            return state.users;
        },
    },
    actions: {
        async getUsersFromApi(ctx) {
            await axios.get("http://localhost:3000/users?owner=" + this.state.login_name)
                .then((response) => {
                    ctx.commit('updateUsers', response.data);
                })
        },
        async deleteUser(ctx, user) {
            await axios.delete("http://localhost:3000/users/" + user.id);
            await axios.get("http://localhost:3000/users?owner=" + this.state.login_name)
                .then((response) => {
                    ctx.commit('updateUsers', response.data);
                });
        },
        async editUser(ctx, user) {
            await axios.delete("http://localhost:3000/users/" + user.id);

            if ((user.firstName + user.lastName + user.email + user.age + user.phone) != "") {
                await axios.post("http://localhost:3000/users", user);
            }

            await axios.get("http://localhost:3000/users?owner=" + this.state.login_name)
                .then((response) => {
                    ctx.commit('updateUsers', response.data);
                });
        },
        async addUser(ctx, user) {
            await axios.post("http://localhost:3000/users", user);
            await axios.get("http://localhost:3000/users?owner=" + this.state.login_name)
                .then((response) => {
                    ctx.commit('updateUsers', response.data);
                });
        },
    },
    mutations: {
        updateLoginStatus(state) {
            if (localStorage.login_status) {
                state.login_status = JSON.parse(localStorage.login_status);
            } else {
                state.login_status = false;
            }
        },
        updateLoginName(state) {
            state.login_name = localStorage.login_name;
        },
        updateUsers(state, users) {
            state.users = users.sort((a, b) => b.id - a.id);
            state.const_users = users.sort((a, b) => b.id - a.id);
        },
        searchContect(state, search) {
            if (!search.value) {
                state.users = state.const_users;
            } else {
                state.users = state.const_users;
                state.users = state.users.filter(function (item) {
                    return item[search.selected].toLowerCase().includes(search.value.toLowerCase());
                })
            }
        },
    }

});

export default store;