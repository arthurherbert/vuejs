import Vue from 'vue';
import VueResource from 'vue-resource';
//Comiunicate with backend
Vue.use(VueResource);
require('./interceptors');

export class Jwt{
    static accessToken(email, password){
        return Vue.http.post('http://localhost:8000/api/login', {
            email,
            password
        });
    }

    static refreshToken(){
        return Vue.http.post('http://localhost:8000/api/refresh_token');
    }
}

const User = Vue.resource('http://localhost:8000/api/user')
export {User};