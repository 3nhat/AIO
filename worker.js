var i=0;

function timedCount()
{
i=i+1;
var q = ['q',i];
//postMessage(i);
postMessage(q);                   //posts a message back to the HTML page.
setTimeout("timedCount()",500);
}

timedCount();
