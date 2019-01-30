
//VARIABLES
const myChart = document.getElementById('myChart').getContext('2d');
const myBarChart = document.getElementById('myBarChart').getContext('2d');
const myDoughnutChart = document.getElementById('myDoughnutChart').getContext('2d');
const hour = document.getElementById('h');
const day = document.getElementById('d');
const week = document.getElementById('w');
const month = document.getElementById('m');

const deleteButton = document.getElementById('btn');
const alert = document.getElementById('alert');

// Alert Bar 
deleteButton.addEventListener('click', () => {
 alert.style.display = 'none';
});


//Bell notification

//Global chart defaults
Chart.defaults.global.responsive = true;
Chart.defaults.scale.ticks.beginAtZero = false;
Chart.defaults.global.legend.display = false;
//LINE CHART
let chart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [
            {
            data: [750, 1250, 1000, 1500, 2000, 1500, 1250, 1750, 2250, 1750, 2250],
            backgroundColor: [ '#e2e3f6'],
            borderColor: ['#7477bf'],
            borderWidth: 1,
            pointBorderWidth:2,
            pointRadius: 7
        }
    ]
    },
    options: {
    }
});

hour.addEventListener('click', () => {
    new Chart(myChart, {
        type: 'line',
        data: {
            labels: ["9am", "10am", "11pm", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
            datasets: [
                {
                data: [5, 30, 15, 20, 45, 17, 10, 45, 25, 38, 12],
                backgroundColor: [ '#e2e3f6'],
                borderColor: ['#7477bf'],
                borderWidth: 1,
                pointBorderWidth:2,
                pointRadius: 7
            }
        ]
        },
        options: {
        }
    });
});

day.addEventListener('click', () => {
    new Chart(myChart, {
        type: 'line',
        data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
            datasets: [
                {
                data: [120, 320, 100, 120, 450, 380, 450, 180, 300, 320, 400],
                backgroundColor: [ 'r#e2e3f6'],
                borderColor: ['#7477bf'],
                borderWidth: 1,
                pointBorderWidth:2,
                pointRadius: 7
            }
        ]
        },
        options: {
        }
    });  
});

week.addEventListener('click', () => {
  new Chart(myChart, {
        type: 'line',
        data: {
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            datasets: [
                {
                data: [750, 1250, 1000, 1500, 2000, 1500, 1250, 1750, 2250, 1750, 2250],
                backgroundColor: [ '#e2e3f6'],
                borderColor: ['#7477bf'],
                borderWidth: 1,
                pointBorderWidth:2,
                pointRadius: 7
            }
        ]
        },
        options: {
        }
    });
});

month.addEventListener('click', () => {
    new Chart(myChart, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                data: [2000, 3500, 6000, 4000, 3800, 1500, 2000, 3000, 5000, 5500, 5800, 4000,],
                backgroundColor: [ '#e2e3f6'],
                borderColor: ['#7477bf'],
                borderWidth: 1,
                pointBorderWidth:2,
                pointRadius: 7
            }
        ]
        },
        options: {
        }
    });
});


//BAR CHART
var barChart = new Chart(myBarChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [ '#e2e3f6'],
            borderColor: ['#7477bf'],
        }
    ]
    },
    options: {
    }
});



//DONUT CHART
var doughnutChart = new Chart(myDoughnutChart, {
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