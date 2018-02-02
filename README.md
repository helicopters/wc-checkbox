## 基于 Vue 的 checkbox 效果

## Install
```shell
npm i wc-checkbox --save-dev

```

## Usage
```javascript
import wcCheckbox from 'wc-checkbox'
import 'wc-checkbox/style.css'
Vue.use(wcCheckbox);
```

```html
<wc-checkbox v-model="check">
	label text
</wc-checkbox>
```


## Config
```shell
v-model="check"	获取当前 checkbox 的状态, Boolean
disabled	设置当前 checkbox 是否可选, 默认 false
shape	设置当前 checkbox 显示为圆形还是正方形, 默认 圆形
active	设置当前 checkbox 未选中状态的边框颜色, 和选中状态的背景颜色, 默认为蓝色
```


## Introduction
样式基于 element-ui. 在此基础上面添加了一些功能. 