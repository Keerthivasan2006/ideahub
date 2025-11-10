// ==========================
// PRODUCT DATA
// ==========================
const products = {
  projects: [
    { id:"project1", title:"  ", price:4171.50, description:".", icon:"fas fa-robot", 
      image:"  " },


    { id:"project2", title:"Weather Station Project", price:3336.50, description:"DIY weather station with sensors.", icon:"fas fa-satellite-dish", image:"https://source.unsplash.com/400x300/?weather,station" },


    { id:"project3", title:"Solar Power System", price:5006.50, description:"Learn about renewable energy.", icon:"fas fa-solar-panel", image:"https://source.unsplash.com/400x300/?solar,panel" },


    { id:"project4", title:"Smart Home Model", price:3754.15, description:"Miniature IoT-based smart home.", icon:"fas fa-home", image:"https://source.unsplash.com/400x300/?smart,home" },


    { id:"project5", title:"RC Car Project", price:4589.15, description:"Remote controlled car kit.", icon:"fas fa-car", image:"https://source.unsplash.com/400x300/?remote,car" },


    { id:"project6", title:"Smart Lighting System", price:2921.65, description:"IoT-enabled smart lighting.", icon:"fas fa-lightbulb", image:"https://source.unsplash.com/400x300/?smart,light" },


    { id:"project7", title:"Temperature Control System", price:3589.65, description:"Room temperature monitoring.", icon:"fas fa-thermometer", image:"https://source.unsplash.com/400x300/?temperature,sensor" },


    { id:"project8", title:"Security Camera Model", price:4006.15, description:"Surveillance model with motion detection.", icon:"fas fa-camera", image:"https://source.unsplash.com/400x300/?security,camera" },


    { id:"project9", title:"Wind Turbine Model", price:4171.50, description:"Renewable energy wind turbine model.", icon:"fas fa-wind", image:"https://source.unsplash.com/400x300/?wind,turbine" },


    { id:"project10", title:"Model Rocket Launcher", price:5426.15, description:"Electronic rocket launch system.", icon:"fas fa-rocket", image:"https://source.unsplash.com/400x300/?rocket" },


    { id:"project11", title:"Smart Irrigation System", price:3890.00, description:"Automated water supply for plants.", icon:"fas fa-seedling", image:"https://source.unsplash.com/400x300/?irrigation" },


    { id:"project12", title:"Voice Controlled Car", price:4600.00, description:"Car that moves by voice commands.", icon:"fas fa-microphone", image:"https://source.unsplash.com/400x300/?voice,car" },


    { id:"project13", title:"Fire Alarm System", price:3200.00, description:"Smoke sensor fire alarm project.", icon:"fas fa-fire-extinguisher", image:"https://source.unsplash.com/400x300/?fire,alarm" },


    { id:"project14", title:"Obstacle Avoiding Robot", price:4100.00, description:"Robot with ultrasonic sensors.", icon:"fas fa-robot", image:"https://source.unsplash.com/400x300/?robotics" },


    { id:"project15", title:"Automatic Street Light", price:2950.00, description:"Light automation using sensors.", icon:"fas fa-lightbulb", image:"https://source.unsplash.com/400x300/?street,light" },


    { id:"project16", title:"RFID Attendance System", price:4800.00, description:"RFID-based attendance system.", icon:"fas fa-id-card", image:"https://source.unsplash.com/400x300/?rfid" },


    { id:"project17", title:"Smart Dustbin", price:3500.00, description:"Automatic waste bin with sensors.", icon:"fas fa-trash", image:"https://source.unsplash.com/400x300/?dustbin" },


    { id:"project18", title:"Water Level Indicator", price:2200.00, description:"Tank water monitoring system.", icon:"fas fa-tint", image:"https://source.unsplash.com/400x300/?water,sensor" },


    { id:"project19", title:"Traffic Light System", price:3000.00, description:"Model traffic signal system.", icon:"fas fa-traffic-light", image:"https://source.unsplash.com/400x300/?traffic,light" },


    { id:"project20", title:"Bluetooth Car", price:4200.00, description:"Bluetooth controlled robot car.", icon:"fas fa-car", image:"https://source.unsplash.com/400x300/?bluetooth,car" },


    { id:"project21", title:"Gas Leakage Detector", price:3300.00, description:"Gas leakage alert system.", icon:"fas fa-burn", image:"https://source.unsplash.com/400x300/?gas,sensor" },


    { id:"project22", title:"Heart Rate Monitor", price:5000.00, description:"Pulse rate monitoring system.", icon:"fas fa-heartbeat", image:"https://source.unsplash.com/400x300/?heart,monitor" },


    { id:"project23", title:"Smart Parking System", price:3700.00, description:"IoT based parking system.", icon:"fas fa-parking", image:"https://source.unsplash.com/400x300/?parking" },


    { id:"project24", title:"Solar Tracker", price:4600.00, description:"Solar panel automatic tracker.", icon:"fas fa-sun", image:"https://source.unsplash.com/400x300/?solar,tracker" },


    { id:"project25", title:"Smart Energy Meter", price:4900.00, description:"IoT-based power monitoring.", icon:"fas fa-bolt", image:"https://source.unsplash.com/400x300/?energy,meter" },


    { id:"project26", title:"Drone Kit", price:6250.00, description:"Quadcopter drone kit.", icon:"fas fa-helicopter", image:"https://source.unsplash.com/400x300/?drone" },


    { id:"project27", title:"3D Printer Model", price:8750.00, description:"Mini 3D printer assembly.", icon:"fas fa-cube", image:"https://source.unsplash.com/400x300/?3d,printer" },


    { id:"project28", title:"AI Voice Assistant", price:7250.00, description:"DIY Alexa-like system.", icon:"fas fa-microphone-alt", image:"https://source.unsplash.com/400x300/?voice,assistant" },


    { id:"project29", title:"Biometric Attendance", price:5580.00, description:"Fingerprint attendance model.", icon:"fas fa-fingerprint", image:"https://source.unsplash.com/400x300/?fingerprint" },


    { id:"project30", title:"Line-Follower Car", price:6420.00, description:"Autonomous car with sensors.", icon:"fas fa-car-side", image:"https://source.unsplash.com/400x300/?line,car" }


  ],
  parts: [
    { id:"part1", title:"   ", price: 44 , description:".", icon:"fas fa-microchip", 
      image:"  " },


    { id:"part2", title:"Breadboard", price:150.00, description:"Prototyping board.", icon:"fas fa-th", image:"https://source.unsplash.com/400x300/?breadboard" },


    { id:"part3", title:"Jumper Wires", price:100.00, description:"Wire pack.", icon:"fas fa-ethernet", image:"https://source.unsplash.com/400x300/?wires" },


    { id:"part4", title:"Resistor Kit", price:200.00, description:"Assorted resistors.", icon:"fas fa-grip-lines", image:"https://source.unsplash.com/400x300/?resistor" },


    { id:"part5", title:"LED Pack", price:180.00, description:"Different color LEDs.", icon:"fas fa-lightbulb", image:"https://source.unsplash.com/400x300/?led" },


    { id:"part6", title:"Servo Motor", price:300.00, description:"For automation.", icon:"fas fa-cogs", image:"https://source.unsplash.com/400x300/?servo" },


    { id:"part7", title:"DC Motor", price:250.00, description:"Standard DC motor.", icon:"fas fa-cog", image:"https://source.unsplash.com/400x300/?motor" },


    { id:"part8", title:"Ultrasonic Sensor", price:400.00, description:"Distance sensor.", icon:"fas fa-bullseye", image:"https://source.unsplash.com/400x300/?ultrasonic" },


    { id:"part9", title:"IR Sensor", price:220.00, description:"Infrared sensor.", icon:"fas fa-eye", image:"https://source.unsplash.com/400x300/?infrared" },


    { id:"part10", title:"Relay Module", price:350.00, description:"Switching module.", icon:"fas fa-plug", image:"https://source.unsplash.com/400x300/?relay" },


    { id:"part11", title:"Temperature Sensor", price:270.00, description:"Environmental sensor.", icon:"fas fa-thermometer-half", image:"https://source.unsplash.com/400x300/?temperature" },


    { id:"part12", title:"Capacitor Kit", price:250.00, description:"Assorted capacitors.", icon:"fas fa-bolt", image:"https://source.unsplash.com/400x300/?capacitor" },


    { id:"part13", title:"Transistor Pack", price:280.00, description:"Different transistors.", icon:"fas fa-microchip", image:"https://source.unsplash.com/400x300/?transistor" },


    { id:"part14", title:"LCD Display", price:450.00, description:"16x2 character LCD.", icon:"fas fa-tv", image:"https://source.unsplash.com/400x300/?lcd" },


    { id:"part15", title:"Battery Pack", price:600.00, description:"Rechargeable pack.", icon:"fas fa-battery-half", image:"https://source.unsplash.com/400x300/?battery" },


    { id:"part16", title:"Switches Pack", price:150.00, description:"Push switches.", icon:"fas fa-toggle-on", image:"https://source.unsplash.com/400x300/?switch" },


    { id:"part17", title:"WiFi Module ESP8266", price:320.00, description:"WiFi module.", icon:"fas fa-wifi", image:"https://source.unsplash.com/400x300/?wifi,module" },


    { id:"part18", title:"Bluetooth Module", price:350.00, description:"Bluetooth module.", icon:"fas fa-bluetooth", image:"https://source.unsplash.com/400x300/?bluetooth,module" },


    { id:"part19", title:"Power Supply Module", price:280.00, description:"Breadboard PSU.", icon:"fas fa-plug", image:"https://source.unsplash.com/400x300/?power,supply" },


    { id:"part20", title:"Mini Solar Panel", price:550.00, description:"Small panel.", icon:"fas fa-solar-panel", image:"https://source.unsplash.com/400x300/?mini,solar" },


    { id:"part21", title:"Microphone Sensor", price:260.00, description:"Sound sensor.", icon:"fas fa-microphone", image:"https://source.unsplash.com/400x300/?microphone" },


    { id:"part22", title:"Vibration Motor", price:220.00, description:"Tiny motor.", icon:"fas fa-dot-circle", image:"https://source.unsplash.com/400x300/?vibration" },


    { id:"part23", title:"Light Sensor LDR", price:180.00, description:"LDR sensor.", icon:"fas fa-sun", image:"https://source.unsplash.com/400x300/?ldr" },


    { id:"part24", title:"Potentiometer", price:200.00, description:"Variable resistor.", icon:"fas fa-sliders-h", image:"https://source.unsplash.com/400x300/?potentiometer" },


    { id:"part25", title:"Diode Kit", price:240.00, description:"Assorted diodes.", icon:"fas fa-circle", image:"https://source.unsplash.com/400x300/?diode" },


    { id:"part26", title:"Stepper Motor", price:1750.00, description:"Precision motor.", icon:"fas fa-cogs", image:"https://source.unsplash.com/400x300/?stepper" },


    { id:"part27", title:"Ultrasonic HC-SR04", price:950.00, description:"Standard ultrasonic.", icon:"fas fa-bullseye", image:"https://source.unsplash.com/400x300/?sensor" },


    { id:"part28", title:"Relay 4 Channel", price:1350.00, description:"4-channel relay.", icon:"fas fa-plug", image:"https://source.unsplash.com/400x300/?relay,module" },


    { id:"part29", title:"Gyroscope Sensor", price:1100.00, description:"3-axis gyro.", icon:"fas fa-compass", image:"https://source.unsplash.com/400x300/?gyroscope" },


    { id:"part30", title:"Laser Module", price:800.00, description:"Laser module.", icon:"fas fa-dot-circle", image:"https://source.unsplash.com/400x300/?laser" }


  ]
};

