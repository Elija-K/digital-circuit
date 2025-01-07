function power(doit) {
    if (doit == "add") {
        console.log('add power');
    } else if (doit == "reset") {
        console.log('reset power');
    } else {
        console.error('error in function power -> Unknown command');
    }
}

function circuit(doit) {
    if (doit == "add") {
        console.log('add circuit');
    } else if (doit == "reset") {
        console.log('reset circuit');
    } else {
        console.error('error in function circuit -> Unknown command');
    }
}

function led(doit) {
    if (doit == "add") {
        console.log('add led');
    } else if (doit == "reset") {
        console.log('reset led');
    } else {
        console.error('error in function led -> Unknown command');
    }
}