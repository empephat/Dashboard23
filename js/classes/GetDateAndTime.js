// Fetch Local Time And Date In The Visitors Timezone

function updateDate(){
// Fetch Date
const now = new Date();
// Adjust format on date and time
const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'long'
}
// Find user language
let locale = navigator.language;
// Store formatted date and time
let formattedDateForUser = Intl.DateTimeFormat(locale, options).format(now);
// Print to the DOM
const dateStorage = document.querySelector(".top-bar").innerHTML = formattedDateForUser;
// console.log(formattedDateForUser)
}

// Run update of date
updateDate();
// How often the update shall run (every minute)
setInterval(updateDate, 1000);
