topmsg
======

首先引入jquery

引入 jquery.topmsg.js

<script src="jquery.topmsg.js"></script>
<script>
$.top_msg( 'message content', $.top_msg.TYPE_OK, {close: 'click'} );
</script>

使用 $.top_msg 便可以弹出提示框

$.top_msg 有3个参数

arg1:  提示内容

arg2:  消息类型提供选择的有俩中 $.top_msg.TYPE_OK 和 $.top_msg.TYPE_ERROR 分别表示正确消息和错误消息，区别在于正确消息背景为绿色错误消息背景为红色，也可以使用 boolean 值或数字代替

$.top_msg.TYPE_OK  == true == 1

$.top_msg.TYPE_ERROR == false == 0

arg3: 当类型不能满足提示需求的时候或者需要更多的定制性则可以使用第三个参数，对默认的配置覆盖，供修改的项目如下

    background: '#de4343', // 背景色
    bordercolor: '#fff', // 边框色 // 默认大小1px根据需要修改
    color: '#000', // 文字颜色
    height: 70, // 提示框高度
    fontsize: 20, // 文字大小
    close: 3000, // 关闭时间 [ms]
    click: false, // 是否点击关闭 默认false
    domid: 'JQ_TOP_MSG', // 提示框id

实例：

{color: ‘red’, close: 3000} // 提示文字红色 3秒钟消失

{fontsize: 12} // 提示文字12px

{height: 50} // 提示框高度50px

当同时设置了 close 时间 和 click true 那么close的时间是无效的只有点击才会消失
