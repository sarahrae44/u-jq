$(function () {
  $(".green-box").fadeOut(2000, 0);
  // fadeOut sets display to none, so the following code will do nothing on the page
  $(".green-box").fadeTo(1000, 0.5);
});
