let kaverit = [];

function addFriend() {
    console.log('add friend')
    if (document.querySelector('#main input[type="search"]').value <= 0) {
        alert("Nimi ei saa olla tyhjä")

        // Estää sivua latautumasta uudelleen
        event.preventDefault()
    } else {
        // Tallentaa hakukenttään kirjoitetun nimen
        let kaverinNimi = document.querySelector('#main input[type="search"]').value;

        // Estää sivua latautumasta uudelleen
        event.preventDefault()
        
        // Viedään nimi listaan
        let uusiElementti = document.createElement('li')
        let uusiElementtiTeksti = document.createTextNode(kaverinNimi)
        uusiElementti.appendChild(uusiElementtiTeksti)

        // Tallennetaan nimi kaverit-muuttujaan
        kaverit.push(kaverinNimi);

        // Laittaa listaa näkyviin
        document.querySelector('#friendList').appendChild(uusiElementti)
    }
}

function deleteFriend() {
    // Estää sivua latautumasta uudelleen
    event.preventDefault()
    console.log('delete friend')
    // Tallentaa hakukenttään kirjoitetun nimen
    let kaverinNimi = document.querySelector('#main input[type="search"]').value;
    let i = 0;
    while (kaverit.length > i) {
        console.log('Finding it')
        if (kaverinNimi == kaverit[i]) {
            kaverit.splice(i, 1)
            document.querySelector('#friendList').lastElementChild.remove();
        }
        i++;
    }

    printFriends();
}

function arrangeFriends() {
    if (kaverit.length <= 0) {
        alert("Sinulla ei ole kavereita")

        // Estää sivua latautumasta uudelleen
        event.preventDefault()
    } else {
        console.log('arrange friends')
        // Estää sivua latautumasta uudelleen
        event.preventDefault()

        // Järjestää kaverit-muuttujan nimet aakkosjärjestykseen
        kaverit.sort()

        printFriends();
    }
}

function printFriends() {
    // Tyhjentää käyttäjälle näkyvän listan
    let i = 0;
    while (kaverit.length > i) {
        document.querySelector('#friendList').lastElementChild.remove();
        console.log('making space');
        i++;
    }

    // Tulostaa järjestetyn kaverit-muuttujan nimet
    i = 0;
    while (kaverit.length > i) {
        let uusiElementti = document.createElement('li')
        let uusiElementtiTeksti = document.createTextNode(kaverit[i])
        uusiElementti.appendChild(uusiElementtiTeksti)

        document.querySelector('#friendList').appendChild(uusiElementti)
        console.log('printing sorted list');
        i++;
    }
}
