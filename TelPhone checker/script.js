const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkValidNumber = input => {
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }

const countryCode = '^(254\\s?)?';
const phoneNumber = /^(07|2547)[0-9]{8}$/ || /^(01|2541)[0-9]{8}$/;

const pText = document.createElement("p");
pText.className = 'results-text';
phoneRegex.test(input)
    ? (pText.style.color = '#00471b')
    : (pText.style.color = '#4d3800');
    pText.appendChild(
        document.createTextNode(
          `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} Kenyan number: ${input}`
        )
      );
      resultsDiv.appendChild(pTag);
    };
    
  checkBtn.addEventListener('click', () => {
    checkValidNumber(userInput.value);
    userInput.value = '';
  });

  userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkValidNumber(userInput.value);
      userInput.value = '';
    }
  });

  clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
  });
  