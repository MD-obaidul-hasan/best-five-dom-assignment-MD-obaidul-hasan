const selectPlayerSection = document.getElementById('select-player');

let players = [];

function selectPlayer(data) {
    if (players.length < 5) {
        players.push(data);
        const h1 = document.createElement('h1');
        h1.innerText = data.text;
        selectPlayerSection.appendChild(h1);
        document.getElementById(data.id).setAttribute("disabled","disabled");
    }
    // else if (players.length < 5) {
    //     console.log(players);
    //     for (let i = 0; i < players.length; i++) {
    //         if (players[i].id !== data.id) {
    //             players.push(data);
    //             const h1 = document.createElement('h1');
    //             h1.innerText = data.text;
    //             selectPlayerSection.appendChild(h1);
    //             return;
    //         }
    //         else {
    //             alert('Already Selected this player');
    //             return
    //         }
    //     };
    // }
    else {
        alert('Already Selected 5 player');
    }
};



document.getElementById('player1').addEventListener('click', function () {
    const mashrafe = { id: 'player1', text: 'mashrafe bin mortaza' };
    selectPlayer(mashrafe);
});

document.getElementById('player2').addEventListener('click', function () {
    const sakib = { id: 'player2', text: 'sakib al hasan' };
    selectPlayer(sakib);
});

document.getElementById('player3').addEventListener('click', function () {
    const tamim = { id: 'player3', text: ' tamim iqbal khan' };
    selectPlayer(tamim);
});

document.getElementById('player4').addEventListener('click', function () {
    const musfiqur = { id: 'player4', text: 'mahamudullah riyad' };
    selectPlayer(musfiqur);
});

document.getElementById('player5').addEventListener('click', function () {
    const musfiqur = { id: 'player5', text: 'musfiqur rahim' };
    selectPlayer(musfiqur);
});

document.getElementById('player6').addEventListener('click', function () {
    const mustafizur = { id: 'player6', text: 'mustafizur rahaman' };
    selectPlayer(mustafizur);
});


// cal 
document.getElementById('ppbtn').addEventListener('click', function () {
    const inputValue = document.getElementById('ppin').value;
    if (inputValue === '') {
        alert('enter a number')
    }
    else if (parseFloat(inputValue) < 0) {
        alert('enter a positive number')
    }
    else {
        const multi = players.length * parseFloat(inputValue);
        document.getElementById('ppout').innerText = multi
    }


});


// total 

document.getElementById('tcbtn').addEventListener('click', function () {
    const inputValuem = document.getElementById('min').value;
    const inputValuec = document.getElementById('cin').value;

    const ppvalue = document.getElementById('ppout').innerText;


    if (inputValuem === '') {
        alert('enter a number for manager')
    }
    else if (parseFloat(inputValuem) < 0) {
        alert('enter a positive number for manager')
    }
    else if (inputValuec === '') {
        alert('enter a number for coach')
    }
    else if (parseFloat(inputValuec) < 0) {
        alert('enter a positive number for coach')
    }
    else {
        const totalcal = parseFloat(inputValuem) + parseFloat(inputValuec) + parseFloat(ppvalue);

        document.getElementById('tcout').innerText = totalcal;

    }

});

// document.getElementById('tcbtn').addEventListener('click', function () {
//     const inputValuem = document.getElementById('min').value;
//     const inputValuec = document.getElementById('cin').value;
//     if (inputValuem && inputValuec === '') {
//         alert('enter a number')
//     }
//     else if (parseFloat(inputValuem && inputValuec) < 0) {
//         alert('enter a positive number')
//     }
//     else {
//         const totalcal = parseFloat(inputValuem) + parseFloat(inputValuec);
//         document.getElementById('tcout').innerText = totalcal
//     }

//     const allcal = totalcal + multi;
//     document.getElementById('allout').innerText = allcal

// });