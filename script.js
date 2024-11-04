
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.loader-wrapper').style.display = 'none';
        document.querySelector('.main').style.display = 'flex';
    }, 3000);
});

    const songs = [
        { title: " IH Hauli Hauli", src: "/128-Hauli Hauli - Khel Khel Mein 128 Kbps.mp3", img: "image.jpg" },
        { title: "Maar Udi", src: "/128-Maar Udi - Sarfira 128 Kbps.mp3", img: "hint.jpg" }
    ];
    let currentSongIndex = 0;
    const audio = document.getElementById("song");
    const audioSource = document.getElementById("audio-source");
    const songTitle = document.getElementById("song-title");
    const songImage = document.getElementById("song-image");

    function loadSong(index) {
        const song = songs[index];
        audioSource.src = song.src;
        songTitle.textContent = song.title;
        songImage.src = song.img;
        audio.load();
    }

    function playpause() {
        if (audio.paused) {
            audio.play();
            document.getElementById("controlicon").classList.replace("fa-play", "fa-pause");
        } else {
            audio.pause();
            document.getElementById("controlicon").classList.replace("fa-pause", "fa-play");
        }
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        audio.play();
    }

    function previousSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        audio.play();
    }
     if(song.play()){
     setInterval(() =>{
       fit.value = song.currentTime;
     },500);
 }
    fit.onchange = function(){
     song.play();
     song.currentTime = fit.value;
     controlicon.classList.add("fa-pause");
     controlicon.classList.remove("fa-play");
 }
    loadSong(currentSongIndex);