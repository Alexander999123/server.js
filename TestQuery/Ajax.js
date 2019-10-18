
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      xhr = null;
    }

    return xhr;
  }
  
  var xhr = createCORSRequest('GET', "http://localhost:3000/films");

  xhr.onreadystatechange = function () {
    if(this.readyState === 4 && this.status === 200){
        let divCont = document.querySelector('.content');
        divCont.textContent = this.responseText;
    }
  }

  xhr.send();   
