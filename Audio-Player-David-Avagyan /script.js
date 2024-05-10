let data = {
    title:["Spit in My Face",
    "Chery Chery Lady",
    'Strangers',
    "Last Christmas"],
    song: ["music/ThxSoMch - SPIT IN MY FACE!.mp3",
    "music/Modern Talking - Cheri Cheri lady.mp3",
    "music/Kenya Grace - Strangers",
    "music/Wham! - Last Christmas (из фильма «Рождество на двоих»)"],
    poster:["https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXVhcmt6NmxyZno3dmVxdGR6NWhyMzdheGl4d2FzNGc0ZTUyZzUydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qvp6Z2fidQR34IcwQ5/giphy.gif","https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXVhcmt6NmxyZno3dmVxdGR6NWhyMzdheGl4d2FzNGc0ZTUyZzUydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qvp6Z2fidQR34IcwQ5/giphy.gif","https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXVhcmt6NmxyZno3dmVxdGR6NWhyMzdheGl4d2FzNGc0ZTUyZzUydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qvp6Z2fidQR34IcwQ5/giphy.gif","https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXVhcmt6NmxyZno3dmVxdGR6NWhyMzdheGl4d2FzNGc0ZTUyZzUydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qvp6Z2fidQR34IcwQ5/giphy.gif"]
}

////
let currentSong = 0
let song = new Audio()
function playSong(){
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songtitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")  
    img[0].style.bacgroundImage = "url("+ data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main")
    main[0].style.bacgrountImage = "url("+ data.poster[currentSong] + ")";
    song.play()
}
window.onload = function(){
    playSong()
}
function playOrPauseSong(){
    let play = document.getElementById("play")
    if(song.paused){
        song.play()
        play.src = "images/pause.png"
     } else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}

