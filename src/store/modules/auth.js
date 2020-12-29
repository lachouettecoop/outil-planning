import axios from 'axios'
import { LOGGED_IN_USER } from '@/graphql/queries'
import { createProvider } from '../../vue-apollo'

let apolloProvider = createProvider()
let apollo = apolloProvider.defaultClient

const state = {
    user: null,
    loginFailed: false
}

const getters = {
    isLoginFailed: state => state.loginFailed,
    user: state => state.user
}


const actions = {
    async LogIn({ commit }, user) {
        try {
            let resultLogIn = await axios.post('login_api', user)

            console.log(resultLogIn.data)
            localStorage.setItem(process.env.AUTH_TOKEN, resultLogIn.data.token)
           
            let resultGetUser = await apollo.query(
            {
                query: LOGGED_IN_USER,
                variables: { id: `/api/users/${resultLogIn.data.userId}` }
            })

            commit('login', resultGetUser.data.user )
            commit('setFailedLogin', false)
        }
        catch (ex) {
            console.log('error from auth ' + ex)
            commit('setFailedLogin', true)
        }
    },
    async LogOut({ commit }) {
        commit('logout')
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem(process.env.AUTH_TOKEN)
        }
    }
}

const mutations = {
    login(state, user) {
        state.user = user
    },
    logout(state) {
        state.user = null
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
