
//We download all the keys.
const keys = [...document.querySelectorAll(".key")];

//We addEventListener for "clicks", we pass the data-key to playSound function
keys.forEach((key)=>{
    key.addEventListener("click", function(){
        playSound(key.dataset.key)
    })
})

//We addEventListener for "keydown", we pass the e inside the function. e.keyCode gets converted into a string by "".We pass it to playSound function.
window.addEventListener("keydown",function(e){
        playSound(e.keyCode+"")
})

//playSound checks if what events pass matches the cases, if so it passes the respective name to let Audio,
const playSound = (keyNum) =>{
    switch (keyNum) {
        case "65":
            name = "clap";
            break;
        case "83":
            name = "hihat";
            break;                     
        case "68":
            name = "kick";
            break;
        case "70":
            name = "openhat";
            break;
        case "71":
            name = "boom";
            break;
        case "72":
            name = "ride";
            break;
        case "74":
            name = "snare";
            break;
        case "75":
            name = "tom";
            break;
        case "76":
            name = "tink";
             break;               
        default:
            break;
    }
    let audio = new Audio("sounds/"+name+'.wav');
    audio.play();
}