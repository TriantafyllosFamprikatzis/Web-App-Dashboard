
/*-------------------------------*\
 NAVIGATION SCROLL BUTTONS
\*-------------------------------*/
//Navigation variables
const topLink = document.querySelector("a[href='#top']");
const trafficLink = document.querySelector("a[href='#traffic']");
const activityLink = document.querySelector("a[href='#activity']");
const settingsLink = document.querySelector("a[href='#settings']");
const navBtn = document.getElementsByClassName('nav-icons');

//Nav scroll when clicked for top page
topLink.addEventListener('click', (e) => {
    let target = document.getElementById('top');
    if (window.scrollTo) {
        e.preventDefault();
        window.scrollTo({ 'behavior': 'smooth', 'top': target.offsetTop });
    }
});
//Nav scroll when clicked for traffic
trafficLink.addEventListener('click', (e) => {
    let target = document.getElementById('traffic');
    if (window.scrollTo) {
        e.preventDefault();
        window.scrollTo({ 'behavior': 'smooth', 'top': target.offsetTop });
    }
});
//Nav scroll when clicked for activity
activityLink.addEventListener('click', (e) => {
    let target = document.getElementById('activity');
    if (window.scrollTo) {
        e.preventDefault();
        window.scrollTo({ 'behavior': 'smooth', 'top': target.offsetTop });
    }
});
//Nav scroll when clicked for settings
settingsLink.addEventListener('click', (e) => {
    let target = document.getElementById('settings');
    if (window.scrollTo) {
        e.preventDefault();
        window.scrollTo({ 'behavior': 'smooth', 'top': target.offsetTop });
    }
});
//Nav buttons change opacity by adding a class
for (let i = 0; i < navBtn.length; i += 1) {
    navBtn[i].addEventListener('click', function () {
        let current = document.getElementsByClassName('nav-selected');
        current[0].className = current[0].className.replace(' nav-selected', '');
        this.classList.add('nav-selected');
    });
}


/*-------------------------------*\
 ALERT BAR
\*-------------------------------*/
//Alert Variables
const deleteButton = document.getElementById('js-btn');
const sendButton = document.getElementById('js-send');
const user = document.getElementById('js-search-bottom');
const message = document.getElementById('js-textarea');

//Hides when clicked 
deleteButton.addEventListener('click', () => {
    const alertBar = document.getElementById('js-alert');
    alertBar.style.display = 'none';
});
// Alert on Send button
/*When user press to submit the form, it displays a confirmation that the message was sent. 
Error messages are displayed if a user isn’t selected or message field is empty.*/
sendButton.addEventListener('click', () => {
    if (user.value == '') {
        alert('Please select a User');
    } else if (message.value == '') {
        alert('Message is empty');
    } else {
        alert('Message successfully sent!');
        user.value = '';
        message.value = '';
    }
});

/*-------------------------------*\
 NOTIFICATION BOX
\*-------------------------------*/
//Notification variables
const bell = document.getElementById('js-bell');
const popUpMenu = document.getElementById('notif-menu');

//Bell pop up notification
bell.addEventListener('click', () => {
    if (popUpMenu.style.display === 'none') {
        popUpMenu.style.display = 'block';
    } else {
        popUpMenu.style.display = 'none';
    }
});
//When user deletes all notifications a message li appears
function checkIfNotificationsEmpty() {
    const alertBell = document.getElementById('alert-bell');
    const liList = document.getElementById('notif-menu').getElementsByTagName('li');
    if (liList.length === 3) {
        setTimeout(() => {
            alertBell.style.display = 'block';
        }, 451);
    }
}
// User can delete notifications
popUpMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentNode.classList.add('removed-item');
        setTimeout(() => {
            e.target.parentNode.remove(e);
        }, 450);
    } checkIfNotificationsEmpty();
});



