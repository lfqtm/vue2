// 1、使用ES6导入语法，导入jquery
import $ from 'jquery'
// 2、导入样式（webpack中，一切是模块，都可以通过es6进行模块导入）
import '@/css/index.css'
import '@/css/index.less'
//3.1、导入图片，得到图片文件
import logo from './images/logo.png'
//3.2、给img标签的src动态赋值
$('.box').attr('src', logo)

// 1、定义jquery的入口函数
$(function() {
  // 1.1、实现奇偶行变色
  $('li:odd').css('background-color', 'red')
  $('li:even').css('background-color', 'green')
})


// 2、演示装饰器高级语法（使用bable-loader）
function info(target) {
  target.info = 'Person info'
}

@info
class Person{}

console.log(Person.info)

//演示devtool: 'eval-source-map'
conole.log(Person.info)
