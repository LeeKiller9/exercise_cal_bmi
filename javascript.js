let weight = null
let height = null
let bmi = null
let notice = null

function cal_bmi() {
    weight = document.getElementById('weight').value
    height = document.getElementById('height').value
    bmi = weight / (height * height)
    if (bmi < 18) {
        notice = 'Underweight';
    } else if (bmi < 25.0) {
        notice = 'Normal';
    } else if (bmi < 30.0) {
        notice = 'Overweight';
    } else
        notice = 'Obese';
    document.getElementById('result').innerHTML = bmi
    document.getElementById('notice').innerHTML = notice
}