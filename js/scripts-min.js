$(document).ready(function(){$("a.link-dandy").hover(function(){$("body").hasClass("dandy-clicked")||$("body").toggleClass("dandy-hovered")}),$("a.link-dandy").click(function(d){d.preventDefault(),$("body").toggleClass("dandy-clicked")})});