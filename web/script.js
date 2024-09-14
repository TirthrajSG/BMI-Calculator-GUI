document.getElementById("btn1").onclick = function() {

    var a = parseInt(document.getElementById("kg").value);
    var b = parseInt(document.getElementById("m").value);

    eel.calc_bmi(a, b)(function(number) {
        document.getElementById("result").innerHTML = "Your BMI is " + number;

    });
}


document.getElementById("btn2").onclick = function() {
    document.getElementById("kg").value = "";
    document.getElementById("m").value = "";
    document.getElementById("result").innerHTML = "Your BMI is ____";
}

function share(shareid) {
    if (shareid == 1) {
        eel.share_def('https://github.com/TirthrajSG');
    } else if (shareid == 2) {
        eel.share_def('https://www.instagram.com/tirthrajsg/');
    } else {
        eel.share_def('https://www.youtube.com/@indianprayers6091');

    }
}