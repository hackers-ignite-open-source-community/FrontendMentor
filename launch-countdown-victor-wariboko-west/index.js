var deadLine = (new Date().getTime() + 1209600000);

var x = setInterval(function(){
    var currentDate = new Date().getTime();
    var d = deadLine - currentDate;

    var days = Math.floor(d / (1000 * 60 * 60 * 24));
    console.log(days);
    document.querySelector(".firstRow div").innerHTML = `${days}`;
    var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours);
    document.querySelector(".secondRow").innerHTML = `${hours}`;
    var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes);
    document.querySelector(".thirdRow").innerHTML = `${minutes}`;
    var seconds = Math.floor((d % (1000 * 60)) / (1000));
    console.log(seconds);
    document.querySelector(".fourthRow").innerHTML = `${seconds}`;
}, 1000);