/*-------------------------------*\
 CHARTS
\*-------------------------------*/
//Chart Variables
const lineChart = document.getElementById('lineChart').getContext('2d');
const barChart = document.getElementById('barChart').getContext('2d');
const doughnutChart = document.getElementById('doughnutChart').getContext('2d');
const hourChart = document.getElementById('hour');
const dayChart = document.getElementById('day');
const weekChart = document.getElementById('week');
const monthChart = document.getElementById('month');
const chartButtons = document.querySelectorAll('.li');

//Chart Buttons
//Buttons change color when selected
chartButtons.forEach(function (btn) {
    weekChart.classList.add('liSelected');
    btn.addEventListener('click', function () {
        chartButtons.forEach(function (btn) {
            btn.classList.remove('liSelected');
        });
        this.classList.add('liSelected');
    });
});
//Global chart defaults
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.scale.ticks.beginAtZero = false;
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.defaultFontColor = '#9e9e9e';

//LINE CHARTS
new Chart(lineChart, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [
            {
                // label:'Visitors',
                data: [750, 1250, 1000, 1500, 2000, 1500, 1250, 1750, 2250, 1750, 2250],
                backgroundColor: '#e2e3f6',
                borderColor: '#7477bf',
                borderWidth: 0.5,
                pointBorderWidth: 2,
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#e7e8f9',
                pointRadius: 4,
                lineTension: 0,
            }
        ]
    },
});
hourChart.addEventListener('click', () => {
    new Chart(lineChart, {
        type: 'line',
        data: {
            labels: ["9am", "10am", "11pm", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
            datasets: [
                {
                    // label:'Visitors',
                    data: [5, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20],
                    backgroundColor: '#e2e3f6',
                    borderColor: '#7477bf',
                    borderWidth: 0.5,
                    pointBorderWidth: 2,
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: '#e7e8f9',
                    pointRadius: 4,
                    lineTension: 0,
                }
            ]
        },
    });
});
dayChart.addEventListener('click', () => {
    new Chart(lineChart, {
        type: 'line',
        data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
            datasets: [
                {
                    // label:'Visitors',
                    data: [150, 300, 280, 100, 200, 450, 300, 220, 400, 320, 280],
                    backgroundColor: '#e2e3f6',
                    borderColor: '#7477bf',
                    borderWidth: 0.5,
                    pointBorderWidth: 2,
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: '#e7e8f9',
                    pointRadius: 4,
                    lineTension: 0,
                }
            ]
        },
    });
});
weekChart.addEventListener('click', () => {
    new Chart(lineChart, {
        type: 'line',
        data: {
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            datasets: [
                {
                    // label:'Visitors',
                    data: [750, 1250, 1000, 1500, 2000, 1500, 1250, 1750, 2250, 1750, 2250],
                    backgroundColor: '#e2e3f6',
                    borderColor: '#7477bf',
                    borderWidth: 0.5,
                    pointBorderWidth: 2,
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: '#e7e8f9',
                    pointRadius: 4,
                    lineTension: 0,
                }
            ]
        },
    });
});
monthChart.addEventListener('click', () => {
    new Chart(lineChart, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    // label:'Visitors',
                    data: [2000, 3500, 6000, 4000, 3800, 1500, 2000, 3000, 5000, 5500, 5800, 4000,],
                    backgroundColor: '#e2e3f6',
                    borderColor: '#7477bf',
                    borderWidth: 0.5,
                    pointBorderWidth: 2,
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: '#e7e8f9',
                    pointRadius: 4,
                    lineTension: 0,
                }
            ]
        },
    });
});

//BAR CHART
new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                // label:'visitors',
                data: [75, 100, 175, 125, 225, 200, 100],
                backgroundColor: '#7377bf',
            }
        ]
    },
});

//DONUT CHART
new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [
            {
                data: [15, 25, 60],
                backgroundColor: ['#74b1bf', '#81c98f', '#7377bf'],
            }
        ]
    },
    options: {
        legend: {
            display: true,
            position: 'right'
        },
    }
});