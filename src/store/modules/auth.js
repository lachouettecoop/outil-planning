import axios from 'axios'

const state = {
  userId: null,
  authStatus: false,
  loginFailed: false
}

const getters = {
  isAuthenticated: state => state.authStatus,
  isLoginFailed: state => state.loginFailed,
  user: state => state.userId
}

const actions = {
  async LogIn({ commit }, user) {
    await axios
      .post('login_api', user)
      .then(result => {
        console.log(result.data)
        localStorage.setItem(process.env.AUTH_TOKEN, result.data.token)
        commit('login', result.data.userId)
        commit('setFailedLogin', false)
      })
      .catch(error => {
        console.log('error from auth ' + error)
        commit('setFailedLogin', true)
      })
  },
  async LogOut({ commit }) {
    commit('logout')
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(process.env.AUTH_TOKEN)
    }
  }
}

const mutations = {
  login(state, userId) {
    state.authStatus = true
    state.userId = userId
  },
  logout(state) {
    state.userId = null
  },
  setFailedLogin(state, isFailed) {
    state.loginFailed = isFailed
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
