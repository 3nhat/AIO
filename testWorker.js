//function Q001(exp) {
//      return exp.data;
//}
function T(e){
     //var x = Q001(e);
     postMessage(e.data);
}

function Q(a) {
   
  self.addEventListener('message', function(e) { T(e); }, false);  

  
} 
Q(1);

