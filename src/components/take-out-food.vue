<template>
	<div class="TakeOutFood">
		<Header fixed :title="location">
			<span slot="left" class="el-icon-search" @click="goSearch"></span>
			<span slot="right" class="el-icon-user" @click="goPersonalCenter"></span>
		</Header>
		 <div >
		    <swiper :options="swiperOption" class="banner">
		      <swiper-slide v-for="(item,index) in banner" :key="index">
		        <ul>
		        	<li v-for="(el,i) in item" :key="i" @click="goshop(el.id)">
						<img :src="el.image_url" alt="">
						<span>{{el.title}}</span>
					</li>
		        </ul>
		      </swiper-slide>
		      <div class="swiper-pagination"  slot="pagination"></div>
		    </swiper>
		  </div>
		
		<div class="nearby-shop">
			<h3>附近商家</h3>
			<div class="list">
				<div class="left">
					<img src="" alt="">
				</div>
				<div class="right"></div>
			</div>
		</div>
		<BottomNav></BottomNav>
	</div>
</template>

<script>
	//引进底部导航组件
	import BottomNav from './bottom-nav.vue';
	//引进头部组件(mint-ui写好的，可以直接使用)
	import {Header} from 'mint-ui';
	import axios from 'axios';
	import request from '../api/request.js';
	import { swiper, swiperSlide } from 'vue-awesome-swiper' 
	//暴露出去
	export default{
		name:'TakeOutFood',
		components:{
			BottomNav,
			Header,
			swiper,
			swiperSlide
		},
		data(){
			return {
				location:'',
				//swiper的数据
				 swiperOption: {
					pagination: {
					  el: '.swiper-pagination'
					},
					grabCursor : true,
				 },
				 //轮播中的数据
				 banner:[]
			}
		},
		created() {
			let that = this;
			//通过百度api进行定位
			var geolocation = new BMap.Geolocation();		 
			geolocation.getCurrentPosition((pos)=>{//获取经纬度，存放在pos里
				// console.log(pos)
				 var geoc = new BMap.Geocoder();    
				 geoc.getLocation(pos.point, function(rs){//用获取的经纬度进行定位
					 let localInfo = rs.address.split('省')[1]
					 // console.log(localInfo,that)
					 that.location = localInfo
				 })
			})
			
			//从后台获取食品分类的数据
			request.index_entry().then((data)=>{
					let num = Math.ceil(data.length/8); 
					let group = [];
					//将传入的数据按序每组8个存入group
					for(var j=1;j<=num;j++){
						let arr = [];
						data.forEach(function(el,i){
							if( (i>=(j-1)*8) && (i<=(j*8-1)) ){
								arr.push(el)
							}	
						})
						group.push(arr)
					}
					that.banner = group;//将group里的数据给代理数据banner
			})
		},
		methods:{
			goshop(index){//点击商品分类进入商铺
				this.$router.push({path:'/shop',query:{id:index}});
			},
			goPersonalCenter(){//点击人形图标进入个人中心页
				this.$router.push('/personal-center');
			},
			goSearch(){
				this.$router.push('/search');
			}
		}
	}
</script>

<style lang="less">
	.mint-header{
		height: 1.8rem !important;
		
	}
	.mint-header-title{
		color: #fff;
		font-size: 0.78rem;
		font-weight: bold;
	}
	.is-left span{
		font-size: 0.78rem;
	}
	.is-right span{
		font-size: 0.78rem;
	}
	.banner{
		margin-top: 1.8rem;
		width: 100%;
		height:8.6rem;
		position:relative;
		touch-action:none;// 使用swiper滑动时不报错
		.swiper-pagination{
			margin-bottom: 0.6rem;
		}
		ul{
			width: 100%;
			height:3.46rem;
			display: flex;
			display: -webkit-flex;
			flex-wrap:wrap;
			li{
				width: 25%;
				height: 3.28rem;
				position: relative;
				img{
					position: absolute;
					width: 1.9rem;
					height:1.4rem;
					top:0.76rem;
					left: 50%;
					margin-left: -0.9rem;
				}
				span{
					font-size: 0.42rem;
					color: #939292;
					position: absolute;
					top:2.72rem;
					left: 1rem;
				}
			}
		}
		
	}
	.banner:after {
		content: "";
		display: block;
		height: 0.44rem;
		width: 100%;
		background: #f5f5f5;
		box-shadow: 0 -0.04rem 0.08rem 0.02rem #cdcdcd;
	    position: absolute;
		bottom: 0;
		left:0;
	}
	.nearby-shop{
		h3{
			width: 100%;
			height: 1.36rem;
			line-height: 1.36rem;
			color: #727272;
			font-size: 0.42rem;
			background: palegoldenrod;
			padding-left: 0.5rem;
			box-sizing: border-box;
		}
		h3:before{
			content: '';
			display: inline-block;
			width: 0.7rem;
			height: 0.76rem;
			background-image: url(../assets/image/neaber-shop.png);
			background-size: 100% 100%;
            margin-right: 0.32rem;
			transform: translateY(0.2rem);
		}
		.list{
			width: 100%;
			height: 4.34rem;
			padding: 0 0.38rem;
			box-sizing: border-box;
			border-bottom: 0.02rem solid #cacaca;
			.left{
				width: 2.6rem;
				height: 2.5rem;
			}
		}
	}
</style>
