// Elements
const cardsContainer = document.querySelector('main');
const radioButtons = document.getElementsByClassName('product_list_item');
const extraDetailsTables = document.getElementsByClassName('extra_details');
const totalSpan = document.querySelector('.shipping_details span');

// Function to hide all extra details tables
function hideAllExtraDetails() {
  Array.from(extraDetailsTables).forEach((table) =>
    table.classList.remove('show-extra-details')
  );
}

// Function to show the extra details table at a specific index
function showExtraDetails(index) {
  extraDetailsTables[index].classList.add('show-extra-details');
}

// Function to update the background color of the selected card
function updateCardBackground() {
  Array.from(cardsContainer.getElementsByTagName('article')).forEach(
    (card, index) => {
      card.classList.toggle('checked', radioButtons[index].checked);
    }
  );
}

// Function to handle radio button change event
function handleRadioButtonChange(event) {
  hideAllExtraDetails();
  const index = Array.from(radioButtons).indexOf(event.target);
  showExtraDetails(index);
  updateCardBackground();
}

// Add event listener to each radio button to handle changes
Array.from(radioButtons).forEach((radioButton) => {
  radioButton.addEventListener('change', handleRadioButtonChange);
});

// Function to handle card click event
function handleCardClick(event) {
  const card = event.target.closest('.card');
  if (!card) return;

  // Find the corresponding radio button and trigger its click event
  const radioButton = card.querySelector('.product_list_item');
  if (radioButton) {
    radioButton.checked = true;
    radioButton.dispatchEvent(new Event('change'));
  }
}

// Add event listener to each card to handle click
const cards = document.getElementsByClassName('card');
Array.from(cards).forEach((card) => {
  card.addEventListener('click', handleCardClick);
});

// Initialize the state on page load
const checkedIndex = Array.from(radioButtons).findIndex(
  (radioButton) => radioButton.checked
);
if (checkedIndex !== -1) {
  showExtraDetails(checkedIndex);
  updateCardBackground();
}
