let userName = prompt('kak tebya zovut') .toLowerCase() .trim()
let userAge = prompt('skolko tebe let?')


if(userName[0] === 'b' && userAge >= 18 && Math.floor(userName.length / 2) == userName.length / 2) { 
    alert('Заходи')
    console.log('Заходи');
} else {
    alert('Уходи')
    console.log('Уходи');
}


let int = prompt('any numbers')

if(Math.floor(int / 2) == int / 2) {
    alert('Четное')
    console.log('Четное');
} else{
    alert('Нечетное')
    console.log('Нечетное');
}




