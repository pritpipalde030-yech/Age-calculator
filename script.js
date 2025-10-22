function calculateAge() {
  const dob = document.getElementById('dob').value;
  const result = document.getElementById('result');

  if (!dob) {
    result.innerHTML = "⚠️ Please select your date of birth.";
    result.style.color = "#ff8080";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.style.color = "#00FFAE";
  result.innerHTML = `
    🎂 You are <span style="color:#FFD700">${years}</span> years, 
    <span style="color:#FFD700">${months}</span> months, and 
    <span style="color:#FFD700">${days}</span> days old.
  `;
}
