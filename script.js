const MODE = document.getElementById("mode");
const NUM = document.getElementById("num");
const TOGGLE = document.getElementById("toggle");
const TOG = document.getElementById("tog");
let modeFlg = 1;

const color = (num) => {
    // change color number
    switch (Math.floor(Math.log10(num)) % 9) {
        case 0:
            NUM.style.color = "black"; break;

        case 1:
            NUM.style.color = "red"; break;
        
        case 2:
            NUM.style.color = "orange"; break;

        case 3:
            NUM.style.color = "gold"; break;

        case 4:
            NUM.style.color = "lime"; break;

        case 5:
            NUM.style.color = "green"; break;

        case 6:
            NUM.style.color = "cyan"; break;

        case 7:
            NUM.style.color = "blue"; break;

        case 8:
            NUM.style.color = "purple"; break;
    
        default:
            break;
    }
}

const add = () => {
    let num = parseInt(NUM.innerHTML);

    if (modeFlg) {
        // 2^x
        num = (num==0) ? 0 : Math.floor(Math.log2(num)+1);
        num = Math.pow(2,num);
    } else {
        // x^2
        num = (num==0) ? 1 : Math.floor(Math.sqrt(num)+1);
        num *= num;
    }
    // reflect value
    NUM.innerHTML = num;

    // change color
    color(num);
};

const gero = () => {
    NUM.innerHTML = 0;

    // change color
    color(1);
};

const swt = () => {
    modeFlg = !modeFlg;
    if (modeFlg) {
        MODE.innerHTML = "冪乗"
        TOGGLE.style.backgroundColor = "white";
        TOG.style.transform = "translate(0, 0)";
    } else {
        MODE.innerHTML = "累乗"
        TOGGLE.style.backgroundColor = "#00ccff";
        TOG.style.transform = "translate(160px, 0)";
    }
};