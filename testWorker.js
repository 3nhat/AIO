//self.addEventListener('message', function(e) { postMessage(e.data); }, false);

function Q001(exp) {
      return exp;
}

function Q(a) {
   
  self.addEventListener('message', function(e) { T(e); }, false);  

  function T(e){
     var x = window['Q001'](e);
     //postMessage(e.data);
     postMessage(x.data);
  }
} 
Q(1);

