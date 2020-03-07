<template>
	<div class="bottom-nav">
		<ul>
			<router-link tag="li" to="/take-out-food" active-class="active">
				<i></i>
				<span>外卖</span>
			</router-link>
			<router-link tag="li" to="/search" active-class="active">
				<i></i>
				<span>搜索</span>
			</router-link>
			<router-link tag="li" to="/order" active-class="active">
				<i></i>
				<span>订单</span>
			</router-link>
			<router-link tag="li" to="/personal-center" active-class="active">
				<i></i>
				<span>我的</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
	//暴露出去
	export default{
		name:'BottomNav'
	}
</script>

<style lang="less">
	.bottom-nav{
		position: fixed;
		left: 0;
		bottom: 0;
		width:100%;
		height: 1.82rem;
		border-top: 0.02rem solid #ebebeb;
		ul{
			width:100%;
			height:100%;
			display: flex;
			display: -webkit-flex;
			li{
				width: 0;
				flex: 1;
				height: 100%;
				text-align: center;
				position:relative;
				i{
					position:absolute;
					width: 0.7rem;
					height:0.72rem;
					top:0.3rem;
					left: 50%;
					margin-left: -0.35rem;
					background-size: 100% 100%;
				}
				span{
					font-size: 0.46rem;
					position:absolute;
					top:1.12rem;
					left: 50%;
					margin-left: -0.44rem;
				}
			}
			li:nth-of-type(1){
				i{
					background-image: url(../assets/image/nav1.png);
				}
			}
			li:nth-of-type(2){
				i{
					background-image: url(../assets/image/nav2.png);
				}
			}
			li:nth-of-type(3){
				i{
					background-image: url(../assets/image/nav3.png);
				}
			}
			li:nth-of-type(4){
				i{
					background-image: url(../assets/image/nav4.png);
				}
			}
			li:nth-of-type(1).active{
				i{
					background-image: url(../assets/image/nav1_actived.png);
				}
			}
			li:nth-of-type(2).active{
				i{
					background-image: url(../assets/image/nav2_actived.png);
				}
			}
			li:nth-of-type(3).active{
				i{
					background-image: url(../assets/image/nav3_actived.png);
				}
			}
			li:nth-of-type(4).active{
				i{
					background-image: url(../assets/image/nav4_actived.png);
				}
			}
		}
	}
</style>
