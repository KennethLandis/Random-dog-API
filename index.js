'use strict'

function getDogImages(numberOfDogs = 3) {
    let getDogs = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`;
    fetch(getDogs)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        //.catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
    let dogSRC = responseJson.message
    $('.results-img').remove()
    dogSRC.forEach(src => {
        //console.log(src);
        $('.results').append(`<img src="${src}" class="results-img" alt="test">`);
    });
    $('.results').removeClass('hidden');
};

function handleSubmitClicked() {
    $('form').submit(e => {
        e.preventDefault();
        let dogCount = $('#dogs').val();
        //console.log(numberofDogs);
        getDogImages(dogCount);
    });
};

$(function () {
    console.log('App Loaded!')
    handleSubmitClicked();
});