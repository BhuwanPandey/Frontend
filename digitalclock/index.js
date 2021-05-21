const hour=document.querySelector('.hour');
const minute=document.querySelector('.minute');
const second=document.querySelector('.second');

const hourD=document.getElementById('hour');
const minuteD=document.getElementById('minute');
const secondD=document.getElementById('second');



setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    
    const hrr=hr>12?(hr-12):hr;

    hourD.innerText=hrr;
    minuteD.innerText=min;
    secondD.innerText=sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
    // console.log(hr_rotation,min_rotation,sec_rotation);
}, 1000);