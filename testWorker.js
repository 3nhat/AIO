//self.addEventListener('message', function(e) { postMessage(e.data); }, false);

window.window['Q001'] = function(exp) {
      return 3;
}

function Q(a) {
   
  self.addEventListener('message', function(e) { T(e); }, false);  

  function T(e){
     var x = window['Q001'](e);
     //postMessage(e.data);
     postMessage(e.data);
  }
} 
Q(1);

