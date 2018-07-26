import '../scss/courseDetail.scss'
import Template from './template'
import $ from 'jquery'
const poster = require('../../static/img/course-poster.png')

$('#video')[0].poster=poster
class courseDetail extends Template {
  constructor() {
    super()
    this.render(null, this.footer())
  }
}
new courseDetail()
