var $ = require("jquery");
var header_str = require("../../view/header.html");
;(function () {
  $("body").prepend($(header_str));//body首部引入header
  function headerGo () {};
  headerGo.prototype = {
    token:false,
    //判断是否存在token
    getToken:function () {
      if (localStorage.token) {
        this.token = true;
      } else {
        this.token = false;
      }
    },
    //根据token的值初始化界面
    info:function (token) {
      console.log(token)
      if (token) {
        $(".not-logged").css("display","none");
        $(".logged,.logged-m").css("display","block");
      } else {
        $(".logged,.logged-m").css("display","none");
        $(".not-logged").css("display","block");
      }
    },
    action:function () {
      this.getToken();
      this.info(this.token);
      this.onClick();
    },
    //绑定点击事件
    onClick:function () {
      var _this = this;
      $("body").on("click","header",function (event) {
        var target = event.target;
        //显示下拉菜单
        if (target.id === "head-nav") {
          if ($(target).next().css("display") === "none") {
            $(target).next().slideDown(200);
            console.log($(target).next())
          } else {
            $(target).next().slideUp(200);
          }
          //账号退出
        } else if ($(target).hasClass("cancel")) {
          localStorage.removeItem("token");
          _this.info();
        }
      });
    }
  };
  var header_go = new headerGo();
  header_go.action();
  localStorage.token = "fsfsd";
  //localStorage.removeItem("token");
})(jQuery);