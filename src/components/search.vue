<template>
	<div>
		<p>搜索</p>
		<BottomNav></BottomNav>
	</div>
</template>

<script>
	//引进底部导航组件
	import BottomNav from './bottom-nav.vue';
	
	//暴露出去
	export default{
		name:'Search',
		components:{
			BottomNav
		}
	}
</script>

<style>
</style>
