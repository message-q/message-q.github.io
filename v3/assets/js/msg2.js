
var chatMessages = [{
  name: "ms1", 
  avatarname:"S",
  myname:"Sam",
  msg: "You have done a great job.",
  delay: 1000,
  align: "right",
  showTime: true, 
  time: "19:58"
}, 
{
  name: "ms2",
  avatarname:"D",
  myname:"David",
  msg: "Thank you",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58"
},
{
  name: "ms3",
  avatarname:"S",
  myname:"Sam",
  msg: " <div> <img class='float-left mr-2' src='assets/img/mong/gift.png' width='60px' /> Your support as made <br> my job much easier.</div>",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "19:58"
},

 ];
var chatDelay = 0;

function onRowAdded() {
  $('.chat-container-2').animate({
    scrollTop: $('.chat-container-2').prop('scrollHeight')
  });
};
$.each(chatMessages, function(index, obj) {
  chatDelay = chatDelay + 3000;
  chatDelay2 = chatDelay + obj.delay;
  chatDelay3 = chatDelay2 + 10;
  scrollDelay = chatDelay;
  chatTimeString = " ";
  msgname = "." + obj.name;
  msginner = ".messageinner-" + obj.name;
  spinner = ".sp-" + obj.name;
  if (obj.showTime == true) {
    chatTimeString = "<span class='message-time-2'>" + obj.time + "</span>";
  }
  $(".chat-message-list-2").append("<li class='message-" + obj.align + "-2 " + obj.name + " hide'><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + " hide'><div class='message-time-2'>"+obj.myname+"</div><span data-letters='"+obj.avatarname+"' class='"+ obj.align +"'></span><span class='message-text-2'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
  $(msgname).delay(chatDelay).fadeIn();
  $(spinner).delay(chatDelay2).hide(1);
  $(msginner).delay(chatDelay3).fadeIn();
  setTimeout(onRowAdded, chatDelay);
  setTimeout(onRowAdded, chatDelay3);
  chatDelay = chatDelay3;
});