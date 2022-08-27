// When page loads date needs to show up

var setDateTime = setInterval(() => {
  $("#currentDay").text(moment().format("dddd, MMMM Do h:mm:ss a"));
  colorTime();
}, 1000);
// need funtion to change style on my timeblock and switch to military time
var currentTime = moment();
currentTime = moment().format("k");
//check blocks to see what colors it gets
var colorTime = function () {
  $(".row").each(function () {
    var rowColor = $(this).attr("time-block").replace("time", "");
    if (rowColor < currentTime) {
      $(this).children(".description").addClass("past");
    } else if (rowColor > currentTime) {
      $(this).children(".description").addClass("future");
    } else {
      $(this).children(".description").addClass("present");
    }
  });
};
colorTime();

$(".saveBtn").on("click", function () {
  // when I click on any of the save buttons I need to save data to local storage and save for that hour

  var key = $(this).parent().attr("id");
  var value = $(this).siblings(".description").val();
  localStorage.setItem(key, value);
});

$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#1 textarea").val(localStorage.getItem("13"));
$("#2 textarea").val(localStorage.getItem("14"));
$("#3 textarea").val(localStorage.getItem("15"));
$("#4 textarea").val(localStorage.getItem("16"));
$("#5 textarea").val(localStorage.getItem("17"));
