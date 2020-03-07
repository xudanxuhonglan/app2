<template>
	<div>
		<p>店铺</p>
		<BottomNav></BottomNav>
	</div>
</template>

<script>
	//引进底部导航组件
	import BottomNav from './bottom-nav.vue';
	
	//暴露出去
	export default{
		name:'Shop',
		components:{
			BottomNav
		},
		created() {
			console.log(this.$route.query.id)
		}
	}
</script>

<style>
</style>
