import '../scss/index.scss'
import Swiper from './swiper.js'
import $ from 'jquery'
if (process.env.NODE_ENV !== 'production') {
  require('../pages/index.html')
}
import template from './template'

//生成header和footer
class Index extends template{
  constructor(){
    super()
    this.render(this.header('index'))
  }
}
new Index()
// nav toggleclass

$(() => {
  $('#nav>li').click(function () {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
  })
})
// 班级轮播
$(() => {
  let index = 0
  let length = $('.class-slide>li').length
  $('.pre-arrow').click(() => {
    index <= 0 ? (index = length - 4) : index--
    translate($('.class-slide'), index)
  })
  $('.next-arrow').click(() => {
    index >= length - 4 ? (index = 0) : index++
    translate($('.class-slide'), index)
  })

  function translate(jq, index) {
    let dis = index * 25
    jq.css('transform', `translateX(-${dis}%)`)
  }
})

//班级向上滚动
$(() => {
  let listWrap = $('#studentlist-container')
  let list = $('#student-list')
  let list2 = $('#student-list2')
  let height = list.height()
  list2.html(list.html())

  function moveUP() {
    if (listWrap[0].scrollTop >= height) {
      listWrap[0].scrollTop = 0
    } else {
      listWrap[0].scrollTop += 2
    }
  }
  let timer = setInterval(() => {
    moveUP()
  }, 50)
  listWrap.hover(
    () => {
      clearInterval(timer)
    },
    () => {
      timer = setInterval(() => {
        moveUP()
      }, 50)
    }
  )
})

//学生留言向上滚动
let wordsWrap = $('.student-words-container')
let list = $('.words1')
let list2 = $('.words2')
let height = list.height()
list2.html(list.html())

function moveUP(i) {
  if (wordsWrap[i].scrollTop >= height) {
    wordsWrap[i].scrollTop = 0
  } else {
    wordsWrap[i].scrollTop += 2
  }
}
let timer1 = setInterval(() => {
  moveUP(1)
}, 30)
wordsWrap.eq(1).hover(
  () => {
    clearInterval(timer1)
  },
  () => {
    timer1 = setInterval(() => {
      moveUP(1)
    }, 30)
  }
)
let timer2 = setInterval(() => {
  moveUP(2)
}, 30)
wordsWrap.eq(2).hover(
  () => {
    clearInterval(timer2)
  },
  () => {
    timer2 = setInterval(() => {
      moveUP(2)
    }, 30)
  }
)
let timer0 = setInterval(() => {
  moveUP(0)
}, 30)
wordsWrap.eq(0).hover(
  () => {
    clearInterval(timer0)
  },
  () => {
    timer0 = setInterval(() => {
      moveUP(0)
    }, 30)
  }
)
//
new Swiper('#swiperBanner', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

// liqianmin  老师轮播
$(() => {

  let index = 0
  let length = Math.ceil($('.teacher-item').length/3)
  for (let i = 0; i < length; i++) {
    $('.point').append('<li></li>')
  }
  $('.point li:first-child').addClass('active')

  $('.prev').click(() => {
    index <= 0 ? index = length -1 : index--
    translate($('.teacher-list'), index)
    toggleclass(index)
  })

  $('.next').click(() => {
    index >= length - 1? index = 0 : index++
    translate($('.teacher-list'), index)
    toggleclass(index)
  })
  $('.point>li').click(function () {
    index = $(this).index()
    translate($('.teacher-list'), index)
    toggleclass(index)
  })
  translate($('.teacher-list'), index)
  toggleclass(index)
  function toggleclass(index){
    $('.point>li')
      .eq(index)
      .addClass('active')
      .siblings()
      .removeClass('active')
  }
  function translate(jq, index) {
    let dis =  index *100
    jq.css('transform', `translateX(-${dis}%)`)
  }

  
})
// tab 切换
$('.project-title>div').click(function () {
  let index = $(this).index()
  $(this).addClass('active').siblings().removeClass('active')
  $('.project-list').eq(index).addClass('active').siblings().removeClass('active')
})