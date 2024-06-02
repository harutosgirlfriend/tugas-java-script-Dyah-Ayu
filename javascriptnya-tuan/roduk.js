
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}
let total = 0;

function addToCart(namaproduk, harga) {
    total += harga;
    document.getElementById("total").textContent = total.toFixed(2);
    
    const li = document.createElement("li");
    li.textContent = `${namaproduk} - ${harga.toFixed(2)}`;
    document.getElementById("keranjang-item").appendChild(li);
}

function checkout() {
    document.getElementById("bayar-dengan").classList.remove("hidden");
}

