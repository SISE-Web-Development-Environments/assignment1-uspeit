$(function () {
    const menuHeight = parseInt($("#menu").css("line-height"));


    $("#nav a").click(function (e) {
        e.preventDefault();
        let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        let targetPosition = $(this.hash).offset().top - menuHeight;

        const speed = 800; // Pixels/sec
        let transitionDuration = Math.abs(currentPosition - targetPosition) / speed * 1000;
        transitionDuration = Math.log(transitionDuration) * 80;
        console.log(transitionDuration);
        $('html, body').animate({
            scrollTop: targetPosition
        }, transitionDuration);
    });
});