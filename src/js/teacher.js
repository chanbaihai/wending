import '../scss/teacher.scss'
import $ from 'jquery'
if (process.env.NODE_ENV !== 'production') {
  require('../pages/teacher.html')
}
import '../scss/common.scss'
import template from './template'
import '../css/swiper.min.css'
import Swiper from './swiper'
new Swiper('#swiperBanner', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

//生成header和footer
class  Teacher extends template{
  constructor(){
    super()
    this.render(this.header('teacher'))
  }
}
new Teacher()


//tab切换
$(() => {
  $('.jishu:first-of-type').addClass('active')
  $('.jishu').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    let index=$(this).index()
    $('.jishu-wrap').eq(index).show().siblings().hide()
  })
  
})