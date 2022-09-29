function Q001(exp) {
      return exp.data;
}

function Q(a) {
   
  self.addEventListener('message', function(e) { T(e); }, false);  

  function T(e){
     var x = Q001(e);
     postMessage(e.data);
  }
} 
Q(1);

