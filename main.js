const textSpan = document.querySelector('#span')

function timer(timeSeconds){
    let totalSeconds = timeSeconds;
    let timerId = null;

    createTimer()

    function createTimer(){
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        textSpan.textContent=`${formattedMinutes}:${formattedSeconds}`;
    }

    document.querySelector('#start').addEventListener('click', ()=>{
        timerId = setInterval(()=>{
            totalSeconds--;

            if(totalSeconds<=0){
                clearInterval(timerId)
            }

            createTimer()
        },1000);
    });

    document.querySelector('#stop').addEventListener('click',()=>{
        if(timerId){
            clearInterval(timerId)
        }
    });
}

timer(250)