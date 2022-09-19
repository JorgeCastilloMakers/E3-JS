//Array de pizzas
let pizzas = [{
    id: 1,
    nombre: "Muzzarella",
    ingredientes:["Queso Muzzarella", "Salsa Tomate", "Oregano", "Aceitunas"],
    precio: 600,
    picture: "/assets/images/muzza.png"
},{
    id: 2,
    nombre: "Jamón y Morrones",
    ingredientes:["Queso Muzzarella", "Salsa Tomate", "Jamón", "Morrones", "Aceitunas"],
    precio: 1200,
    picture: "/assets/images/jamon-morron.png"
},{
    id: 3,
    nombre: "Fugazzeta",
    ingredientes:["Queso Muzzarella", "Cebolla", "Oregano", "Aceitunas"],
    precio: 900,
    picture: "/assets/images/fugazeta.png"
},{
    id: 4,
    nombre: "Jamón y Anana",
    ingredientes:["Queso Muzzarella", "Salsa Tomate", "Jamón", "Anana", "Cerezas", "Oregano"],
    precio: 1200,
    picture: "/assets/images/jamon-anana.png"
},{
    id: 5,
    nombre: "Cochina",
    ingredientes:["Queso Muzzarella", "Salsa Tomate", "Papas Fritas", "Huevo Frito"],
    precio: 800,
    picture: "/assets/images/cochina.png"
},{
    id: 6,
    nombre: "Americana",
    ingredientes:["Queso Cheddar", "Salsa Barbacoa ", "Cebolla Crispy", "Panceta"],
    precio: 1600,
    picture: "/assets/images/americana.png"
}];

//Elementos del DOM
const form = document.getElementById('form');
let cardContainer = document.getElementById('cardContainer');
const inputNumber = document.getElementById('insertNumber');
const btnFilter = document.getElementById('btn-filter');

//Uso del LocalStorage

const pizzasSave = localStorage.setItem('menu', JSON.stringify(pizzas));

const menu = JSON.parse(localStorage.getItem('menu'));



