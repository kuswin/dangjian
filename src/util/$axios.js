  import axios from 'axios';
import Vue from 'vue';
import api from './api'
import router from '../router/index'

var xhr = axios.create({
  baseURL: 'http://16.yaojunrong.com/api/',
  timeout: 10000,
  headers:{'Content-Type':'application/json;charset=UTF-8'}
});

var $axios = {
  get(url, params, config) {
    return new Promise((resolve, reject) => {
      xhr.get(api[url], {params: params, config}).then(res => {
        if (res.data.isLogin == false) {
          console.log(res.data);
          // alert("登陆失败");
          // router.push("/load");
        }
        resolve(res.data)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      xhr.post(api[url], params).then(res => {
        console.log(res.data);
        if (res.data.isLogin == false) {

          alert("登陆失败");
          router.push("/load");
        }
        resolve(res.data)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }
}


Vue.prototype.$axios = $axios;
