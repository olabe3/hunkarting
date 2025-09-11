// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Get references to HTML elements
  const heading = document.getElementById('main-heading');
  const enBtn = document.getElementById('en-btn');
  const huBtn = document.getElementById('hu-btn');

  // Define the messages for each language
  const messages = {
    en: "Welcome to the website!",
    hu: "Üdv a weboldalon!"
  };

  // Event listener for English button
  enBtn.addEventListener('click', () => {
    heading.textContent = messages.en;
  });

  // Event listener for Hungarian button
  huBtn.addEventListener('click', () => {
    heading.textContent = messages.hu;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const heading = document.getElementById('main-heading');
  const langFlag = document.getElementById('lang-flag');

  // Messages
  const messages = {
    en: "Welcome to the website!",
    hu: "Üdv a weboldalon!"
  };

  // Track current language
  let currentLang = 'en';

  // Initial flag: if currentLang is 'en', show Hungarian flag to switch
  langFlag.src = 'pictures/hu.png';

  // Click event for flag
  langFlag.addEventListener('click', () => {
    if(currentLang === 'en') {
      heading.textContent = messages.hu;
      currentLang = 'hu';
      langFlag.src = 'pictures/uk.png'; // now show English flag
    } else {
      heading.textContent = messages.en;
      currentLang = 'en';
      langFlag.src = 'pictures/hu.png'; // show Hungarian flag
    }
  });
});
