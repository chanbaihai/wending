import template from './template'
import $ from 'jquery'
import '../scss/course.scss'
import '../css/swiper.min.css'
import Swiper from './swiper.js'
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
class  Course extends template{
  constructor(){
    super()
    this.render(this.header('course'))
  }
}
new Course()
redirect($('.four-ui-cen-bot li'))
redirect($('.four-java-cen-bot li'))
redirect($('.four-web-cen-bot li'))
function redirect(target){
  target.click(()=>{
    location.href='./courseDetail.html'
  })
}

