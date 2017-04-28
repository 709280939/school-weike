require("../components/npm.js");
require("../../css/page/register.less");
var register_str = require("../../view/register.html");
;(function () {
  $("header").after(register_str);

  function imgShow () {
    var url = null;
    var file = document.getElementsByClassName("head-img")[0].files[0];
    if (window.createObjectURL !== undefined) { // basic
    url = window.createObjectURL(file) ;
    } else if (window.URL !== undefined) { // mozilla(firefox)
    url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL !==undefined) { // webkit or chrome
    url = window.webkitURL.createObjectURL(file) ;
    }
    $(".user-img").css("background","url(" + url + ") center center no-repeat ");
  }
  $(".head-img").on("blur",function () {
    if ($(this).val()) {
      imgShow ();
    }
  });
})(jQuery);