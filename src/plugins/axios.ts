
import axios from 'axios'
import Vue from 'vue'

let config = {
  baseURL: process.env.VUE_APP_API_URL || ''
  // headers: { requestType: '100006' } // 增加固定请求头
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // if (!config.headers.token) {
    //   config.headers.token = store.state.token
    // }
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function ({ data, request }) {
    // Do something with response data
    return Promise.reject(data)
  },
  function (error) {
    // Do something with response error
    if (error.response && error.response.data) {
      console.error(error.response.data.console)
    } else {
      console.error(error)
    }
    return Promise.reject(error)
  }
)

export const request = _axios
