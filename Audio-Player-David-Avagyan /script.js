let data = {
    title: ["Spit in My Face",
        "Chery Chery Lady",
        'Strangers',
        "Last Christmas"],
    song: ["music/ThxSoMch - SPIT IN MY FACE!.mp3",
        "music/Modern Talking - Cheri Cheri lady.mp3",
        "music/Strangers.mp3",
        "music/Last Christmas.mp3"],
    poster: ["images/download.jpeg","images/SennheiserFullWidth.png"]
}


let currentSong = 0
let song = new Audio()
function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songtitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.bacgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main")
    main[0].style.bacgrountImage = "url(" + data.poster[currentSong] + ")";
    song.play()
}

function playOrPauseSong() {
    let play = document.getElementById("play")
    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    } else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}
function next() {
    currentSong += 1
    if (currentSong >= data.song.length) {
        currentSong = 0
    }
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songtitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.bacgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main")
    main[0].style.bacgrountImage = "url(" + data.poster[currentSong] + ")";
}
function pre() {
    currentSong -= 1
    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songtitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.bacgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main")
    main[0].style.bacgrountImage = "url(" + data.poster[currentSong] + ")";
}

window.onload = function () {
    playSong()
}

song.addEventListener("timeupdate", function () {
    // console.log(song.currentTime);
    let fill = document.getElementsByClassName("fill")
    let position = song.currentTime / song.duration
    fill[0].style.marginLeft = position * 100 + "%"
    converTime(song.currentTime)
    if (song.ended) {
        next()
    }
})


function converTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime[0].textContent = min + ':' + sec
    totalTime(song.duration)

}
function totalTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime[0].textContent += "/" + min + ':' + sec

}
