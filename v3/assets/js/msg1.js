
var chatMessages = [{
  name: "ms1", 
  avatarname:"S",
  myname:"Sam",
  msg: "@all Can we arrange for a meeting on friday?",
  delay: 1000,
  align: "right",
  showTime: true, 
  time: "19:58"
}, 
{
  name: "ms2",
  avatarname:"D",
  myname:"David",
  msg: "Yes, thats a great idea.",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58"
},
{
  name: "ms3",
  avatarname:"A",
  myname:"Alex",
  msg: "Thank you, timing and venue  will be <br> confirmed by tomorrow.",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "19:58"
},

 ];
var chatDelay = 0;

function onRowAdded() {
  $('.chat-container').animate({
    scrollTop: $('.chat-container').prop('scrollHeight')
  });
};
$.each(chatMessages, function(index, obj) {
  chatDelay = chatDelay + 1000;
  chatDelay2 = chatDelay + obj.delay;
  chatDelay3 = chatDelay2 + 10;
  scrollDelay = chatDelay;
  chatTimeString = " ";
  msgname = "." + obj.name;
  msginner = ".messageinner-" + obj.name;
  spinner = ".sp-" + obj.name;
  if (obj.showTime == true) {
    chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
  }
  $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + " hide'><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + " hide'><div class='message-time'>"+obj.myname+"</div><span data-letters='"+obj.avatarname+"' class='"+ obj.align +"'></span><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
  $(msgname).delay(chatDelay).fadeIn();
  $(spinner).delay(chatDelay2).hide(1);
  $(msginner).delay(chatDelay3).fadeIn();
  setTimeout(onRowAdded, chatDelay);
  setTimeout(onRowAdded, chatDelay3);
  chatDelay = chatDelay3;
});