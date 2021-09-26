/*FUNCION EJECUTADA AL HACER CLICK*/

const makeRandomThings = () => {
    const groupsNumber = document.getElementById("groupsQuantity");
    const practiceNumber = document.getElementById("practiceQuantity");
    const preinformNumber = document.getElementById("preinformQuantity");

    const groups = parseInt(groupsNumber.value);
    const practice = parseInt(practiceNumber.value);
    const preinform = parseInt(preinformNumber.value);

    const answer = document.getElementById("answer1");
    
    /*Aqui verificamos a cuantos ejercicios se debe
    repartir a cada grupo de perinform y de practica*/
    let arrayOfPractice = generateArray(practice);
    let arrayOfPreinform = generateArray(preinform);

    let arrayRandomPractice = shuffleArray(arrayOfPractice);
    let arrayRandomPreinform = shuffleArray(arrayOfPreinform);

    let arrayForGroups1 = theAsigner(practice, groups, arrayRandomPractice);
    let arrayForGroups2 = theAsigner(preinform, groups, arrayRandomPreinform);

    answer.innerHTML = "";

    for (let i = 0; i < groups; i++){
        j = i + 1;
        
        answer.innerHTML += "Group number " + j + " Assignment 1: " + arrayForGroups1[i] + 
        " Assignment 2: " + arrayForGroups2[i] + "<br />" + "<br />";
        console.log("Para el grupo"  + j + " Practica: " + arrayForGroups1[i] + 
        " Preinforme: " + arrayForGroups2[i]);
    }
}

/*Generador de arrays de acuerdo
a la cantidad de grupos, y ejercicios*/
const generateArray = (maximumQuantity) => {
    let a = [];
    for (let i = 1; i <= maximumQuantity; i++) {
        a.push(i);
    }
    return a;
}

/*Codigo del internet, no me juzgues ._.*/
const shuffleArray = (array) => {
    let i = array.length;
    let j = 0;
    let temp;

    /*recuerda que  i-- es i = i - 1, por lo tanto siginifaca que mientras
    i - 1 es menor a cero siga loopeando*/
    while (i--) {
        /*Recuerda que Math.floor devuelve el inmediato inferior de un
        numero: 
        45.95 -> 45
        -45.95 -> -46
        */
        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const theAsigner = (exercises, groups, array) => {
        let arrayFinal = [];
        if ((exercises / groups) % 2 == 0){
            const quantityForEachGroup = (exercises / groups);
            for ( let i = 0; i < array.length/quantityForEachGroup; i++) {
                let j = i * quantityForEachGroup
                let nuevoArray = array.slice(j, i*quantityForEachGroup + quantityForEachGroup);
                arrayFinal.push(nuevoArray);
            }
        } else {
            const quantityForEachGroup = (exercises / groups);
            for ( let i = 0; i < array.length/quantityForEachGroup; i++) {
                let j = i * quantityForEachGroup
                let nuevoArray = array.slice(j, i*quantityForEachGroup + quantityForEachGroup);
                arrayFinal.push(nuevoArray);
            }
        }
        return arrayFinal;
}

