function EasyHTTP(){
  this.http = new XMLHttpRequest();
}

//Make HTTP GET request

EasyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);
  let that = this;
  this.http.onload = function(){
    if (that.http.status === 200){
      callback(null, that.http.responseText); //return response to callback function
    }else{
      callback('Error: ' + that.http.status);
    }
  }
  this.http.send();
}

EasyHTTP.prototype.delete = function(url, callback){
  this.http.open('DELETE', url, true);
  let that = this;
  this.http.onload = function(){
    if (that.http.status === 200){
      callback(null, 'Post Deleted'); //return response to callback function
    }else{
      callback('Error: ' + that.http.status);
    }
  }
  this.http.send();
}


//Make HTTP POST request
EasyHTTP.prototype.post = function(url, data, callback){
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type','application/json');
  let that = this;
  this.http.onload = function(){
    if (that.http.status == 201){
      callback(null, that.http.responseText);
    }else{
      callback(`Error: ${that.http.status}`);
    }
  }
  this.http.send(JSON.stringify(data));
}

//Make HTTP PUT request
EasyHTTP.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type','application/json');
  let that = this;
  this.http.onload = function(){
    if (that.http.status == 200){
      callback(null, that.http.responseText);
    }else{
      callback(`Error: ${that.http.status}`);
    }
  }
  this.http.send(JSON.stringify(data));
}
//EasyHTTP.prototype.

//Make HTTP DELETE request
//EasyHTTP.prototype.
