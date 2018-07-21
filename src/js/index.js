import '../scss/index.scss'
import Swiper from './swiper.js'
import $ from 'jquery'
if (process.env.NODE_ENV !== 'production') {
  require('../../index.html')
}

// nav toggleclass
$(() => {
  $('#nav>li').click(function() {
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

//三个学生留言向上滚动
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
  let length = $('.teacher-item').length

  $('.prev').click(() => {
    index <= 0 ? (index = Math.floor((length - 4) / 3) + 1) : index--
    translate($('.teacher-list'), index)
    $('.point>li')
      .eq(index)
      .addClass('active')
      .siblings()
      .removeClass('active')
  })

  $('.next').click(() => {
    index > Math.floor((length - 4) / 3) ? (index = 0) : index++
    translate($('.teacher-list'), index)
    $('.point>li')
      .eq(index)
      .addClass('active')
      .siblings()
      .removeClass('active')
  })

  function translate(jq, index) {
    let dis = 3 * index * 34.5
    jq.css('transform', `translateX(-${dis}%)`)
  }
})
