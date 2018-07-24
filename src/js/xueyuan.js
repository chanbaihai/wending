import '../scss/xueyuan.scss'
import $ from 'jquery'
if (process.env.NODE_ENV !== 'production') {
    require('../pages/xueyuan.html')
}

$(() => {
    $(".jishu:first-of-type a").addClass("active")
    $(".web").css("display", "none")
    $(".ui").css("display", "none")
    $(".jishu").click(function () {
        $(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active")
        let index = $(this).index()
        $(".xueyuanlist").eq(index).show().siblings().hide()
    })

})