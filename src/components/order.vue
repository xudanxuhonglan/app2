<template>
	<div>
		<p>订单</p>
		<BottomNav></BottomNav>
	</div>
</template>

<script>
	//引进底部导航组件
	import BottomNav from './bottom-nav.vue';
	
	//暴露出去
	export default{
		name:'Order',
		components:{
			BottomNav
		}
	}
</script>

<style>
</style>
