/* eslint-disable no-array-constructor */
const getFormattedDate = (today) => {
    let week = new Array(
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    );
    let month = new Array(
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    );
    let day = week[today.getDay()];
    let dd = today.getDate();
    let mm = month[today.getMonth() + 1]; //January is 0!
    let yyyy = today.getFullYear();
    let hour = today.getHours();
    let minu = today.getMinutes();

    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (minu < 10) {
        minu = "0" + minu;
    }

    return {
        day: day,
        date: `${mm} ${dd}, ${yyyy}`,
        time: `${hour} : ${minu}`,
    };
    
};

let date = new Date();
let dateText = getFormattedDate(date);

export { dateText };
