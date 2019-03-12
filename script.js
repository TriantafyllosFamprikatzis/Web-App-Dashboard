
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

// Nav buttons change opacity when clicked
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

//Hides when clicked with animation
deleteButton.addEventListener('click', () => {
    const alertBar = document.getElementById('js-alert');
    alertBar.classList.add('alert-remove');
    setTimeout(() => {
        alertBar.style.visibility = 'hidden';
    }, 400);
});

// Alert on Send button
/*When user press to submit the form, it displays a confirmation that the message was sent. 
Error messages are displayed if a user isn’t selected or message field is empty.*/
sendButton.addEventListener('click', () => {
    if (user.value == '') {
        alert('Please select a User');
    } else if (message.value == '') {
        alert('Please type a message you would like to send ' + user.value + '.');
    } else {
        alert('Your message to ' + user.value + ' successfully sent!');
        user.value = '';
        message.value = '';
    }
});


/*-------------------------------*\
 NOTIFICATION BOX
\*-------------------------------*/
//Notification variables
const list1 = document.getElementById('li-1');
const list2 = document.getElementById('li-2');
const list3 = document.getElementById('li-3');
const list4 = document.getElementById('li-4');
const badge1 = document.getElementById('badge-1');
const badge2 = document.getElementById('badge-2');
const badge3 = document.getElementById('badge-3');
const badge4 = document.getElementById('badge-4');
const bell = document.getElementById('js-bell');
const popUpMenu = document.getElementById('notif-menu');
const jsBadge = document.getElementsByClassName('js-badge');
const alertBell = document.getElementById('alert-bell');

//When the page loads starts to add notifications one by one
//Even if an element is deleted in the meantime the badge will be updated respectively
function addNotifications() {
    const li = document.getElementsByClassName('popuptext');
    for (let i = 0; i < li.length; i += 1) {
        li[i].style.display = 'none';
    }
    setTimeout(() => {
        list1.style.display = 'grid';
        list1.classList.add('js-badge');
        addBadge();
    }, 1500);
    setTimeout(() => {
        list2.style.display = 'grid';
        list2.classList.add('js-badge');
        addBadge();
    }, 3000);
    setTimeout(() => {
        list3.style.display = 'grid';
        list3.classList.add('js-badge');
        addBadge();
    }, 6000);
    setTimeout(() => {
        list4.style.display = 'grid';
        list4.classList.add('js-badge');
        addBadge();
    }, 12000);
} addNotifications();

//Bell badge
//It checks how many elements exist in notification list,
//adds a badge and animation to the bell
function addBadge() {
    badge1.style.display = 'none';
    badge2.style.display = 'none';
    badge3.style.display = 'none';
    badge4.style.display = 'none';

    switch (jsBadge.length) {
        case 0:
            alertBell.style.display = 'block';
            break;
        case 1:
            badge1.style.display = 'block';
            alertBell.style.display = 'none';
            break;
        case 2:
            badge2.style.display = 'block';
            break;
        case 3:
            badge3.style.display = 'block';
            break;
        case 4:
            badge4.style.display = 'block';
            break;
        default:
            break;
    }
}

// User can delete notifications
popUpMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentNode.classList.add('removed-item');
        setTimeout(() => {
            e.target.parentNode.remove(e);
            addBadge();
        }, 450);
    }
});

//Bell shows Notification content on click
bell.addEventListener('click', () => {
    if (popUpMenu.style.display === 'none') {
        popUpMenu.style.display = 'block';
    } else {
        popUpMenu.style.display = 'none';
    }
});


/*-------------------------------*\
 FORMS
\*-------------------------------*/
//Top search input disable submit function
document.getElementById('search-top').onkeypress = function (e) {
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
        e.preventDefault();
    }
};

