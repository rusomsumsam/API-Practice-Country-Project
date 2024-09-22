'use strict'
let catchDiv = document.getElementById('main');
let apiLink = 'https://restcountries.com/v3.1/all';
function apiData() {
    fetch(apiLink)
        .then(res => res.json())
    .then(get => showData(get))
}
apiData();
function showData(recieveData) {
    recieveData.map(data => {
        console.log(data);
        let newDiv = document.createElement('div');
        catchDiv.appendChild(newDiv);
        newDiv.setAttribute('id', 'item');
        let createImg = document.createElement('img');
        newDiv.appendChild(createImg);
        createImg.setAttribute('src', `${data.flags.png}`);
        createImg.setAttribute('id', 'imgCus');
        let createHeading = document.createElement('p');
        newDiv.appendChild(createHeading);
        createHeading.setAttribute('id', 'headingCus');
        createHeading.innerHTML = `${data.name.common}`;
        let createInformationDiv = document.createElement('div');
        newDiv.appendChild(createInformationDiv);
        let createInformationP = document.createElement('p');
        createInformationDiv.appendChild(createInformationP);
        createInformationP.innerHTML += `Official Name : ${data.name.official}<br>`;
        createInformationP.innerHTML += `Capital : ${data.capital}<br>`;
        createInformationP.innerHTML += `Region : ${data.region}<br>`;
        createInformationP.innerHTML += `Sub-Region : ${data.region}<br>`;
        createInformationP.innerHTML += `Capital : ${data.capital}<br>`;
        createInformationP.innerHTML += `Area : ${data.area}<br>`;
        let firstValue = Object.keys(data.languages)[0];
        let secondValue = data.languages[firstValue];
        createInformationP.innerHTML += `Languages : ${secondValue}`;
    })
}



