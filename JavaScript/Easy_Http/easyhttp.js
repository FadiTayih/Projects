
function easyhttp(){
    this.http = new XMLHttpRequest();
}

// Make a Get Http Request
easyhttp.prototype.get = function(url, callback){

    this.http.open('GET', url, true);

    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
           callback(null, self.http.responseText);
        }
        else{
            callback('Error:' + self.http.status);
        }
    }

    this.http.send();
}
// Make a Post Http Request
easyhttp.prototype.post = function(url, data, callback) {

    this.http.open('POST',url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function(){
        
           callback(null, self.http.responseText);
        
     
    }


    this.http.send(JSON.stringify(data));
}
// Make a Put Http Request
easyhttp.prototype.put = function(url, data, callback) {

    this.http.open('PUT',url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function(){
        
           callback(null, self.http.responseText);
        
     
    }


    this.http.send(JSON.stringify(data));
}
// Make a delete Http Request
easyhttp.prototype.delete = function(url, callback){

    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
           callback(null, 'Post deleted');
        }
        else{
            callback('Error:' + self.http.status);
        }
    }

    this.http.send();
}