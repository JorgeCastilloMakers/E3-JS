// Utilizando el querido array de objetos "Pizzas🍕", realizar el siguiente desafío: 

// 👉 A cada Pizza, agregarle una imagen. 
// 👉 Guardar el array en el local storage. 
// 👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
// 👉 Debajo del card tiene que haber un input y un botón. 

// Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.

// 🆙 En Eduflow, colocar el repositorio de Github, en el cual debe figurar el vercel deployado.


const emptyError = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No debes dejar el campo vacío, prueba con un número',
      })
}
const errorId = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No encontramos una pizza que coincida con ese numero, prueba otro.',
      })
}

const renderPizza = (pizza) => {
    cardContainer.innerHTML = `
        <div class="image-container"><img src="${pizza.picture}"></div>
        <h2>${pizza.nombre}</h2>
        <h2>$ ${pizza.precio}</h2>
        <h3>Ingredientes:</h3>
        <div class="ingredientes">${pizza.ingredientes.join(" - ")}</div>
        
        `
}

const buscar = (numero) => {
    const menuFiltrado = menu.find( e => e.id == numero);
    
    if (!menuFiltrado){
        errorId();
        return;
    }else{
        renderPizza(menuFiltrado);
    }

};

const init = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!inputNumber.value){
            emptyError()
            return;
        }else{
            buscar(inputNumber.value);
        }
        
    })
};

init()


