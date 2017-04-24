## 校园威客平台前端开发规范：(by fangdiao)

**代码提交说明**：目录pull到本地以后不要删除文件，因为删除操作也是一种提交，会修改目录结构。

### 一、基本架构

1. 使用语言：HTML、CSS、JavaScript
2. 使用框架：Boostrap、jQuery

### 二、代码风格

##### 1. 目录命名

 * 已经存在目录不要修改
 * 自定义js、css文件放在src/js、src/css目录中

##### 2. 文件命名
 * 自定义js文件命名，以`页面名.js`或者`组件名.js`方式命名，例`index.js`,`sign.js`
 * 自定义CSS文件命名，以`页面名.css`或者`组件名.css`方式命名，注意：全局通用样式放在`src/css/common.css`
 * HTML命名，以页面名称命名

##### 3. HTML规范
 * 缩进使用两个空格
 * 嵌套节点应该缩进
 * 属性上使用双引号，不要使用单引号，例：`<h1 class="hello">`
 * 属性名全部小写，用连接符`-`做分隔，例:`<h1 class="hello-world">`而不要使用`<h1 class="helloWorld">`
 * 自动闭合标签结尾处不要使用斜线`/`，例：`<input type="text">`而不要使用`<input type="text" />`
 * 引入CSS和JS文件不必指明type(可能编译器会自动生成，则不需修改)
 * 属性的顺序: ```class、id、name、data-*、[src , for , type , href , value , max-length , max , min , pattern]、[placeholder , title , alt]、aria-、[\* , role]、[required , readonly , disabled]```
 * 减少父节点和只是为了添加样式的标签

##### 4. CSS规范

 * 使用两个空格缩进（sublime text可以设置缩进格式）
 * 每个声明末尾都要有分号
 * 检查行末，行末不能有空格
 * 每个CSS文件最后保留一个空行，每个`}`结束后，保留一个空行
 * 多个选择器的分隔符`,`后要换行，每个样式独占一行
 * url内不要省略双引号
 * 类名使用小写，以中划线分隔
 * id命名一方面遵循Bootstrap命名格式，另一方面自定义格式采用以`ht-`开头中划线分隔格式，例如：`#ht-section-2`
 * 使用Boostrap命名的CSS样式名，自定义样式名应以`ht-`开头，例如：`.ht-pages-2`
 * 省略小数点前的0，属性值为0不要加单位
 * 颜色使用十六进制，能简写就简写，例：`#ccc`
 * 不要使用rgb()格式，可以使用rgba()
 * 浏览器内核前缀

##### 5. 属性顺序

 * display、float、z-index、opacity
 * position、LRTB
 * margin、border、padding、width、height
 * text、font、list-style
 * color、background
 * transfrom、transition、animation

##### 6. js相关约定

 * 变量名必须是小写字母，采用下划线分隔法。例：`var my_data;`
 * 方法名使用驼峰式命名，例：`myFun`
 * 对于构造函数首字母必须使用大写，例：`new FooBar()`
 * 尽量不使用汉语拼音
 * 尽量使用合法的缩写
 * 变量声明一律放在所在作用域的开始
 * 常量全大写，例：`const MAX_LEN = 1024;`
 * 代码缩进为两个空格(尽量不要使用tab键)
 * 使用jQuery为主，也支持使用原生js