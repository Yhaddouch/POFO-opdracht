//function opdracht 1
let temperatuur =prompt (`hoe warm is het`);

if (temperatuur <10) {
    alert(`Het is koud.`)
}
else if (temperatuur <16) {
    document.body.innerHTML += `<p>Het is niet warm. U kan beter een jas aan doen.</p>`
}

else if (temperatuur <= 24) {
    console.log `Het is niet koud of warm`
}

else if (temperatuur > 24 && temperatuur < 30) {
    document.body.innerHTML += `<p>Jas is niet nodig</p>`
}

else if (temperatuur >= 30) {
    alert(`Ik zou me insmeren als ik u was`)
}

//function opdracht 2

let cijfer = prompt (`Wat is uw cijfer?`)

if (cijfer <5.5) {
    document.body.innerHTML += `<p>Het is een onvoldoende.`
}
else if (cijfer >= 5.5) {
    document.body.innerHTML += `<p>Het is een voldoende.`
}

//function opdracht 3

function numbers() {

 let randomNumber = prompt('Kies een getal');  let even = false;

    if (randomNumber % 2 == 0) {
        even = true;
    }

    if (even == true) {
        document.body.innerHTML += 'Dit getal is even';
    }

    else {
        document.body.innerHTML += 'Dit getal is oneven';
    }

}

numbers()