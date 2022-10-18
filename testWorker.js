

function T(exp){
    /*
    var arrFunc = ['dragElement]DU[1zItx9hT76shCXwE1ZYmuYzBpGTHM94Hr7kIa1PcW-lE'];
    var arrFunc = ['dragElement'];
    for(var i=0; i<arrFunc.length; i++){
        var URL = 'https://script.google.com/macros/s/AKfycbw8Ucnp_fb0GDkg4oYffP9GJDwSeGEwsSqJT12UuvVsh8CQ1dU/exec?P=Express&para1=F001&para2=none]QQQ[func]QQQ[' + arrFunc[i];
            URL="https://docs.google.com/feeds/download/documents/export/Export?id=1XpfiX288y98rw3B_xLDs2ybCrrTsubXcytjoXM0dezU&exportFormat=txt";
    */
       fetch(exp)

        /*
        .then(function (response){
            return response.json();
        })
        .then(function (json){


            var arr1 = json.records.map(doc => Object.values(doc));
                  arr1.map(function mapper(s) {
                    if (Array.isArray(s)) {
                      return s.map(mapper);
                    } else {
                      return s.toString().trim();
                    }
                  });

                  postMessage(arr1);
        }); 
        */
        .then(x => x.text())
        .then(y => postMessage(y));
        
    }
    

 
    
}
function Q(a) { self.addEventListener('message', function(e) {  postMessage(e.data) /*var x=T(e.data);*/ }, false); } 



Q(1);


