song = document.getElementById("song").addEventListener
surat = document.getElementsByClassName("suratlar")


for(var i=0; i<=12; i++) {
    surat[i].addEventListener("mouseover", ()=>{
        song.play()
    });
    surat[i].addEventListener("mouseover", ()=>{
        song.currentTime = 0
    });
}