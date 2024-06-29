function deleteAllAudioMessages() {
  // Find all audio elements
  const audioElements = document.querySelectorAll('audio-element.audio');
  
  // Select all audio messages
  audioElements.forEach(element => {
    const checkbox = element.querySelector('input[type="checkbox"]');
    if (checkbox && !checkbox.checked) {
      checkbox.click();
    }
  });
  
  // Trigger the delete action
  // Note: You'll need to identify the actual delete button in the Telegram Web interface
  const deleteButton = document.querySelector('.delete-button-selector');
  if (deleteButton) {
    deleteButton.click();
  }
  
  // Confirm deletion
  // Note: You'll need to identify the actual confirm button in the Telegram Web interface
  const confirmButton = document.querySelector('.confirm-delete-button-selector');
  if (confirmButton) {
    confirmButton.click();
  }
}

// Add a button to the Telegram Web interface to trigger the function
function addDeleteButton() {
  const button = document.createElement('button');
  button.textContent = 'Delete All Audio';
  button.style.position = 'fixed';
  button.style.backgroundColor = '#2872fb';
  button.style.top = '40px';
  button.style.padding = '3px';
  button.style.borderRadius = '5px';
  button.style.right = '10px';
  button.style.zIndex = '9999';
  button.onclick = deleteAllAudioMessages;
  document.body.appendChild(button);
}

// Run the script when the page loads
window.onload = addDeleteButton;