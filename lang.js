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
