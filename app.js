var eyestate = 0;

var leftEyePos = 71.202;
var rightEyePos = 123.54;

function moveEyes() {
    let le = document.getElementById("left_eye");
    let re = document.getElementById("right_eye");
    switch (eyestate) {
        case 0:
            le.setAttribute("cx", parseFloat(leftEyePos) + 5);
            re.setAttribute("cx", parseFloat(rightEyePos) + 5);
            break;
        case 1:
        case 2:
            le.setAttribute("cx", parseFloat(leftEyePos) - 5);
            re.setAttribute("cx", parseFloat(rightEyePos) - 5);
            break;
        default:
            le.setAttribute("cx", parseFloat(leftEyePose));
            re.setAttribute("cx", parseFloat(rightEyePos));
            break

    }
    eyestate++;
    eyestate = eyestate > 2 ? 0 : eyestate;
}

setInterval(moveEyes, 2000);