let btnRate = document.getElementById('btnRate');
let btnFeedback = document.getElementById('btnFeedback');
let output = document.getElementById('output');
let feedbackContainer = document.querySelector('.feedback');
let feedbackMessage = document.getElementById('feedbackMessage');
let feedbackTextarea = feedbackContainer.querySelector('textarea');

document.querySelectorAll('.rating-container input[type="checkbox"]').forEach((checkbox, index, checkboxes) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      if (index < checkboxes.length - 1) {
        checkboxes[index + 1].disabled = false;
      }
    } else {
      for (let i = index + 1; i < checkboxes.length; i++) {
        checkboxes[i].disabled = true;
        checkboxes[i].checked = false;
      }
    }
  });
});

btnRate.addEventListener('click', () => {
  let rates = document.getElementsByName('rate');
  let selectedCount = 0;
  rates.forEach((rate) => {
    if (rate.checked) {
      selectedCount++;
    }
  });

  let ratingText = '';
  let color = '#000';
  switch (selectedCount) {
    case 1:
      ratingText = 'Status : VERY POOR☹️';
      color = '#ff0000';
      break;
    case 2:
      ratingText = 'Status : POOR😐';
      color = '#ff6666';
      break;
    case 3:
      ratingText = 'Status : OK🙂';
      color = '#ff9999';
      break;
    case 4:
      ratingText = 'Status : GOOD😇';
      color = '#00ff00';
      break;
    case 5:
      ratingText = 'Status : VERY GOOD🤩';
      color = '#008000';
      break;
    default:
      ratingText = 'No rating selected';
  }

  output.innerText = ratingText;
  output.style.color = color;

  rates.forEach((rate) => {
    rate.disabled = true;
  });

  btnFeedback.style.display = 'block'; 
  feedbackContainer.style.display = 'block'; 
});

btnFeedback.addEventListener('click', () => {
  const feedback = feedbackTextarea.value.trim();
  if (feedback) {
    feedbackMessage.innerText = 'Thanks for giving your feedback🥳';
    feedbackMessage.style.color = 'green';
  } else {
    feedbackMessage.innerText = 'Please give your feedback🙁';
    feedbackMessage.style.color = 'red';
  }
});