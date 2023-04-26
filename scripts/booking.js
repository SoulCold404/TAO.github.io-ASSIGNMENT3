// /********* create variables *********/
// // useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// // Do any of these variables need to be initialized when the page is loaded? 
// // When do they need to be reset or updated?

let costPerDay = 35;
let daysSelected = [];
let calculatedCost = 0;

const mondayBtn = document.getElementById('monday');
const tuesdayBtn = document.getElementById('tuesday');
const wednesdayBtn = document.getElementById('wednesday');
const thursdayBtn = document.getElementById('thursday');
const fridayBtn = document.getElementById('friday');
const fullBtn = document.getElementById('full');
const halfBtn = document.getElementById('half');
const clearBtn = document.getElementById('clear-button');
const calculatedCostEl = document.getElementById('calculated-cost');


// /********* colour change days of week *********/
// // when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// // added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function dayCounter(day) {
    if (!daysSelected.includes(day)) {
        daysSelected.push(day);
    } else {
        const index = daysSelected.indexOf(day);
        if (index !== -1) {
            daysSelected.splice(index, 1);
        }
    }
}

function updateCalculatedCost() {
    const cost = costPerDay * daysSelected.length;
    calculatedCostEl.innerHTML = cost;
}

mondayBtn.addEventListener('click', () => {
    mondayBtn.classList.toggle('clicked');
    dayCounter('monday');
    updateCalculatedCost();
});

tuesdayBtn.addEventListener('click', () => {
    tuesdayBtn.classList.toggle('clicked');
    dayCounter('tuesday');
    updateCalculatedCost();
});

wednesdayBtn.addEventListener('click', () => {
    wednesdayBtn.classList.toggle('clicked');
    dayCounter('wednesday');
    updateCalculatedCost();
});

thursdayBtn.addEventListener('click', () => {
    thursdayBtn.classList.toggle('clicked');
    dayCounter('thursday');
    updateCalculatedCost();
});

fridayBtn.addEventListener('click', () => {
    fridayBtn.classList.toggle('clicked');
    dayCounter('friday');
    updateCalculatedCost();
});

// /********* clear days *********/
// // when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearBtn.addEventListener('click', () => {
    daysSelected = [];
    calculatedCost = 0;
    calculatedCostEl.innerHTML = calculatedCost;
    const clickedDays = document.querySelectorAll('.day-selector .clicked');
    clickedDays.forEach(day => {
        day.classList.remove('clicked');
    });
});

// /********* change rate *********/
// // when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfBtn.addEventListener('click', () => {
    costPerDay = 20;
    halfBtn.classList.add('clicked');
    fullBtn.classList.remove('clicked');
    updateCalculatedCost();
});

// // when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullBtn.addEventListener('click', () => {
    costPerDay = 35;
    fullBtn.classList.add('clicked');
    halfBtn.classList.remove('clicked');
    updateCalculatedCost();
});

// /********* calculate *********/
// // when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value