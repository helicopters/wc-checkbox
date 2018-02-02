<style lang="less" scoped>
.el-checkbox {
	color: #1f2d3d;
	position: relative;
	cursor: pointer;
	display: block;
	white-space: nowrap;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	-webkit-tap-highlight-color:transparent;
}
.el-checkbox__input {
	white-space: nowrap;
	cursor: pointer;
	outline: none;
	display: inline-block;
	line-height: 1;
	position: relative;
	vertical-align: middle
}
/* 控制 checkbox 的样式 */
.el-checkbox__inner {
	display: inline-block;
	position: relative;
	border: 1px solid #20a0ff;
	box-sizing: border-box;

	/*============================= 在这修改大小 ============================*/
	width: 17px;
	height: 17px;
	background-color: #fff;
	z-index: 1;
	transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46)
}
/* 显示为正方形 */
.el-checkbox--square {
	border-radius: 4px;
}
/* 显示为圆形 */
.el-checkbox--circle {
	border-radius: 50%;		
}
.el-checkbox__inner:after {
	box-sizing: content-box;
	content: "";
	border: 2px solid #fff;
	border-left: 0;
	border-top: 0;
	height: 8px;
	left: 5px;
	position: absolute;
	top: 1px;
	transform: rotate(45deg) scaleY(0);
	width: 4px;
	transition: transform .15s cubic-bezier(.71, -.46, .88, .6) .05s;
	transform-origin: center;
}
.el-checkbox__input.is-checked .el-checkbox__inner:after {
	transform: rotate(45deg) scaleY(1)
}
.el-checkbox__input.is-disabled .el-checkbox__inner {
	background-color: #eef1f6;
	border-color: #d1dbe5;
	cursor: not-allowed
}
.el-checkbox__input.is-disabled .el-checkbox__inner:after {
	cursor: not-allowed;
	border-color: #eef1f6
}
.el-checkbox__input.is-disabled .el-checkbox__inner+.el-checkbox__label {
	cursor: not-allowed
}
.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
	background-color: #d1dbe5;
	border-color: #d1dbe5
}
.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner:after {
	border-color: #fff
}
.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner {
	background-color: #d1dbe5;
	border-color: #d1dbe5
}
.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner:before {
	border-color: #fff
}
.el-checkbox__input.is-disabled+.el-checkbox__label {
	color: #bbb;
	cursor: not-allowed
}
.el-checkbox__original {
	opacity: 0;
	outline: none;
	position: absolute;
	margin: 0;
	left: -999px
}
.el-checkbox__label {
	font-size: 14px;
	padding-left: 2px
}
</style>
<template>
	<label class="el-checkbox">
		<span 
			class="el-checkbox__input" 
			:class="{'is-checked':value, 'is-disabled':disabled}">
			<span 
				class="el-checkbox__inner" 
				:class="{'el-checkbox--circle': shape=='circle', 'el-checkbox--square': shape=='square'}"
				:style="{'borderColor': active, 'backgroundColor': value ? active : 'white'}"></span>
			<input 
				type="checkbox" 
				class="el-checkbox__original" 
				@click.stop.prevent="toggle" 
				:disabled="disabled">
		</span>
		<!-- label 说明文字 -->
		<span class="el-checkbox__label">
			<slot></slot>
		</span>
	</label>
</template>
<script>
	export default {
		props: {
			disabled: {
				default: false,
			},
			value: {
				default: false
			},
			shape: {
				default: 'circle'
			},
			active: {
				default: '#20a0ff'
			}
		},
		methods: {
			toggle () {
				let v = !this.value;
				this.$emit('input', v);
			}
		}
	}
</script>