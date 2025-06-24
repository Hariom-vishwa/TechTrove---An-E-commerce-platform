const items = [
  {
    id: 1,
    img: "https://images.samsung.com/is/image/samsung/p6pim/in/2302/gallery/in-galaxy-s23-s918-446812-sm-s918bzrcins-534868449?$684_547_PNG$",
    name: "Samsung Galaxy S23",
    category: "Mobile",
    brand: "Samsung",
    price: 69999,
    rating: 4.5,
    color: "red",
    hex: "#B95249",
    stock: 25,
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SX679_.jpg",
    name: "Apple MacBook Air M2",
    category: "Laptop",
    brand: "Apple",
    price: 114900,
    rating: 4.8,
    color: "silver",
    hex: "#D7D8DA",
    stock: 15,
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51KGPDttQhL._SX522_.jpg",
    name: "Sony WH-1000XM5",
    category: "Headphones",
    brand: "Sony",
    price: 29990,
    rating: 4.6,
    color: "Gray",
    hex: "#454E5F",
    stock: 40,
  },
  {
    id: 4,
    img: "https://i1.adis.ws/i/canon/canon_eos-r10_product_gallery_1_c9051cbc2c6e433881adf22161b5b20f?$prod-spec-hero-1by1$",
    name: "Canon EOS R10",
    category: "Camera",
    brand: "Canon",
    price: 89990,
    rating: 4.7,
    color: "black",
    hex: "#000",
    stock: 10,
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/51HKnlDNQ9L._SX679_.jpg",
    name: "Dell Inspiron 15",
    category: "Laptop",
    brand: "Dell",
    price: 58990,
    rating: 4.3,
    color: "silver",
    hex: "#C7C7C7",
    stock: 30,
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/81OmhFfS-hL._SX522_.jpg",
    name: "Samsung 4K Smart TV",
    category: "Television",
    brand: "Samsung",
    price: 64990,
    rating: 4.4,
    color: "Black",
    hex: "#000",
    stock: 12,
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/61oo+mrbI2L._SX522_.jpg",
    name: "Apple iPad 10th Gen",
    category: "Tablet",
    brand: "Apple",
    price: 44900,
    rating: 4.5,
    color: "yellow",
    hex: "#BBA434",
    stock: 20,
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/61Tkw06wPDL._SX679_.jpg",
    name: "HP LaserJet Pro",
    category: "Printer",
    brand: "HP",
    price: 18990,
    rating: 4.2,
    color: "White",
    hex: "#fff",
    stock: 18,
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/61+bsawcIJL._SX522_.jpg",
    name: "boAt Airdopes 311",
    category: "Earbuds",
    brand: "Boat",
    price: 1499,
    rating: 4.1,
    color: "pink",
    hex: "#DEBDCE",
    stock: 100,
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/61qIlFz9faL._SX679_.jpg",
    name: "Mi Smart Band 7",
    category: "Smartwatch",
    brand: "Xiaomi",
    price: 3999,
    rating: 4.0,
    color: "black",
    hex: "#000",
    stock: 50,
  },
];
// ----- Categories ------

const categories = [
  {
    img: "https://itronics.in/wp-content/uploads/2024/09/iPhone_16_Plus_Teal_PDP_Image_Position_1__en-IN.png",
    category: "Mobile",
  },
  {
    img: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2024/09/hp-omnibook-ultra-flip-14.png",
    category: "Laptops",
  },
  {
    img: "https://www.pngarts.com/files/8/Airpod-PNG-Image-Transparent-Background.png",
    category: "Earphones",
  },
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/046/829/689/small_2x/smart-watch-isolated-on-transparent-background-png.png",
    category: "Smartwatches",
  },
];

let carousel = document.querySelector(".carousel");

items.forEach((product) => {
  let card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src=${product.img} />
    <div class="specs">
        <h2>${product.name}</h2>
        <p>Category: ${product.category}</p>
        <p>Brand: ${product.brand}</p>
        <h3>Price: &#x20B9;${product.price}/-</h3>
        <p>Color: <span class="proCol"></span> ${product.color}</p>
        <h3>Rating: ⭐${product.rating}</h3>
    </div>
    `;

  let proCol = card.querySelector(".proCol");
  proCol.style.backgroundColor = product.hex;
  proCol.style.width = "10px";
  proCol.style.height = "10px";
  proCol.style.display = "inline-block";
  proCol.style.borderRadius = "50%";
  proCol.style.marginRight = "5px";

  carousel.appendChild(card);
});

// Categories

categories.forEach((item) => {
  let itemsCont = document.querySelector(".categories .items");

  itemsCont.innerHTML += `
  <div class="item">
    <img src=${item.img} alt=${item.category}/>
    <a href="#">${item.category}</a>
  </div>
  `;
});

// ------------------- This is GSAP part --------------------

var all = gsap.timeline();

all.from(".nav", {
  y: -100,
  duration: 0.2,
  delay: 0.2,
});

all.from(".logo", {
  x: 50,
  y: -50,
  opacity: 0,
  duration: 0.2,
});

all.from(".navItems", {
  x: 50,
  y: -50,
  opacity: 0,
  duration: 0.1,
  stagger: 0.1,
});

all.from(".hero img", {
  opacity: 0,
  duration: 0.3,
  scale: 0.2,
});

all.from(".content", {
  x: 50,
  opacity: 0,
  duration: 0.1,
  stagger: 0.1,
});

gsap.from(".product-card", {
  x: 100,
  opacity: 0.2,
  scale: 0.5,
  duration: 0.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".carousel",
    scroller: "body",
    start: "top 100%",
    end: "bottom 100%",
    scrub: 2,
  },
});

gsap.to(".logoAnimation h1", {
  transform: "translateX(-45%)",
  scrollTrigger: {
    trigger: ".logoAnimation",
    scroller: "body",
    start: "top 0%",
    end: "top -130%",
    scrub: 3,
    pin: true,
  },
});

gsap.from(".categories .items .item", {
  y: 100,
  opacity: 0.2,
  duration: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".categories",
    scroller: "body",
    start: "top 80%",
    end: "bottom 100%",
    scrub: 2,
  },
});
