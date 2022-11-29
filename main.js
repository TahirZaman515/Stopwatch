
alert ("Isabella Workout Timer")
//Global Variables

// 3 types of variables:const, let, and var

//Grabs the Time div the 00:00:00
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');




//Seconds declaration, start from 0
let seconds = 0;

//Interval will be null, so this is what ticks the timer every second
let interval = null;


//Event Listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);


//Update the Timer
function timer () 
{

        seconds++;
     
        //Hours is every 3600 second. Stored in hrs.
        let hrs = Math.floor(seconds / 3600);
     
        //Floor flattens the number. From 6.2 to 6.0.
        //60 Seconds makes a Minute.
        let mins = Math.floor((seconds - (hrs * 3600)) / 60);
       
     
        //Format our Time
        //% is Modulo. Only in 60 intervals. Remainder is left
        let secs = seconds % 60;
     
        //Start at 0 whenever it goes past 10 on the clock
        if (secs < 10) secs = '0' + secs;
        if (mins < 10) mins = '0' + mins;
        if (hrs < 10) hrs = '0' + hrs;
     
     
        //Backticks : Next to 1 on keyboard. `
       
          time_el.innerText = `${hrs}:${mins}:${secs}` ;
     
    }
     
     
    function start ()
    {
        if (interval) {
            return
        }
       
        //1000 milliseconds or 1 second.
        interval = setInterval(timer, 1000);
    }
     
    function stop ()
    {
        //Sets it back to 0
        clearInterval(interval);
        interval = null;
        //Sets variable back to null, so you can redo it.
     
     
    }
     
    function reset ()
    {
        stop();
        seconds = 0;
        time_el.innerText = '00:00:00';
     
     
     
    }
    
