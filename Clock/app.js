milliQuery = document.querySelector(".handle__milli");
secondQuery = document.querySelector(".handle__second");
minuteQuery = document.querySelector(".handle__minute");
hourQuery = document.querySelector(".handle__hour");

function updateClock() {
  d = new Date();
  milli = d.getMilliseconds();
  second = d.getSeconds();
  minute = d.getMinutes();
  hour = d.getHours();

  milliAngle = milli * 360 / 1000 
  secondScaleFactor = 6 / 1000
  extraSecondsAngle = milli * secondScaleFactor
  secondAngle = second * 6 + extraSecondsAngle

  minuteScaleFactor = 6 / 60
  extraMinutesAngle = second * minuteScaleFactor
  minuteAngle = 6 * minute + extraMinutesAngle

  
  hourScaleFactor = 30 / 60
  extraHourAngle = minute * hourScaleFactor
  hourAngle = 30 * hour + extraHourAngle

    

  milliQuery.style.transform = `translateX(-50%) rotate(${milliAngle}deg)`;
  secondQuery.style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;
  minuteQuery.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
  hourQuery.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;

  requestAnimationFrame(updateClock);
}
requestAnimationFrame(updateClock);
