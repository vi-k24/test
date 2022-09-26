var jam = 0 , menit = 0 , detik = 0;
var timer;
var counter = 0;
var waktuAwal = "00:00:00";

function hitung(){
    detik++;
    if (detik>=60){
        detik=0;
        menit++;
        if(menit>=60){
            menit=0;
            jam++;
        }
    }
    var display = (jam ? (jam>9 ? jam : "0"+jam): "00") + ":" + (menit ? (menit>9 ? menit : "0"+menit):"00") + ":" + (detik>9 ? detik : "0"+detik)

    document.getElementById('awal').innerHTML=display;
}

// ? = if :=perbandingan

// function display(hours, minutes, seconds){
//     var waktu = (hours ? (hours>9 ? hours : "0"+hours): "00") + ":" + (menit ? (minutes>9 ? minutes : "0"+minutes):"00") + ":" + (seconds>9 ? seconds : "0"+seconds)
//     return waktu;
// }

let mulai = document.getElementById("mulai")
mulai.addEventListener("click",function(e){
    timer = setInterval(hitung,1000)
   // e.target.setAttribute("disable")
   document.getElementById("mulai").setAttribute("disabled",true)

})

let simpan = document.getElementById("save")
simpan.addEventListener("click",function (){
    //console.log(document.getElementById("awal").textContent)
    counter++
    let waktuAkhir = document.getElementById("awal").textContent;

    console.log(waktuAkhir)
    
    let selisih=toSecond(waktuAkhir)-toSecond(waktuAwal)

    let hasil = [
        Math.floor(selisih/3600),
        Math.floor((selisih%3600)/60),
        Math.floor(selisih%60)
    ]

    console.log(hasil)
    hasil = hasil.map(function(x){
        return x < 10 ? "0" + x : x 
    }).join(":")

    console.log(waktuAwal ,waktuAkhir, hasil)

    let divHeader = document.createElement("div")
    divHeader.className="d-flex justify-content-around row-pad bg-light my-1 text-container-md text-center"
    let parent = document.getElementById("hasil")
    parent.appendChild(divHeader)

    let divNumb = document.createElement('div')
    divNumb.className="align-self-center p-4"
    let numb = document.createTextNode(counter)
    divNumb.appendChild(numb)
    divHeader.appendChild(divNumb)

    let divAwal = document.createElement('div')
    divAwal.className="align-self-center p-4"
    let awal = document.createTextNode(waktuAwal)
    divAwal.appendChild(awal)
    divHeader.appendChild(divAwal)

    let divSelisih = document.createElement('div')
    divSelisih.className="align-self-center p-4"
    let wktSelisih = document.createTextNode(hasil)
    divSelisih.appendChild(wktSelisih)
    divHeader.appendChild(divSelisih)

    let divSkrg = document.createElement('div')
    divSkrg.className="align-self-center p-4"
    let skrg = document.createTextNode(waktuAkhir)
    divSkrg.appendChild(skrg)
    divHeader.appendChild(divSkrg)

    
    waktuAwal = waktuAkhir



    // var jam = Math.floor(selisih%(1000*60*60*24)/(1000*60*60))
    // var menit = Math.floor(selisih%(1000*60*60)/(1000*60))
    // var detik = Math.floor(selisih%(1000*60)/1000)
    

    // let a = new Date()
    // a.setHours(0)
    // a.setMinutes(5)
    // a.setSeconds(0)
    // console.log(a)

    // let b = new Date()
    // b.setHours(0)
    // b.setMinutes(8)
    // b.setSeconds(0)
    // console.log(b)

    // let selisih = b.getTime()-a.getTime()
    // console.log(selisih)

    // var jam = Math.floor(selisih%(1000*60*60*24)/(1000*60*60))
    // var menit = Math.floor(selisih%(1000*60*60)/(1000*60))
    // var detik = Math.floor(selisih%(1000*60)/1000)

    // let c = (jam ? (jam>9 ? jam : "0"+jam): "00") + ":" + (menit ? (menit>9 ? menit : "0"+menit):"00") + ":" + (detik>9 ? detik : "0"+detik)

    // console.log(c)

})

function toSecond(time){
    let waktu = time.split(':');
    return  Number(waktu[0]*3600) + Number(waktu[1]*60) + Number(waktu[2])
}

console.log(toSecond("00:01:10")-toSecond("00:00:08"))

let stop = document.getElementById("stop")
stop.addEventListener("click",function(){
    document.getElementById("mulai").removeAttribute("disabled")
    clearInterval(timer)
})

let reset = document.getElementById("reset")
reset.addEventListener("click",function(){
    clearInterval(timer)
    document.getElementById("mulai").removeAttribute("disabled")
    document.getElementById('awal').innerHTML="00:00:00";
    jam=0
    menit=0
    detik=0
    //document.getElementById("hasil").innerHTML=""
    document.getElementById("hasil").removeChild()
})



