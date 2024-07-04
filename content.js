function deleteAllAudioMessages() {
  // Find all audio elements
  const audioElements = document.querySelectorAll("audio-element.audio");

  // Select all audio messages
  audioElements.forEach((element) => {
    const checkbox = element.querySelector('input[type="checkbox"]');
    if (checkbox && !checkbox.checked) {
      checkbox.click();
    }
  });

  function clickDeleteButton_icon() {
    const deleteButton = document.querySelector(".search-super-selection-delete");
    if (deleteButton) {
        deleteButton.click();
    }

    setTimeout(function() {
        var popup = document.querySelector(".popup.popup-peer.popup-delete-chat.active");
        if (popup) {
            var checkbox = popup.querySelector(".checkbox-field-input");
            if (checkbox) {
                checkbox.checked = true;
                
                // Trigger change event
                var event = new Event('change', { bubbles: true });
                checkbox.dispatchEvent(event);

                setTimeout(clickDeleteButton, 3);
            } else {
                console.error("Checkbox not found within the popup");
            }
        } else {
            console.error("Popup not found");
        }
    }, 1); // Adjust timeout if necessary
}

function clickDeleteButton() {
    var final_deleteButton = document.querySelector(".popup-button.btn.danger.rp");
    if (final_deleteButton) {
        final_deleteButton.click();
        console.log("Button found and clicked");
    } else {
        console.error("Delete button not found");
    }
}
// Run the function 1 second later
setTimeout(clickDeleteButton_icon, 2);
}

// Add a button to the Telegram Web interface to trigger the function
function addDeleteButton() {
  const button = document.createElement("button");
  button.textContent = "Delete All Audio";
  button.style.position = "fixed";
  button.style.backgroundColor = "#2872fb";
  button.style.top = "40px";
  button.style.padding = "3px";
  button.style.borderRadius = "5px";
  button.style.right = "10px";
  button.style.zIndex = "9999";
  button.onclick = deleteAllAudioMessages;
  document.body.appendChild(button);
}

// Run the script when the page loads
window.onload = addDeleteButton;