// ==========================
// STATE
// ==========================
let cart = [];

// ==========================
// HELPERS
// ==========================
function formatPrice(price){ return `₹${price.toFixed(2)}`; }
function showNotification(message,isError=false){
  const n=document.getElementById("notification");
  const t=document.getElementById("notification-text");
  t.textContent=message;
  n.classList.toggle("error",isError);
  n.classList.add("show");
  setTimeout(()=>n.classList.remove("show"),3000);
}

// ==========================
// RENDERING
// ==========================
function renderProducts(){
  const pg=document.getElementById("projects-grid");
  const sg=document.getElementById("parts-grid");
  products.projects.forEach(p=>pg.appendChild(createProductCard(p)));
  products.parts.forEach(p=>sg.appendChild(createProductCard(p)));
}

function createProductCard(product){
  const d=document.createElement("div");
  d.classList.add("product-card");
  d.dataset.id=product.id;
  d.innerHTML=`
    <div class="product-img">
      ${product.image?`<img src="${product.image}" alt="${product.title}">`:`<i class="${product.icon}"></i>`}
    </div>
    <div class="product-info">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <div class="product-footer">
        <span class="price">${formatPrice(product.price)}</span>
        <button class="btn add-to-cart">Add to Cart</button>
      </div>
    </div>`;
  d.querySelector(".add-to-cart").addEventListener("click",e=>{
    e.stopPropagation(); addToCart(product);
  });
  d.addEventListener("click",()=>openModal(product));
  return d;
}

