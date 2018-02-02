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
	</div>

</template>
<script>
	export default {
		name: 'App',
		data () {
			return {
				value: 1
			}
		}
	}
</script>