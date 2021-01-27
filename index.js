"use strict";

function getDogImage() {
  const inputValue = $("#quantity").val();
  for (let i = 1; i <= inputValue; i++) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((responseJson) => displayResults(responseJson))
      .catch((error) => alert("Something went wrong. Try again later."));
  }
}

function displayResults(responseJson) {
  console.log(responseJson);
  //display the results section
  $(".results").removeClass("hidden");

  //replace the existing image with the new one
  $(".results").append(
    `<img src="${responseJson.message}" class="results-img">`
  );
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    // remove the current images
    $(".results-img").detach();
    getDogImage();
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
