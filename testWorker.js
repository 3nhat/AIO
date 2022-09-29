//self.addEventListener('message', function(e) { postMessage(e.data); }, false);

function Q() {
   self.addEventListener('message', function(e) { 
     T(e); 
   }, false);  

  function T(e){
    postMessage(e.data);
  }
} 
Q();

