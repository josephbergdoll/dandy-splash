$(document).ready(function(){$("a.link-dandy").mouseenter(function(){$("body").hasClass("dandy-clicked")?$("body").hasClass("hoverable")&&$("body").addClass("link-outer-hovered"):$("body").addClass("dandy-hovered")}),$("a.link-dandy").mouseout(function(){$("body").hasClass("dandy-clicked")?$("body").hasClass("hoverable")?$("body").removeClass("link-outer-hovered"):$("body").addClass("hoverable"):$("body").removeClass("dandy-hovered")}),$("a.link-dandy").click(function(d){d.preventDefault(),$("body").hasClass("dandy-clicked")?($("body").removeClass("dandy-clicked"),$("body").removeClass("hoverable"),$("body").removeClass("link-outer-hovered")):($("body").addClass("dandy-clicked"),setTimeout(function(){$("body").addClass("hoverable")},2e3))}),$("a.link-outer").hover(function(){$("body").toggleClass("link-outer-hovered")})}),$(window).load(function(){setTimeout(function(){$("a.link-dandy").css("opacity","1")},650)});