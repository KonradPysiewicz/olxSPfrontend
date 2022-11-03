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
        async handleSubmit({commit}, {username, password}) {
            try {
                const response = await axios.post('http://127.0.0.1:8080/api/login', {
                    username: username,
                    password: password
                })
                localStorage.setItem('token', 'token');
                commit('SETTOKEN', 'token')

                axios.get('http://127.0.0.1:8080/api/getUserByUsername/' + username)
                    .then( response2 => {
                        localStorage.setItem('id', response2.data);
                    })
                    .catch( error => {
                        console.log(error)
                    })

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