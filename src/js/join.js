import template from './template'
import '../scss/join.scss'

//生成header和footer
class Join extends template{
  constructor(){
    super()
    this.render(this.header('join'))
  }
}
new Join()