// ==========================
// CART FUNCTIONS
// ==========================
function addToCart(product){
  const ex=cart.find(i=>i.id===product.id);
  if(ex) ex.quantity++; else cart.push({...product,quantity:1});
  updateCartDisplay(); showNotification(`${product.title} added!`);
}
function removeFromCart(id){ cart=cart.filter(i=>i.id!==id); updateCartDisplay(); }
function updateCartQuantity(id,c){
  const it=cart.find(i=>i.id===id); if(!it)return;
  it.quantity+=c; if(it.quantity<=0)removeFromCart(id);
  updateCartDisplay();
}
function calculateCartTotals(){
  const s=cart.reduce((x,i)=>x+i.price*i.quantity,0);
  const sh=s>0?500:0; return {subtotal:s,shipping:sh,total:s+sh};
}
function updateCartDisplay(){
  const ci=document.getElementById("cart-items");
  const cc=document.querySelector(".cart-count");
  ci.innerHTML="";
  if(cart.length===0){
    ci.innerHTML=`<div class="empty-cart"><i class="fas fa-shopping-cart"></i>
      <h3>Your cart is empty</h3>
      <p>Add some products to continue shopping</p>
      <button class="btn" id="empty-cart-continue-btn">Continue Shopping</button></div>`;
    document.getElementById("empty-cart-continue-btn").onclick=()=>showSection("projects");
  }else{
    cart.forEach(item=>{
      const d=document.createElement("div");
      d.classList.add("cart-item");
      d.innerHTML=`
        <div class="cart-item-img">
          ${item.image?`<img src="${item.image}" alt="${item.title}">`:`<i class="${item.icon}"></i>`}
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">${formatPrice(item.price)}</div>
          <div class="cart-item-quantity">
            <button class="quantity-btn minus">-</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn plus">+</button>
          </div>
        </div>
        <div class="cart-remove"><i class="fas fa-trash"></i></div>`;
      d.querySelector(".minus").onclick=()=>updateCartQuantity(item.id,-1);
      d.querySelector(".plus").onclick=()=>updateCartQuantity(item.id,1);
      d.querySelector(".cart-remove").onclick=()=>removeFromCart(item.id);
      ci.appendChild(d);
    });
  }
  const {subtotal,shipping,total}=calculateCartTotals();
  document.getElementById("cart-subtotal").textContent=formatPrice(subtotal);
  document.getElementById("cart-shipping").textContent=formatPrice(shipping);
  document.getElementById("cart-total").textContent=formatPrice(total);
  cc.textContent=cart.reduce((x,i)=>x+i.quantity,0);
}

