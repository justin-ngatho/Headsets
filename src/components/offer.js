
import React, { useState, useEffect } from 'react';
export default function Offer () {
    const [giveawayText, setGiveawayText] = useState('');
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December',
    ];

    const weekdays = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    ];

    let tempDate = new Date();
    let tempYear = tempDate.getFullYear();
    let tempMonth = tempDate.getMonth();
    let tempDay = tempDate.getDate();

    const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();
    let month = futureDate.getMonth();
    month = months[month];
    const weekday = weekdays[futureDate.getDay()];
    const date = futureDate.getDate();

    setGiveawayText(`giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`);

    const futureTime = futureDate.getTime();

    function getRemainingTime() {
      const today = new Date().getTime();
      const t = futureTime - today;
      const oneDay = 24 * 60 * 60 * 1000;
      const oneHour = 60 * 60 * 1000;
      const oneMinute = 60 * 1000;

      let days = t / oneDay;
      days = Math.floor(days);
      let hours = Math.floor((t % oneDay) / oneHour);
      let minutes = Math.floor((t % oneHour) / oneMinute);
      let seconds = Math.floor((t % oneMinute) / 1000);

      days = days < 10 ? `0${days}` : days.toString();
      hours = hours < 10 ? `0${hours}` : hours.toString();
      minutes = minutes < 10 ? `0${minutes}` : minutes.toString();
      seconds = seconds < 10 ? `0${seconds}` : seconds.toString();

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (t < 0) {
        clearInterval(countdown);
        setIsExpired(true);
      }
    }

    const countdown = setInterval(getRemainingTime, 1000);

    // Cleanup interval on unmount
    return () => {
      clearInterval(countdown);
    };
  }, []);

    return (

        <div className="offer">
      <section className="section-center">
        <article className="gift-img">
          <img src="./images/headphones6.jpg" alt="headphones" />
        </article>
        <article className="gift-info">
          <h3>Black & Red Headphones giveaway!!</h3>
          <h4 className="giveaway">{giveawayText}</h4>
          <p>
            Bluetooth headphones with a 3000mAH battery and an auxiliary
            port and a cotton padding to enhance comfort and noise cancelling!
          </p>
          <a href="" className="btn">
            Buy Now &#8594;
          </a>
          <div className="deadline">
            <div className="deadline-format">
              <div>
                <h4 className="days">{days}</h4>
                <span>days</span>
              </div>
            </div>
            <div className="deadline-format">
              <div>
                <h4 className="hours">{hours}</h4>
                <span>hours</span>
              </div>
            </div>
            <div className="deadline-format">
              <div>
                <h4 className="minutes">{minutes}</h4>
                <span>mins</span>
              </div>
            </div>
            <div className="deadline-format">
              <div>
                <h4 className="seconds">{seconds}</h4>
                <span>secs</span>
              </div>
            </div>
          </div>
          {isExpired && (
            <h4 className="expired">sorry, this giveaway has expired!</h4>
          )}
        </article>
      </section>
    </div>
    )
}