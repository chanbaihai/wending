import template from './template'
import '../scss/course.scss'
//生成header和footer
class  Course extends template{
  constructor(){
    super()
    this.render(this.header('course'))
  }
}
new Course()