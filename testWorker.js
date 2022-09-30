/*
const webWorkerJQueryFix = () => {
    document = self.document = { parentNode: null, nodeType: 9, toString: () => { return "FakeDocument" } };
    window = self.window = self;
    const fakeElement = Object.create(document);
    fakeElement.nodeType = 1;
    fakeElement.toString = () => { return "FakeElement" };
    fakeElement.parentNode = fakeElement.firstChild = fakeElement.lastChild = fakeElement;
    fakeElement.ownerDocument = document;

    document.innerHTML = "";
    document.head =
        document.body =
        fakeElement;
    document.ownerDocument =
        document.documentElement =
        document;

    document.createElement =
        document.getElementById =
        document.getElementsByClassName =
        document.getElementsByTagName = () => { return [fakeElement]; };

    document.appendChild = (child) => { return child; };

    document.createDocumentFragment = () => {
        this.appendChild = document.appendChild;
        return this;
    };

    document.getAttribute =
        document.removeChild =
        document.addEventListener =
        document.removeEventListener =
        document.setAttribute = () => { return null; };

    document.cloneNode = () => {
        this.cloneNode = document.cloneNode;
        this.lastChild = {
            checked: false,
        }
        return this;
    };

    document.childNodes = [];
    document.implementation = {
        createHTMLDocument: () => { return document; }
    }
}
*/

function T(exp){
    var URL = 'https://script.google.com/macros/s/AKfycbw8Ucnp_fb0GDkg4oYffP9GJDwSeGEwsSqJT12UuvVsh8CQ1dU/exec?P=Express&para1=F001&para2=none]QQQ[func]QQQ[dragElement';

fetch(URL)
.then(function (response){
    return response.json();
})
.then(function (json){
    return json;
    /*
    var arr1 = json.records.map(doc => Object.values(doc));
          arr1.map(function mapper(s) {
            if (Array.isArray(s)) {
              return s.map(mapper);
            } else {
              return s.toString().trim();
            }
          });
          
          return(arr1);
*/
});  
    
}
function Q(a) { self.addEventListener('message', function(e) { var x=T(e.data); postMessage(x); }, false); } 

//loadFakeDOMforJQuery();
//importScripts("/jquery-1.10.2.min.js");
//this.importScripts("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js");

Q(1);
/*
var i = 0;

function someAjax () {
    // note `return` statement
    return fetch("https://httpbin.org/get")
           .then(response => response.text())
           .catch(err => { throw err })
}
function doSomething() {
    var test = someAjax();
    someAjax().then(test => {
      postMessage(test);
      setTimeout("doSomething()",500);
    })
    // handle error here
    .catch(err => console.error(err))  
}

doSomething();
*/

