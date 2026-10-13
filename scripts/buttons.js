/**
 * Enables all buttons except the reset button and removes the disabledButton class from them.
 * Also removes the reset and disabledButton classes from the stopwatch element.
 * 
 * @returns {void}
 */
function enableButtons() {
  var buttons = document.querySelectorAll("button");
  var stopwatch = document.getElementById("stopwatch");
  
  stopwatch.classList.remove("reset", "disabledButton");
  
  buttons.forEach(button => {
    if (button.id !== "resetButton") {
      button.disabled = false;
      button.classList.remove("disabledButton");
      button.classList.add("sort");
    }
  });
}

/**
 * Disables all buttons except the reset button and adds the disabledButton class to them.
 * Also closes the algorithm menu if it is open.
 * Also adds the reset and disabledButton classes to the stopwatch element.
 * 
 * @returns {void}
 */
function disableButtons() {
  var buttons = document.querySelectorAll("button");
  var stopwatch = document.getElementById("stopwatch");
  
  stopwatch.classList.add("reset", "disabledButton");
  closeAlgorithmMenu();
  
  buttons.forEach(button => {
    if (button.id !== "resetButton") {
      button.disabled = true;
      button.classList.add("disabledButton");
      button.classList.remove("sort");
    }
  });
}

var selectedAlgorithm = "bubble";
var algorithmDropdown = document.getElementById("algorithmDropdown");
var algorithmButton = document.getElementById("algorithmButton");
var algorithmMenu = document.getElementById("algorithmMenu");

/**
 * Opens the algorithm menu if it is closed, or closes it if it is open.
 *
 * @returns {void}
 */
function toggleAlgorithmMenu() {
  if (algorithmMenu.hidden) {
    openAlgorithmMenu();
  } else {
    closeAlgorithmMenu();
  }
}

/**
 * Opens the algorithm menu and focuses the selected option.
 *
 * @returns {void}
 */
function openAlgorithmMenu() {
  algorithmMenu.hidden = false;
  algorithmButton.setAttribute("aria-expanded", "true");
  algorithmMenu.querySelector('[aria-selected="true"]').focus();
}

/**
 * Closes the algorithm menu.
 *
 * @returns {void}
 */
function closeAlgorithmMenu() {
  algorithmMenu.hidden = true;
  algorithmButton.setAttribute("aria-expanded", "false");
}

/**
 * Selects an algorithm option, updates the dropdown label and closes the menu.
 *
 * @param {HTMLLIElement} option - The option that was chosen.
 * @returns {void}
 */
function chooseAlgorithm(option) {
  algorithmMenu.querySelectorAll('[role="option"]').forEach(item => {
    item.setAttribute("aria-selected", "false");
  });

  option.setAttribute("aria-selected", "true");
  selectedAlgorithm = option.dataset.algorithm;
  algorithmButton.textContent = option.textContent;
  closeAlgorithmMenu();
  algorithmButton.focus();
}

// Opens the menu with the arrow keys when the dropdown button is focused
algorithmButton.addEventListener("keydown", event => {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    openAlgorithmMenu();
  }
});

// Moves between, chooses and dismisses options with the keyboard
algorithmMenu.addEventListener("keydown", event => {
  var options = Array.from(algorithmMenu.querySelectorAll('[role="option"]'));
  var index = options.indexOf(document.activeElement);

  if (event.key === "ArrowDown") {
    event.preventDefault();
    options[Math.min(index + 1, options.length - 1)].focus();
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    options[Math.max(index - 1, 0)].focus();
  } else if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    chooseAlgorithm(options[index]);
  } else if (event.key === "Escape") {
    closeAlgorithmMenu();
    algorithmButton.focus();
  } else if (event.key === "Tab") {
    closeAlgorithmMenu();
  }
});

// Closes the menu when clicking anywhere outside the dropdown
document.addEventListener("click", event => {
  if (!algorithmDropdown.contains(event.target)) {
    closeAlgorithmMenu();
  }
});

/**
 * Starts the sorting algorithm currently chosen in the algorithm dropdown.
 *
 * @returns {void}
 */
function runSelectedAlgorithm() {
  var algorithms = {
    bubble: startBubble,
    selection: startSelection,
    insertion: startInsertion,
  };

  algorithms[selectedAlgorithm]();
}
