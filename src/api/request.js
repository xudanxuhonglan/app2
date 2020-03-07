import axios from './http.js';
//将所有接口集中在这里

//首页食品分类
function index_entry(){
	return axios.get('/data/v2/index_entry');
}

//暴露
export default{
	index_entry,
}