//Auto Complete Form
const people = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener('input', function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement('DIV');
        a.setAttribute('id', this.id + 'autocomplete-list');
        a.setAttribute('class', 'autocomplete-items');
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement('DIV');
                /*make the matching letters bold:*/
                b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>';
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener('click', function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName('input')[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener('keydown', function (e) {
        var x = document.getElementById(this.id + 'autocomplete-list');
        if (x) x = x.getElementsByTagName('div');
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add('autocomplete-active');
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove('autocomplete-active');
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName('autocomplete-items');
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener('click', function (e) {
        closeAllLists(e.target);
    });
}
autocomplete(document.getElementById('js-search-bottom'), people);


/*-------------------------------*\
 LOCAL STORAGE
\*-------------------------------*/

function save() {
    const checkbox1 = document.getElementById('checkbox1');
    localStorage.setItem('checkbox1', checkbox1.checked);

    const checkbox2 = document.getElementById('checkbox2');
    localStorage.setItem('checkbox2', checkbox2.checked);

    const option1 = document.getElementById('option1');
    localStorage.setItem('option1', option1.selected);

    const option2 = document.getElementById('option2');
    localStorage.setItem('option2', option2.selected);

    const option3 = document.getElementById('option3');
    localStorage.setItem('option3', option3.selected);

    const option4 = document.getElementById('option4');
    localStorage.setItem('option4', option4.selected);

    alert('Your settings are saved');
}

function load() {
    const checked1 = JSON.parse(localStorage.getItem('checkbox1'));
    document.getElementById('checkbox1').checked = checked1;

    const checked2 = JSON.parse(localStorage.getItem('checkbox2'));
    document.getElementById('checkbox2').checked = checked2;

    const checked3 = JSON.parse(localStorage.getItem('option1'));
    document.getElementById('option1').selected = checked3;

    const checked4 = JSON.parse(localStorage.getItem('option2'));
    document.getElementById('option2').selected = checked4;

    const checked5 = JSON.parse(localStorage.getItem('option3'));
    document.getElementById('option3').selected = checked5;

    const checked6 = JSON.parse(localStorage.getItem('option4'));
    document.getElementById('option4').selected = checked6;
}

function cancel() {
    location.reload();
    localStorage.clear();
    document.getElementById('js-timezone').value = '';
}

load();


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

//Chart Buttons, change color when selected
// Loop through the buttons, add class only on week chart
chartButtons.forEach(function (btn) {
    weekChart.classList.add('liSelected');
    // Set up a click event handler for the button
    btn.addEventListener('click', function () {
        // Loop though all the buttons and reset the colors back to default
        chartButtons.forEach(function (btn) {
            btn.classList.remove('liSelected');
        });
        // Add the class to the one button that got clicked
        this.classList.add('liSelected');
    });
});

//Global chart defaults
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.scale.ticks.beginAtZero = true;
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontFamily = 'Ubuntu';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#9e9e9e';

//LINE CHARTS
let myChart = new Chart(lineChart, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [
            {
                label: 'Visitors',
                data: [350, 1250, 1000, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
                backgroundColor: 'rgba(115, 119, 191, 0.25)',
                borderColor: '#7477bf',
                borderWidth: 1.5,
                pointBorderWidth: 1.8,
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#e7e8f9',
                pointRadius: 5,
                lineTension: 0,
            }
        ]
    },
});
hourChart.addEventListener('click', () => {
    myChart.data.labels = ['9am', '10am', '11pm', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    myChart.config.data.datasets[0].data = [5, 17, 25, 15, 20, 25, 20, 15, 20, 25, 30];
    myChart.update();
});

dayChart.addEventListener('click', () => {
    myChart.data.labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'];
    myChart.config.data.datasets[0].data = [150, 300, 200, 120, 200, 420, 300, 220, 400, 120, 200];
    myChart.update();
});
weekChart.addEventListener('click', () => {
    myChart.data.labels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
    myChart.config.data.datasets[0].data = [350, 1250, 1000, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250];
    myChart.update();
});
monthChart.addEventListener('click', () => {
    myChart.data.labels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
    myChart.config.data.datasets[0].data = [1500, 2000, 5000, 4000, 3200, 2000, 5000, 2800, 3500, 5500, 3000];
    myChart.update();
});

//BAR CHART
new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [
            {
                // label:'visitors',
                data: [75, 100, 175, 125, 225, 200, 100],
                backgroundColor: '#7377bf',
                hoverBackgroundColor: '#6368c0',
            }
        ]
    },
});

//DONUT CHART
new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [
            {
                data: [15, 25, 60],
                backgroundColor: ['#74b1bf', '#81c98f', '#7377bf'],
                hoverBackgroundColor: ['#56aabd', '#67c97a', '#6368c0'],
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