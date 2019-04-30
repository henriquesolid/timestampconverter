showactualtimestampOne();
function showactualtimestampOne(){ //function to show the actual timestamp
  var date = new Date(); //create date
  var timestamp = date.getTime(); //get timestamp from date
  timestamp = timestamp / 1000; //divid by 1000 because of seconds
  timestamp = parseInt(timestamp); //convert to integer
  document.getElementById('timestampInput').value = timestamp; //show the timestamp in the field timestamp, so the user can convert the time now
}

function hello(){ //function to show the actual timestamp
  var date = new Date(); //create date
  var timestamp = date.getTime(); //get timestamp from date
  timestamp = timestamp / 1000; //divid by 1000 because of seconds
  timestamp = parseInt(timestamp); //convert to integer
  document.getElementById('timestampNOW').innerHTML = "<code>Timestamp now " + timestamp + "</code>"; //show in the frontend
}

var dontStop = setInterval(hello, 1000); //update the function hello each second, so the timestamp keeps updatign


function timestampUTC(){ //same history as below but to UTC
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
       console.log("to use this api make requests to http://localhost:8080/utc/YOURTIMESTAMP")
   }
 };
 http.send();  
}
}

var responseISO;
function timestampISO(){  //api that transform timestamp into date in ISO, java will take the java UTC from the machine
   var inputNotNull = document.getElementById('timestampInput').value;
   inputNotNull = parseInt(inputNotNull);
   if (isNaN(inputNotNull) || inputNotNull > 9999999999999999999){ //if the user dont input number or is a number to big for the java API
        document.getElementById('response').innerHTML = "<code>Please enter a valid timestamp!</code>";
    }

    else {
    var timestamp;
    timestamp = document.getElementById('timestampInput').value;  

   var http = new XMLHttpRequest();
   // const url = 'http://localhost:8080/iso/1554397502000';
   //http://timestampconverter.northeurope.cloudapp.azure.com:8080/utc/0
   const url = "http://localhost:8080/iso/" + timestamp;

   http.open("GET", url);
   http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
        var response = http.responseText;
        // console.log(response);
        var responseJSON = JSON.parse(response);
        // console.log(responseJSON);

        var time = responseJSON.time;
        responseISO = time;
        time = time + " - ISO 8601";
        document.getElementById('response').innerHTML = time;
        console.log("to use this api make requests to http://localhost:8080/iso/YOURTIMESTAMP")
    }
  };
  http.send();  
}
}

//mvnw.cmd spring-boot:run