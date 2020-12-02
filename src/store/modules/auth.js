import axios from "axios";

const state = {
  user: null
};

const getters = {
  isAuthenticated: (state) => state.user != null ? true : false
};

const actions = {

  async LogIn({commit}, user) {

    await axios
    .post('login_api', user)
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })

    await commit("setUser", user.get("username"));
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },
  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};