var body = document.querySelector('body')
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    // hour format
    ap = (hr < 12) ? "AM" : "PM";
    hr = (hr === 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("Dig").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
     var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
// greeting
var today = new Date();
var hourNow = today.getHours();
var greeting;
var style;

if(hourNow >= 18) {
    greeting = 'Good evening!';
    body.style.backgroundColor = 'blue';
} else if (hourNow >= 12) {
    greeting = 'Good afternoon!';
      body.style.backgroundColor = 'orange';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
    body.style.backgroundColor = 'yellow';
} else {
    greeting = 'Hello!';
}










document.write('<h1>' + greeting + '</h1>');


//picture change on time
