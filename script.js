const pandemicStartMap = "XX0X10010X000X010X0";
const pandemic = pandemicStartMap.split('')
let divStart = document.querySelectorAll('.block1')
let divEnd = document.querySelectorAll('.block2')

pandemic.forEach((el, i) => {
    if (el === '0') {
        divStart[i].style.background = 'rgb(163, 255, 163)'
        divEnd[i].style.background = 'rgb(163, 255, 163)'
    }
    if (el === '1') {
        divStart[i].style.background = 'rgb(253, 148, 148)'
        divEnd[i].style.background = 'rgb(253, 148, 148)'
        divEnd[i].classList.add('infected')
    }
    if (el === 'X') {
        divStart[i].style.background = 'rgb(166, 166, 255)'
        divEnd[i].style.background = 'rgb(166, 166, 255)'
        divEnd[i].classList.add('ocean')
    }
});

let index = 0

pandemic.forEach((el, i) => {
    if (el === '1') {
        for(let j = index; j < pandemic.length; j++) {
            if(pandemic[j] !== 'X') {
                divEnd[j].style.background = 'rgb(253, 148, 148)'
                divEnd[j].classList.add('infected')
            } else {
                break
            }
        }
    }
    if (el === 'X') {
        index = i + 1
    }
});
let k = document.getElementsByClassName('infected').length
let z = document.getElementsByClassName('ocean').length
let h = 19 - (k + z)
let s = h + k
let total = document.querySelector('.total')
let infected = document.querySelector('.infected-p')
let percentage = document.querySelector('.percentage')
let totalZone = document.getElementsByClassName('infected').length + document.getElementsByClassName('ocean').length
let totalInfected = document.getElementsByClassName('infected').length
let totalPercentage = Math.round(k / s * 100)
total.innerHTML = totalZone
infected.innerHTML = totalInfected
percentage.innerHTML = totalPercentage + '%'