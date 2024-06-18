function createDateTimeDiv(targetSelector) {
  const targetElement = document.querySelector(targetSelector);
  const div = document.createElement('div');

  function updateDateTime() {
    const now = new Date();
    // Custom formatting for date and time
    const formattedDate = now.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = ((hours % 12) || 12) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + (hours < 12 ? 'AM' : 'PM');
    const unixTimestamp = Math.floor(now.getTime() / 1000);
    div.textContent = `${formattedDate}, ${formattedTime} [${unixTimestamp}]`;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
  targetElement.appendChild(div);
}

// Example function to execute
function myCustomFunction() {
  console.log('Overlay toggled and custom function executed.');
}

/*
Example:

window.onload = function() {
    const element = document.querySelector("#myElement");
    if (element) {
        createDateTimeDiv('targetSelector');
    }
};

OnClick Example: 

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        createDateTimeDiv('targetSelector');
    }
});

*/