hello();
function hello(){
var date = new Date();
var timestamp = date.getTime();
timestamp = timestamp / 1000;
timestamp = parseInt(timestamp);
document.getElementById('timestampNOW').innerHTML = "<code>Timestamp now: " + timestamp + "</code>";
}

var myVar = setInterval(hello, 1000);


function timestampISO(){
   var inputNotNull = document.getElementById('timestampInput').value;
   inputNotNull = parseInt(inputNotNull);
   if (isNaN(inputNotNull) || inputNotNull > 9999999999999999999){
        document.getElementById('response').innerHTML = "<code>Please enter a valid timestamp!</code>";
    }

    else {
    var timestamp;
    timestamp = document.getElementById('timestampInput').value;  

   var http = new XMLHttpRequest();
   // const url = 'http://localhost:8080/iso/1554397502000';
   const url = "http://localhost:8080/iso/" + timestamp;

   http.open("GET", url);
   http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
        var response = http.responseText;
        // console.log(response);
        var responseJSON = JSON.parse(response);
        // console.log(responseJSON);

        var time = responseJSON.time;
        var responseISO = "ISO 8601: <br>" + time;
        
        document.getElementById('response').innerHTML = responseISO;
    }
  };
  http.send();  
}
}


function timestampUTC(){
    var inputNotNull = document.getElementById('timestampInput').value;
    inputNotNull = parseInt(inputNotNull);
    if (isNaN(inputNotNull) || inputNotNull > 999999999999999999){
         document.getElementById('response').innerHTML = "<code>Please enter a valid timestamp!</code>";
     }
 
     else {
     var timestamp;
     timestamp = document.getElementById('timestampInput').value;  
 
    var http = new XMLHttpRequest();
    // const url = 'http://localhost:8080/utc/1554397502000';
    const url = "http://localhost:8080/utc/" + timestamp;
 
    http.open("GET", url);
    http.onreadystatechange = function () {
     if (http.readyState === 4 && http.status === 200) {
         var response = http.responseText;
         var responseJSON = JSON.parse(response);
         var time = responseJSON.time;
         document.getElementById('response').innerHTML = time;
     }
   };
   http.send();  
 }
 }
 