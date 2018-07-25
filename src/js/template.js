import $ from 'jquery'
import logo from '../../static/img/logo.png'
import slogan from'../../static/img/slogan.png'
class Template {
  render(header = this.header, footer = this.footer) {
    $('body')
      .first()
      .prepend(header)
    $('body')
      .last()
      .append(footer)
  }
  header(currentPage) {
    return `<header class="wrap headerwrap">
    <div class="container header">
        <div class='logo flex'>
            <div class='flex'>
                <img src=${logo} alt="课工厂">
                <span>文鼎校区</span>
            </div>
            <img src=${slogan} alt="">
        </div>
        <nav class='nav flex'>
            <ul class='flex' id='nav'>
                <li class=${currentPage==='index'?'active':''}>
                    <a href=${Router.index}>首页</a>
                </li>
                <li class=${currentPage==='course'?'active':''}>
                    <a href=${Router.course}>免费课程</a>
                </li>
                <li class=${currentPage==='teacher'?'active':''}>
                    <a href=${Router.teacher}>名师团队</a>
                </li>
                <li class=${currentPage==='student'?'active':''}>
                    <a href=${Router.student}>学员风采</a>
                </li>
                <li class=${currentPage==='join'?'active':''}>
                    <a href=${Router.join}>报名流程</a>
                </li>
                <li class=${currentPage==='school'?'active':''}>
                    <a href=${Router.school}>校区介绍</a>
                </li>
                <li class=${currentPage==='forum'?'active':''}>
                    <a href=${Router.forum}>技术论坛</a>
                </li>
            </ul>
            <div class='user flex'>
                <div></div>
                <span>用户名称最多八个字</span>
            </div>
        </nav>
    </div>
</header>`
  }

  footer() {
    return   ` <footer class="footer-wrap">
    <div class="footer-top-inner">
        <div class="footer-top">
            <ul class="footer-top-list">
                <li class="footer-top-item">
                    <i></i>
                    <h2>100+</h2>
                    <p>资深讲师</p>
                    <a class="xiangqing" href="javascript:;">了解详情</a>
                </li>
                <li class="footer-top-item">
                    <i></i>
                    <h2>600+</h2>
                    <p>实战项目</p>
                    <a class="xiangqing" href="javascript:;">了解详情</a>
                </li>
                <li class="footer-top-item">
                    <i></i>
                    <h2>500G+</h2>
                    <p>视频资料</p>
                    <a class="xiangqing" href="javascript:;">了解详情</a>
                </li>
                <li class="footer-top-item">
                    <i></i>
                    <h2>7000+</h2>
                    <p>平均薪资</p>
                    <a class="xiangqing" href="javascript:;">了解详情</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="footer-left">
            <div class="footer-left-item">
                <h3 class="footer-about">关于课工场</h3>
                <ul class="footer-left-list">
                    <li>校园环境</li>
                    <li>发展历程</li>
                    <li>招贤纳士</li>
                </ul>
            </div>
            <div class="footer-left-item">
                <h3 class="footer-about">学习资源</h3>
                <ul class="footer-left-list">
                    <li>免费公开课</li>
                    <li>免费课程视频</li>
                    <li>学习路线</li>
                </ul>
            </div>
            <div class="footer-left-item">
                <h3 class="footer-about">报名入学</h3>
                <ul class="footer-left-list">
                    <li>报名流程</li>
                    <li>报名须知</li>
                    <li>课程安排</li>
                </ul>
            </div>
        </div>
        <div>
        </div>
        <div class="footer-right">
            <h3>文鼎校区地址：江宁区格致路99号文鼎大厦16F</h3>
            <h4>咨询热线:025-8888-8888</h4>
            <p>CopyRight 南京中博职业培训学校 2018</p>
        </div>
    </div>
</footer>`
  }
}

const Router = {
  index: './index.html',
  course: './course.html',
  teacher: './teacher.html',
  student: './student.html',
  join: './join.html',
  school: './school.html',
  forum: './forum.html'
}

export default Template
