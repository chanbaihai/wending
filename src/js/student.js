import '../scss/student.scss'
import '../scss/common.scss'
import $ from 'jquery'
//生成head footer
import Template from './template'
import '../css/swiper.min.css'
import Swiper from './swiper'
//swiper
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
class student extends Template {
  constructor() {
    super()
    this.render(this.header('student'))
  }
}

new student()
if (process.env.NODE_ENV !== 'production') {
  require('../pages/student.html')
}

$(() => {
  $('.jishu:first-of-type a').addClass('active')
  $('.web').css('display', 'none')
  $('.ui').css('display', 'none')
  $('.jishu').click(function() {
    $(this)
      .find('a')
      .addClass('active')
      .parent()
      .siblings()
      .find('a')
      .removeClass('active')
    let index = $(this).index()
    $('.xueyuanlist')
      .eq(index)
      .show()
      .siblings()
      .hide()
  })
})
