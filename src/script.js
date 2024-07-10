document.getElementById('age-form').addEventListener('submit', function(event) {
  event.preventDefault();  

  // result elements
  const dayResult = document.getElementById('day-result');
  const monthResult = document.getElementById('month-result');
  const yearResult = document.getElementById('year-result');

  // error message elements
  const dayMessage = document.getElementById('dayMessage');
  const monthMessage = document.getElementById('monthMessage');
  const yearMessage = document.getElementById('yearMessage');
    
  // input values
  const day = parseInt(document.getElementById('day').value, 10);
  const month = parseInt(document.getElementById('month').value, 10);
  const year = parseInt(document.getElementById('year').value, 10);

  // input elements
  const dayInput = document.getElementById('day');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');

  // label elements
  const dayLabel = document.getElementById('dayLabel');
  const monthLabel = document.getElementById('monthLabel');
  const yearLabel = document.getElementById('yearLabel');

  // date objects
  const dateOfBirth = new Date(year, month - 1, day);
  let dateOfToday = new Date();

  // Is valid or not
  let valid = true;

  // validate day
  if (!day || day < 1 || day > 31 || dateOfBirth.getDate() !== day) {
    dayMessage.textContent = day ? "Must be a valid day" : "This field is required";
    dayInput.classList.add('border-red-600');
    dayLabel.classList.add('text-red-600');
    dayLabel.classList.remove('text-gray-500');
    valid = false;
  } else {
      dayMessage.textContent = "";
      dayInput.classList.remove('border-red-600');
      dayLabel.classList.remove('text-red-600');
      dayLabel.classList.add('text-gray-500');
  }

  // validate month
  if (!month || month < 1 || month > 12) {
    monthMessage.textContent = month ? "Must be a valid month" : "This field is required";
    monthInput.classList.add('border-red-600');
    monthLabel.classList.add('text-red-600');
    monthLabel.classList.remove('text-gray-500');
    valid = false;
  } else {
      monthMessage.textContent = "";
      monthInput.classList.remove('border-red-600');
      monthLabel.classList.remove('text-red-600');
      monthLabel.classList.add('text-gray-500');
  }

  // validate year
  if (!year || year >= 2025) {
    yearMessage.textContent = year ? "Must be in the past" : "This field is required";
    yearInput.classList.add('border-red-600');
    yearLabel.classList.add('text-red-600');
    yearLabel.classList.remove('text-gray-500');
    valid = false;
  } else {
      yearMessage.textContent = "";
      yearInput.classList.remove('border-red-600');
      yearLabel.classList.remove('text-red-600');
      yearLabel.classList.add('text-gray-500');
  }

  // reset and return
  if (!valid) {
    yearResult.textContent = "- - ";
    monthResult.textContent = "- - ";
    dayResult.textContent = "- - ";
    return;
  }

  // difference
  let yearDifference = dateOfToday.getFullYear() - dateOfBirth.getFullYear();
  let monthDifference = dateOfToday.getMonth() - dateOfBirth.getMonth();
  let dayDifference = dateOfToday.getDate() - dateOfBirth.getDate();
   
  // in case negative day difference
  if (dayDifference < 0) {
    monthDifference--; 
    let previousMonth = dateOfToday.getMonth() - 1;
    if (previousMonth < 0) {
        previousMonth = 11;
    }
    let daysInPreviousMonth = new Date(dateOfToday.getFullYear(), previousMonth + 1, 0).getDate();
      dayDifference += daysInPreviousMonth;
  }

  // in case negative month difference
  if (monthDifference < 0) {
      yearDifference--;
      monthDifference += 12;
  }
  
  // display results
  yearResult.textContent = yearDifference + " ";
  monthResult.textContent = monthDifference + " ";
  dayResult.textContent = dayDifference + " ";
});
