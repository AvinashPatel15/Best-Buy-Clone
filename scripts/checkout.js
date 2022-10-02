
    let userDataFromlogin = JSON.parse(localStorage.getItem("customerData")) || [];

// let name1=document.getElementById("user_details_name");
// name1.textContent=userDataFromlogin[0].cEmail;
// console.log(name1)

let address = JSON.parse(localStorage.getItem("address_Info")) || [];

document.querySelector("form").addEventListener("submit",addressFun);

function addressFun(e) {
    e.preventDefault();
let user_detail = JSON.parse(localStorage.getItem("customerData")) || [];
    
var addressObj = {
    country:form.use_address1.value,
    firstname: form.first_name.value,
    lastname: form.last_name.value,
    address_one: form.address_1.value,
    address_two: form.address_2.value,
    city: form.city.value,
    state: form.state_name.value,
    pincode: form.pin_code.value,
    phonenum: form.phone_num.value,
    saveInfo: form.save_info.value,
    email:user_detail.cEmail
};

console.log(addressObj);
address.push(addressObj);
localStorage.setItem("address_Info", JSON.stringify(address));
} 


// cart page
document.getElementById("return_to_cart")
.addEventListener("click", function () {
  window.location.href = "../addToCart.html";
});


// shipping page
document.getElementById("return_to_shipping")
.addEventListener("click", function () {
  window.location.href = "shiping.html";    // day4 work
});


let cartDiv=document.getElementById("cartBox");


let cartBag=JSON.parse(localStorage.getItem("products"));
let dataFromHome=JSON.parse(localStorage.getItem("products"));
////console.log(dataFromHome)

// console.log(cartBag)


let totalAmount=0;
cartBag.forEach((el)=>{
//   data calculation  ,,when home work done then apply logic here 
// let x=dataFromHome.filter((el)=>{
//     if(item.id===el.id){
//        return true;
//     }
//  })
//console.log(x)
let num;
let div=document.createElement("div");
let divimg=document.createElement("div")
let img=document.createElement("img");
img.src=el.image;
if(el.quantity){
    num=el.quantity;
}else{
    num=1;
}

let nodiv=document.createElement("div");
nodiv.setAttribute("class","quantutyno");
nodiv.textContent=num;
let name=document.createElement("h3");
name.textContent=el.name;

divimg.append(nodiv,img)
let price=document.createElement("h5");
let disc = Math.floor((el.discount / 100) * Number(el.priceb) );
console.log(typeof(disc))
disc = Number(el.priceb) - disc;
totalAmount+=+disc;
price.innerHTML= `&#8377; ${el.priceb}`;

//console.log(el.price)
div.append(divimg,name,price);
//div.innerHTML="asdsd"
cartDiv.append(div)
  
})
let total = JSON.parse(localStorage.getItem("subtotal"))
document.getElementById("subtotal").innerText=total
document.getElementById("total").innerText=total;



// gift card or coupon code
function applyCoupon(){
let code = document.getElementById("coupon_code").value;
if(code=="masai04"){
   let discount=Number(total/100*15);
   document.getElementById("total").innerText=Number(total)-discount;;
   document.getElementById("discount").innerText="Saved 15% using masai04 coupon code 🎉🎉🎉";
   document.getElementById("discount").style.color="#50df50"
}else{
   document.getElementById("discount").innerText="Inavalid coupon code";
   document.getElementById("discount").style.color="red"
}
}
