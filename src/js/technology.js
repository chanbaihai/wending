import '../scss/technology.scss'
import $ from 'jquery'
if (process.env.NODE_ENV !== 'production') {
  require('../pages/technology.html')
}

//tab切换
$(() => {
  $(".jishu:first-of-type").addClass("active")
  $(".jishu").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let index=$(this).index()
    $(".jishu-wrap").eq(index).show().siblings().hide()
  })
  
})