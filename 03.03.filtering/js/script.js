$(function () {
  // $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").filter(function(index) {
  //   return index % 3 === 1;
  // }).css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").not("#list ul li").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").not(function(index) {
    return index % 3 === 2;
  }).css("background-color", "rgba(180, 180, 30, 0.8)");

});
