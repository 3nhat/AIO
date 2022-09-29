var y;
function T(exp){
     y = 2;
     return y;
}
function Q(a) { self.addEventListener('message', function(e) { var x=T(e.data); postMessage(x); }, false); } 
Q(1);

