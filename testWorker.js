//function Q001(exp) {
//      return exp.data;
//}
function T(exp){
     return exp;
}

function Q(a) {
   
  self.addEventListener('message', function(e) { var x=T(e.data); postMessage(x); }, false);  

  
} 
Q(1);

