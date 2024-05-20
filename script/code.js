let weight = document.querySelector('#weight')
let height = document.querySelector('#height')
let calculateBtn = document.querySelector('#calculate')
let screen = document.querySelector('#screen')
let bmi = weight / ((height / 100) * (height / 100))
// let result = null


calculateBtn.addEventListener('click', () => {

    switch (true) {
        case marks == (bmi < 18.5):
            console.log('Underweight');
            break
        case marks >= (bmi >= 18.5 && bmi < 24.9):
            console.log('Normal weight');
            break
        case marks >= (bmi >= 25 && bmi < 29.9):
            console.log('Overweight');
            break
        case marks >= (bmi >= 30 && bmi < 34.9):
            console.log('Obesity Class 1');
            break
        case marks >= (bmi >= 35 && bmi < 39.9):
            console.log('Obesity Class 2');
            break
        case marks <= 40 :
            console.log('Obesity Class 3');
            break
    }
})