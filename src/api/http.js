import axios from 'axios';

//配置ajax的基本信息
axios.create={
	baseURL:'http://127.0.0.1:3000',//网络请求路径
	timeout:3000 //设置请求时间
};

//拦截器,对接收到的信息进行处理
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  
 // 添加响应拦截器 
 axios.interceptors.response.use(function (response) {
    // 在发送请求之前做些什么
	if(response.status == 200){
			return response.data;
		}
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  
  
  //将两种方式暴露出去
  export default{
	  post:function(obj){
		  return axios.post(obj)
	  },
	  get(obj){
		  return axios.get(obj)
	  }
  }