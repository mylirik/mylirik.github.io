const btnHITUNG = document.querySelector('#hitung');


btnHITUNG.addEventListener('click', function () {
const nilaiTUGAS = document.querySelector('#nilaiTUGAS').value;
const nilaiUTS = document.querySelector('#nilaiUTS').value;
const nilaiUAS = document.querySelector('#nilaiUAS').value;

function nilaiAKHIR () {
    const nilaiANGKA = document.querySelector('#nilaiANGKA');
    const hasil = (nilaiTUGAS * 20 / 100) + (nilaiUTS * 30 / 100) + (nilaiUAS * 50 / 100);
    nilaiANGKA.innerHTML = `<div class ="bo1"> 
    <p class= "nil"> Nilai Total </p>
    <div class= "nil2"> <h1>${hasil}</h1> </div>
    </div>`;

    const nilaiHURUF = document.querySelector('#nilaiHURUF');
    let grade;
    if (hasil > 80 && hasil == 100) {
        grade = 'A';
    } else if (hasil > 75) {
        grade = 'B';
    } else if (hasil > 60) {
        grade = 'C';
    } else if (hasil > 50) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    nilaiHURUF.innerHTML = `<div class ="bo2"> 
    <p class= "nil3"> Grade </p>
    <div class= "nil4"> <h1>${grade}</h1> </div>
    </div>`;
}
    nilaiAKHIR();
});

