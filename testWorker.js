//self.addEventListener('message', function(e) { postMessage(e.data); }, false);

function Q(a) {

   self.addEventListener('message', function(e) { T(e); }, false);  

  function T(e){
     var x = function test(e) { return e; }
     //postMessage(e.data);
     postMessage(x.data);
  }
} 
Q(1);

