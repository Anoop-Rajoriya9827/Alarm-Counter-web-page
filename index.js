let alarm = false; 
let t0 = 0;
let t1 = 0;
document.querySelector("#snd0").textContent = t0;
document.querySelector("#snd1").textContent = t1;
let updown = () => {

    document.querySelector("#up0").addEventListener("click", () => {
        t0++;
        if (t0 > 9) {
            t0 = 0;
        }
        document.querySelector("#snd0").textContent = t0;
    })
    document.querySelector("#down0").addEventListener("click", () => {
        t0--;
        if (t0 < 0) {
            t0 = 9;
        }
        document.querySelector("#snd0").textContent = t0;
    })

    document.querySelector("#up1").addEventListener("click", () => {
        t1++;
        if (t1 > 9) {
            t1 = 0;
        }
        document.querySelector("#snd1").textContent = t1;
    })
    document.querySelector("#down1").addEventListener("click", () => {
        t1--;
        if (t1 < 0) {
            t1 = 9;
        }
        document.querySelector("#snd1").textContent = t1;
    })

    return;
}
function hid() {
    document.querySelectorAll(".nav i")[0].style.display = "none";
    document.querySelectorAll(".nav i")[1].style.display = "none";
    document.querySelectorAll(".nav i")[2].style.display = "none";
    document.querySelectorAll(".nav i")[3].style.display = "none";
    return;
}
async function count() {
return new Promise((resolve, reject) => {
    console.log(t0,t1)
    let intr =  setInterval(() => {
    if ((t0 != 0) || (t1 != 0)) {

            if (t0 <= 9 && t0 >= 0) {
                if (t1 == 0 && t0 != 0) {
                    document.querySelector("#snd0").textContent = --t0;
                }
                if(t1 <= 9 && t1 > 0){
                    document.querySelector("#snd1").textContent = --t1
                }else{
                    t1 = 9;
                    document.querySelector("#snd1").textContent = t1
                }
            }else{
                    t0 = 9;
                    document.querySelector("#snd0").textContent = t0
            }
        }
        else{
            console.log("clear interval")
            clearInterval(intr)
            alarm = true
            resolve()
        }
        }, 1000)
})
}


let main = () => {
    updown()
    document.querySelector("#btn").addEventListener("click", set);
    async function set() {
        t0 = Number(document.querySelector("#snd0").textContent);
        t1 = Number(document.querySelector("#snd1").textContent);
        hid();
        await count();
        if(alarm === true){
            let tune = new Audio("alarm.mp3")
            tune.play()
            setTimeout(()=>{
                console.log("tune.pause")
                tune.pause()
            },20000)
        }
    }
    

}
main();











// let a = new Audio("")
// console.log(a)

// let f = ()=>{
//     setTimeout(()=>{
//         a.play()
//     },3000)
// }
