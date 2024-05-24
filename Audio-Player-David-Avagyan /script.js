let data = {
    title: [
        "Last Christmas",
        "Spit in My Face",
        'Strangers',
        "Chery Chery Lady"
    ],
    song: [
        "music/Wham! - Last Christmas (из фильма «Рождество на двоих»).mp3",
        "music/ThxSoMch - SPIT IN MY FACE!.mp3",
        "music/Kenya Grace - Strangers.mp3",
        "music/Modern Talking - Cheri Cheri lady.mp3",
    ],
    poster: ["images/Christmas.jpeg", "https://a-static.besthdwallpaper.com/music-technology-wallpaper-1440x1080-12127_22.jpg", "https://s.cafebazaar.ir/images/icons/com.livewallpapers.changer.musicringtones.sound-e935be3a-b3ad-46bb-a7cd-a0e9f1c74ca6_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize", "https://img.freepik.com/premium-photo/dj-mixing-music-with-colorful-background-man-playing-turntable_862994-8280.jpg"]
}

let currentSong = 0;
let song = new Audio();

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songtitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementsByClassName("row1");
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main");
    main[0].style.backgroundImage = url("https://wallpaper.forfun.com/fetch/93/931be4d4f16556b7d2c8b94ae4e1f4c4.jpeg")
    song.load();
}

function playOrPauseSong() {
    let play = document.getElementById("play");
    if (song.paused) {
        song.play();
        play.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYXVzZSI+PHJlY3QgeD0iMTQiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjE2IiByeD0iMSIvPjxyZWN0IHg9IjYiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjE2IiByeD0iMSIvPjwvc3ZnPg==";
    } else {
        song.pause();
        play.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wbGF5Ij48cG9seWdvbiBwb2ludHM9IjYgMyAyMCAxMiA2IDIxIDYgMyIvPjwvc3ZnPg==";
    }
}

function next() {
    currentSong += 1;
    if (currentSong >= data.song.length) {
        currentSong = 0;
    }
    playSong();
    resetPlayButton();
    resetTimeDisplay();
}

function pre() {
    currentSong -= 1;
    if (currentSong < 0) {
        currentSong = data.song.length - 1;
    }
    playSong();
    resetPlayButton();
    resetTimeDisplay();
}

function resetPlayButton() {
    let play = document.getElementById("play");
    play.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wbGF5Ij48cG9seWdvbiBwb2ludHM9IjYgMyAyMCAxMiA2IDIxIDYgMyIvPjwvc3ZnPg==";
}

function resetTimeDisplay() {
    let currentTime = document.getElementsByClassName("currentTime");
    currentTime[0].textContent = "00:00/00:00";
}

window.onload = function () {
    playSong();
}

function converTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime");
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime[0].textContent = min + ':' + sec;
    totalTime(song.duration);
}

function totalTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime");
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime[0].textContent += "/" + min + ':' + sec;
}

function mute() {
    let mute = document.getElementById("mute");
    if (song.muted) {
        song.muted = false;
        mute.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS12b2x1bWUtMiI+PHBvbHlnb24gcG9pbnRzPSIxMSA1IDYgOSAyIDkgMiAxNSA2IDE1IDExIDE5IDExIDUiLz48cGF0aCBkPSJNMTUuNTQgOC40NmE1IDUgMCAwIDEgMCA3LjA3Ii8+PHBhdGggZD0iTTE5LjA3IDQuOTNhMTAgMTAgMCAwIDEgMCAxNC4xNCIvPjwvc3ZnPg==";
    } else {
        song.muted = true;
        mute.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS12b2x1bWUteCI+PHBvbHlnb24gcG9pbnRzPSIxMSA1IDYgOSAyIDkgMiAxNSA2IDE1IDExIDE5IDExIDUiLz48bGluZSB4MT0iMjIiIHgyPSIxNiIgeTE9IjkiIHkyPSIxNSIvPjxsaW5lIHgxPSIxNiIgeDI9IjIyIiB5MT0iOSIgeTI9IjE1Ii8+PC9zdmc+";
    }
}

function decrease() {
    song.volume -= 0.2;
    if (song.volume <= 0.2) {
        song.volume = 0;
        mute.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS12b2x1bWUiPjxwb2x5Z29uIHBvaW50cz0iMTEgNSA2IDkgMiA5IDIgMTUgNiAxNSAxMSAxOSAxMSA1Ii8+PC9zdmc+";
    }
}

function increase() {
    song.volume += 0.2;
    if (song.volume > 0.8) {
        song.volume = 1;
    }
    mute.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS12b2x1bWUtMSI+PHBvbHlnb24gcG9pbnRzPSIxMSA1IDYgOSAyIDkgMiAxNSA2IDE1IDExIDE5IDExIDUiLz48cGF0aCBkPSJNMTUuNTQgOC40NmE1IDUgMCAwIDEgMCA3LjA3Ii8+PC9zdmc+";
}

song.addEventListener("timeupdate", function () {
    let fill = document.getElementsByClassName("fill")[0];
    let handle = document.getElementsByClassName("handle")[0];
    let position = song.currentTime / song.duration;
    fill.style.width = (position * 100) + "%";
    handle.style.left = (position * 100) + "%";
    converTime(song.currentTime);
    if (song.ended) {
        next();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const handle = document.querySelector(".handle");
    const fill = document.querySelector(".fill");
    const seekBar = document.querySelector(".seek-bar");

    let isDragging = false;

    seekBar.addEventListener("click", function (e) {
        updateFillPosition(e.clientX);
    });

    handle.addEventListener("mousedown", function (e) {
        isDragging = true;
        updateFillPosition(e.clientX);
    });

    document.addEventListener("mousemove", function (e) {
        if (isDragging) {
            updateFillPosition(e.clientX);
        }
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
    });

    function updateFillPosition(mouseX) {
        const seekBarRect = seekBar.getBoundingClientRect();
        let offsetX = mouseX - seekBarRect.left;
        if (offsetX < 0) {
            offsetX = 0;
        } else if (offsetX > seekBarRect.width) {
            offsetX = seekBarRect.width;
        }
        const percentage = offsetX / seekBarRect.width;
        fill.style.width = (percentage * 100) + "%";
        handle.style.left = (percentage * 100) + "%";
        song.currentTime = percentage * song.duration;
    }
});
function playSelectedSong(index) {
    

    currentSong = index;
    playSong();
    updateSongDetails();
}
