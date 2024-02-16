const currentYear = new Date().getFullYear();

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

// Check if holiday with ID 9 exists
if (!holidays[futureId]) {
    console.log(`ID ${futureId} not created yet`);
} else {
    console.log(holidays[futureId].name);
}

// Copy and update the Christmas holiday object
let copied = { ...holidays[christmas] }; // Changed to use spread operator for object copying
copied.name = 'X-mas Day'; // Changed holiday name from 'Christmas Day' to 'X-mas Day'
copied.date.setHours(0, 0, 0, 0); // Set time to midnight

// Check if the new date is earlier than the current date
const isEarlier = copied.date < holidays[christmas].date;
console.log('New date is earlier:', isEarlier);

// Log changes made to the holiday object
console.log('ID change:', copied.id !== holidays[christmas].id || copied.id);
console.log('Name change:', copied.name !== holidays[christmas].name || copied.name);
console.log('Date change:', copied.date.getTime() !== holidays[christmas].date.getTime() || copied.date);

// Calculate and log the first holiday, last holiday, and a randomly selected holiday date
const holidayDates = Object.values(holidays).map(holiday => new Date(holiday.date));
const sortedDates = holidayDates.sort((a, b) => a - b);
const firstHolidayDate = sortedDates[0];
const lastHolidayDate = sortedDates[sortedDates.length - 1];

const formatDate = date => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

console.log('First holiday of the year:', formatDate(firstHolidayDate));
console.log('Last holiday of the year:', formatDate(lastHolidayDate));

const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHolidayDate = new Date(holidays[randomIndex].date);
console.log('Randomly selected holiday date:', formatDate(randomHolidayDate));
//TEST