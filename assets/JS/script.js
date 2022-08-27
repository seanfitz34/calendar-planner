// When page loads date needs to show up
$("#currentDay").text(moment().format("MMM Do YYYY"));
// need funtion to change style on my timeblock
// 
$('.saveBtn').on('click', function(){
    // when I click on any of the save buttons I need to save data to local storage and save for that hour

    var key = $(this).parent().attr('id');
    var value= $(this).siblings('.description').val();
localStorage.setItem(key, value)

})


$('#9 textarea').val(localStorage.getItem('9'))
$('#10 textarea').val(localStorage.getItem('10'))
$('#11 textarea').val(localStorage.getItem('11'))
$('#12 textarea').val(localStorage.getItem('12'))
$('#1 textarea').val(localStorage.getItem('1'))
$('#2 textarea').val(localStorage.getItem('2'))
$('#3 textarea').val(localStorage.getItem('3'))
$('#4 textarea').val(localStorage.getItem('4'))
$('#5 textarea').val(localStorage.getItem('5'))
