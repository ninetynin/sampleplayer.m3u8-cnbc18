var player = videojs('my_video_1');

player.fluid(false);

var w = window.innerWidth;
var h = window.innerHeight;

player.ready(function() {
    this.height(h - 100);
    this.width(w - 100);
});

player.on('fullscreenchange', function() {
    if (player.isFullscreen()) {
        player.height(h);
        player.width(w);
    } else {
        player.height(h - 100);
        player.width(w - 100);
    }
});

player.responsive(true);

var video = document.getElementById('my_video_1_html5_api');
video.style.margin = 'auto';
video.style.display = 'block';