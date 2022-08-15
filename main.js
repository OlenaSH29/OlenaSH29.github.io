$(document).ready(function(){
 $('.header').height($(window).height());
})

$(".navbar a").click(function(){
$("body,html").animate({
  scrollTop:$("#" + $(this).data('value')).offset().top
},1000)

 })

let num1=5;
let num2=15;

