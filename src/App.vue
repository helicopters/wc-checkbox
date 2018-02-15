<style>
.container {
	padding: 20px;

}
</style>
<template>
	<div class="container">
		
		<wc-checkbox v-model="value">
			checkbox
		</wc-checkbox>	

		{{value}}

		<h1>list形式</h1>

		<!-- <wc-checkbox v-if> -->
		<div v-if="list.length">
			<wc-checkbox v-model ='value.isChecked' v-for="(value, key) in list" :key="key" :disabled="value.disabled" active="red" shape="square" :max="3" :data="list" item="isChecked" @max="max">
				{{value.name}}
			</wc-checkbox>

			<!-- <wc-checkbox v-model=""> -->

			{{list}}
		</div>

		

	</div>

</template>
<script>
	export default {
		name: 'App',
		data () {
			return {
				value: false,
				list: [{
					name: '老谢',
				}, {
					name: '老王',
					disabled: true
				}, {
					name: '大家好'
				},{
					name: '老谢2',
				}, {
					name: '老王2'
				}, {
					name: '大家好2'
				},]
			}
		},
		mounted () {
			setTimeout(()=>{

			}, 2000)
		},
		methods: {
			max (v) {
				alert('最大个数了');
			}
		}
	}
</script>