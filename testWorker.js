//function Q001(exp) {
//      return exp.data;
//}
function T(e){
     //var x = Q001(e);
     postMessage(e.data);
}

function Q(a) {
   
  self.addEventListener('message', function(e) { var x=2; postMessage(2); }, false);  

  
} 
Q(1);

