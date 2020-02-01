console.log("---- script 07 -----")


var request = new XMLHttpRequest();
request.open("POST", "http://url-service-web.com/api/users");
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify(jsonBody));

////


function send(e){
  e.preventDefault()
  let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
          var response = JSON.parse(this.responseText);
          document.getElementById("result").innerHTML = response.postData.text;
      }
  };
  request.open("POST", "https://mockbin.com/request");  
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify( {value: document.getElementById("value").value } )); 
}

document.getElementById("form").addEventListener("submit", send)

console.log("---- script 07 -----")