// ==========================
// NAVIGATION + MODAL
// ==========================
function showSection(id){
  document.querySelectorAll("section").forEach(sec=>sec.style.display=sec.id===`${id}-section`?"block":"none");
  document.querySelectorAll(".nav-link").forEach(l=>l.classList.toggle("active",l.dataset.section===id));
}
function openModal(p){
  document.getElementById("modal-title").textContent=p.title;
  document.getElementById("modal-price").textContent=formatPrice(p.price);
  document.getElementById("modal-description").textContent=p.description;
  const ic=document.getElementById("modal-icon");
  if(p.image){
    ic.outerHTML=`<img id="modal-icon" src="${p.image}" alt="${p.title}" style="width:100%;max-height:250px;object-fit:cover;border-radius:6px;">`;
  }else{ ic.className=p.icon; }
  document.getElementById("product-modal").style.display="block";
  document.querySelector(".add-to-cart-modal").onclick=()=>{addToCart(p); closeModal();};
}
function closeModal(){ document.getElementById("product-modal").style.display="none"; }

// ==========================
// WHATSAPP ORDER
// ==========================
function placeOrder(){
  if(cart.length===0){ showNotification("Your cart is empty!",true); return; }
  const {subtotal,shipping,total}=calculateCartTotals();
  let msg="🛒 New Order from EduTechParts:\n\n";
  cart.forEach(item=>{
    msg+=`• [${item.id}] ${item.title} x${item.quantity} - ${formatPrice(item.price*item.quantity)}\n`;
  });
  msg+=`\nSubtotal: ${formatPrice(subtotal)}\nShipping: ${formatPrice(shipping)}\nTotal: ${formatPrice(total)}\n\n✅ Please confirm my order.`;
  window.open(`https://wa.me/9840694616?text=${encodeURIComponent(msg)}`,"_blank");
}

// ==========================
// INIT
// ==========================
document.addEventListener("DOMContentLoaded",()=>{
  renderProducts(); updateCartDisplay(); showSection("home");
  document.querySelectorAll(".nav-link").forEach(l=>{
    l.addEventListener("click",e=>{e.preventDefault(); showSection(l.dataset.section);});
  });
  document.getElementById("shop-now-btn").onclick=e=>{e.preventDefault(); showSection("projects");};
  document.getElementById("cart-icon").onclick=()=>showSection("cart");
  document.querySelector(".close").onclick=closeModal;
  document.querySelector(".btn-secondary").onclick=closeModal;
  document.getElementById("whatsapp-btn").onclick=placeOrder;
});
