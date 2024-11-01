import axios from 'axios'

const baseUrl = '/api'

//axios二次封装核心逻辑
class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }

interception(instance) {
    // Add a request interceptor
    instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
    }, function (error) {
    // Do something with request error
    return Promise.reject(error);
    });

    // Add a response interceptor
    instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
    }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
    });
}

    request(options) {
        options = { ...this.getInsideConfig(), ...options }
        //创建axios的实例
        const instance = axios.create()
        this.interception(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)