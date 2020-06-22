$(function() {
    //设置“发送”按钮点击事件，将弹幕体显示在弹幕墙上
    $('.send').click(function() {
      //获取文本输入框的内容
      var val = $('.content').val();
      //将文本框的内容赋值给val后，将文本框的内容清除，以便用户下一次输入
    //   $('.content').val('');
      //将文本框内容用div包裹起来，便于后续处理
      var $content = $('<div class="text">' + val + '</div>');
      //获取弹幕墙对象
      $screen = $(document.getElementById("screen"));
      //随机颜色
      var color1 = parseInt(Math.random() * 256);
	  var color2 = parseInt(Math.random() * 256);
	  var color3 = parseInt(Math.random() * 256);
	  var color = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
      //随机大小
      fontsize =  Math.floor((Math.random()* 20) + 15);
      //设置弹幕体出现时的上边距，为任意值
      var top = Math.random() * $screen.height();
      top = top < $screen.height ? 10+"px" : top;
      
      //设置弹幕体的上边距和左边距
      $content.css({
        "position": 'absolute',
        top: top + "px",
        right: 0,
        color:color,
        "font-size":fontsize + "px",
        "whiteSpace": 'nowrap',
        "display": 'block',
      });
      //将弹幕体添加到弹幕墙中
      $('.dm_show').append($content);
      //弹幕体从右端移动到最左侧，然后直接删除该元素
      $content.animate({
        right: $screen.width()-60+$content.width()
      }, 2000,function() {
        $(this).remove();
      });
    });
    //设置“清屏”点击事件，清除弹幕墙中的所有内容
    $('.clear').click(function() {
      $('.dm_show').empty();
    });
  });

  