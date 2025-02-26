

// // PARTE 01 da aula Criar uma função
// const upperName = (name) => name.toUpperCase()

// console.log(upperName('Gustavo Lima'));

// //desestruturação

// function handleMouse( { clientX, clientY } ) {
//     //const x = event.clientX;
//    //const y = event.clientY;

//    //const {clientX, clientY} = event;
//     console.log(clientX, clientY);
// }


// //arrays

// const frutas = ['banana', 'uva'];

// const [fruta1, fruta2] = frutas;


// console.log(fruta1, fruta2);

// document.addEventListener('click', handleMouse);


// const useQuadrado = [ 4, function (lado) {
//     return 4 * lado
// }]

// const [lado, perimetro] = useQuadrado;

// console.log(lado);
// console.log(perimetro(50));






function showlist(empresa, clientes) {
    clientes.forEach((cliente) => {
        console.log(cliente, empresa);
    })
}

showlist('Google', ['Gustavo', 'galileu'])