var cursor = $(".cursor");
var follower = $(".cursor-follower");

var posX = 0;
var posY = 0;

var mouseX = 0;
var mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});


$(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".portfolio-item img").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
});

$(".portfolio-item img").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});














