import '../scss/index.scss'
import $ from 'jquery'
if (process.env.NODE_ENV !== 'production') {
  require('../../index.html')
}
// nav toggleclass
$('#nav li').click(()=>{
  $(this).addClass('active').siblings().removeClass('active')
})
// 班级轮播
let index = 0
let length = $('.class-slide>li').length
$('.pre-arrow').click(() => {
  index <= 0 ? (index = length - 4) : index--
  translate($('.class-slide'), index)
})
$('.next-arrow').click(() => {
  index >= length-4 ? index = 0 : index++
  translate($('.class-slide'), index)
})
function translate(jq, index) {
  let dis = index * 25
  jq.css('transform', `translateX(-${dis}%)`)
}
