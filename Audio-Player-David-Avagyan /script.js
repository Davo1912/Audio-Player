let data = {
    title: [
        "Last Christmas",
        
        "Spit in My Face",
        'Strangers',
        "Chery Chery Lady"],
    song: [
        "music/Wham! - Last Christmas (из фильма «Рождество на двоих»).mp3",
        "music/ThxSoMch - SPIT IN MY FACE!.mp3",
        "music/Kenya Grace - Strangers.mp3",
        "music/Modern Talking - Cheri Cheri lady.mp3",
        
    ],
    poster: ["images/Christmas.jpeg", "images/naushnik.png", "images/maxresdefault.jpg", "images/heaadphones.png"]
}

let currentSong = 0
let song = new Audio()

function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songtitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
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
    playSong()  // Reuse playSong to avoid repeating code
}

function pre() {
    currentSong -= 1
    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }
    playSong()  // Reuse playSong to avoid repeating code
}

window.onload = function () {
    playSong()
}

song.addEventListener("timeupdate", function () {
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

function mute() {
    let mute = document.getElementById("mute")
    if (song.muted) {
        song.muted = false 
        mute.src = "images/volume.png"
    } else {
        song.muted = true 
        mute.src = "images/volume-mute.png"
    }
}

function decrease() {
    song.volume -= 0.2
    if (song.volume <= 0.2) {
        song.volume = 0
        mute.src = "images/volume-down.png"
    }
}

function increase() {
    song.volume += 0.2
    if (song.volume > 0.8) {
        song.volume = 1
    }
    mute.src = "images/volume.png"
}
