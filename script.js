function calculateAge() {
  const dobValue = document.getElementById('dob').value;
  if (!dobValue) {
    document.getElementById('result').innerText = "Please select your birth date.";
    return;
  }

  const dob = new Date(dobValue);
  const today = new Date();

  // Normalize time for accurate comparison
  dob.setHours(0,0,0,0);
  today.setHours(0,0,0,0);

  if (dob > today) {
    document.getElementById('result').innerText = "Birth date cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonthDays;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const resultEl = document.getElementById('result');
  resultEl.innerHTML =
    `You are <span class="years">${years}</span> years, 
     <span class="months">${months}</span> months, and 
     <span class="days">${days}</span> days old.`;

  // Add next birthday countdown
  const nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  if (nextBirthday < today) nextBirthday.setFullYear(today.getFullYear() + 1);
  const diff = nextBirthday - today;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  resultEl.innerHTML +=
    `<br><span class="countdown">🎉 Your next birthday is in ${daysLeft} days!</span>`;

  // Trigger fadeIn animation
  resultEl.style.animation = 'none';
  resultEl.offsetHeight; // reflow
  resultEl.style.animation = 'fadeIn 0.8s ease-in-out';
}

function resetCalculator() {
  document.getElementById('dob').value = "";
  const resultEl = document.getElementById('result');
  resultEl.innerText = "Your age will appear here";
  resultEl.style.animation = 'none';
}