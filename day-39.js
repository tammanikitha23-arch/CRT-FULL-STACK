// Product Array
let products = [
{id:1,name:"Laptop",category:"Electronics",price:70000},
{id:2,name:"Mouse",category:"Electronics",price:400},
{id:3,name:"Keyboard",category:"Electronics",price:1600},
{id:4,name:"Notebook",category:"Stationery",price:70},
{id:5,name:"Pen",category:"Stationery",price:5},
{id:6,name:"Pencil",category:"Stationery",price:5},
{id:7,name:"Bag",category:"Accessories",price:300},
{id:8,name:"Watch",category:"Accessories",price:18000},
{id:9,name:"Bottle",category:"Accessories",price:250},
{id:10,name:"Calculator",category:"Electronics",price:400}
];
let cart=[];
let discount=0;

// Display Products
function displayProducts(list){
let productDiv=document.getElementById("products");
productDiv.innerHTML="";
list.forEach(product=>{
productDiv.innerHTML+=`
<div class="card">
<h3>${product.name}</h3>
<p>${product.category}</p>
<p>₹${product.price}</p>
<button onclick="addCart(${product.id})">
Add to Cart
</button>
</div>
`;
});
}
displayProducts(products);

// Search
document.getElementById("search").addEventListener("keyup",filterProducts);
document.getElementById("category").addEventListener("change",filterProducts);
function filterProducts(){
let text=document.getElementById("search").value.toLowerCase();
let category=document.getElementById("category").value;
let result=products.filter(product=>{
let searchMatch=product.name.toLowerCase().includes(text);
let categoryMatch=(category=="All" || product.category==category);
return searchMatch && categoryMatch;
});
displayProducts(result);
}

// Add Cart
function addCart(id){
let product=products.find(p=>p.id==id);
let item=cart.find(c=>c.id==id);
if(item){
item.qty++;
}
else{
cart.push({...product,qty:1});
}
showCart();
}

// Show Cart
function showCart(){
let cartBody=document.getElementById("cartItems");
cartBody.innerHTML="";
let total=0;
let items=0;
cart.forEach(item=>{
total+=item.price*item.qty;
items+=item.qty;
cartBody.innerHTML+=`
<tr>
<td>${item.name}</td>
<td>${item.price}</td>
<td>
<button onclick="decrease(${item.id})">-</button>
${item.qty}
<button onclick="increase(${item.id})">+</button>
</td>
<td>${item.price*item.qty}</td>
<td>
<button onclick="removeItem(${item.id})">
Remove
</button>
</td>
</tr>
`;
});
document.getElementById("totalItems").innerHTML=items;
document.getElementById("totalPrice").innerHTML=(total-discount).toFixed(2);
}
