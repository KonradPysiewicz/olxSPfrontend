import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from '../App.vue'
import router from "../router";
import axios from "axios";

// Create a new store instance.
const store = createStore({
    state: {
        token: undefined
    },
    mutations: {
        SETTOKEN(state, payload){
            state.token = payload;
        }
    },
    actions:{
      setToken(commit, token){
          commit('SETTOKEN',token)
      },
        async handleSubmit({commit}, {email, password}) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', {
                    email: email,
                    password: password
                })
                localStorage.setItem('token', response.data.token);
                commit('SETTOKEN', response.data.token)

                localStorage.setItem('id', response.data.tokeninfo.tokenable_id);
                router.push('/');
            } catch (e){
                alert("Wprowadzono nieprawidłowe dane")
            }
        }
    },
    getters:{
        getToken(state){
            return state.token;
        },
        tokenIsSet(state){
            return state.token != undefined;
        }
    }
})


export default store