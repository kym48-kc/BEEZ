
let count = function() {
    let a = 0;
    let interval = 200;
    
    let countStart = setInterval(
    function() {
       /* document.getElementById('b2').innerHTML=*/ a++;
        if (a == 1 ) {
            document.getElementById('b1').style.backgroundColor = 'red';
            document.getElementById('b2').style.backgroundColor = 'white';
            document.getElementById('b3').style.backgroundColor = 'white';
            document.getElementById('b4').style.backgroundColor = 'white';
            document.getElementById('b5').style.backgroundColor = 'white';

        }
        else if (a == 2 ) {
            document.getElementById('b1').style.backgroundColor = 'red';
            document.getElementById('b2').style.backgroundColor = 'red';
            document.getElementById('b3').style.backgroundColor = 'white';
            document.getElementById('b4').style.backgroundColor = 'white';
            document.getElementById('b5').style.backgroundColor = 'white';
            //document.getElementById('b1').style.backgroundColor = 'grey';
        }
        else if (a == 3 ) {
            document.getElementById('b1').style.backgroundColor = 'red';
            document.getElementById('b2').style.backgroundColor = 'red';
            document.getElementById('b3').style.backgroundColor = 'red';
            document.getElementById('b4').style.backgroundColor = 'white';
            document.getElementById('b5').style.backgroundColor = 'white';
            //document.getElementById('b1').style.backgroundColor = 'grey';
        }  
        else if (a == 4) {
            document.getElementById('b1').style.backgroundColor = 'red'//'grey';
            document.getElementById('b2').style.backgroundColor = 'red'//'ightgrey';
            document.getElementById('b3').style.backgroundColor = 'red';
            document.getElementById('b4').style.backgroundColor = 'red';
            document.getElementById('b5').style.backgroundColor = 'white';
            //document.getElementById('b1').style.backgroundColor = 'grey';
        }
        else if (a == 5) {
            document.getElementById('b1').style.backgroundColor = 'white';
            document.getElementById('b2').style.backgroundColor = 'red';
            document.getElementById('b3').style.backgroundColor = 'red';
            document.getElementById('b4').style.backgroundColor = 'red'//'rgba(248,248,255,0.8)';
            document.getElementById('b5').style.backgroundColor = 'red';
            window.location.href = '/storage/emulated/0/business-taid.html';
            return count();
            //document.getElementById('b1').style.backgroundColor = 'grey';
        }        
    }, interval)
};
count();
