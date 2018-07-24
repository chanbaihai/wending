# 课工厂文鼎官网
    > 首页制作
    > webpack+sass
# 💪🏻 start
1. npm i    

2. ❤️npm start    
    > 启动webpack-dev-serve  

3. npm run build
    > 打包文件
### 4. 👉 配置文件为config文件夹，html模板为src/pages文件夹,增加页面需要在config/pages.js里面添加相应的入口，并在src/pages,src/js新建相应名字的html和js
```
const htmlplugin = require('html-webpack-plugin')  

const path = require('path')  

👉 let pages = ['index']  //增加的html的name添加在这里  

//比如我要增加center.html页面，则let pages=['index','center']，然后再src/pages新建center.html,  

src/js新建center.js 样式文件在center.js中import  

可自动加载html模板引入相应的样式和js  

let htmls = [],  

  html
  
```
# author  

### 🙀 webliqianmin  

### 😇 chanbaihai
