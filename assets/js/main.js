let response = fetch('https://api.adviceslip.com/advice');
  
// function for changing the quotes and id on button click
function myFunction(){ 
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => document.getElementById('quote').innerHTML = '"'+ data.slip.advice + '"');             

    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => document.getElementById('advice').innerHTML = "advice" + " #" + data.slip.id);
}

  // quote and id when the page has loaded
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => document.getElementById('quote').innerHTML = '"'+ data.slip.advice + '"');             

    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => document.getElementById('advice').innerHTML = "advice" + " #" + data.slip.id);
