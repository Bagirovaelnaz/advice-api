const btn = document.getElementById("btn");
const advice = document.getElementById("advice");
const adviceId = document.getElementById("advice-id");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw "API error verir!";
      }
    })
    .then((data) => {
      advice.innerHTML = data.slip.advice;
      adviceId.innerHTML = data.slip.id;
    })
    .catch((error) => {
      console.log(error);
    });
});
