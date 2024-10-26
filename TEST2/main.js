//1)
const extractNumbers = (str) => {
  return str.match(/\d/g).map(Number);
};

console.log(extractNumbers("a1fg5hj6")); //  вернёт[1, 5, 6]

//2)
let num1 = 0;
let num2 = 1;

function recurse() {
  console.log(num1);
  if (num1 >= 144) return;
  let nextNum = num1 + num2;
  num1 = num2;
  num2 = nextNum;

  setTimeout(recurse, 1000);
}

recurse();

//3)
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    data.forEach((product) => {
      console.log(product.title);
    });
  } catch (error) {
    console.error(error);
  }
}
fetchProducts();

//4)

const buttonsColor = document.querySelectorAll(".btn-color");
const javaScript = document.querySelector("#js-color");

const generateRandomColor = () => {
  const hexCodes = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
};

const setRandomColors = () => {
  buttonsColor.forEach((buttonColor) => {
    buttonColor.innerHTML = generateRandomColor();
    buttonColor.onclick = (event) => {
      javaScript.style.color = event.target.innerHTML;
    };
  });
};

window.onload = () => setRandomColors();
window.onkeydown = (event) => {
  if (event.code.toLowerCase() === "space") {
    event.preventDefault();
    setRandomColors();
  }
};

//5)
function toggleBlock() {
  const square = document.getElementById("square");
  if (square.style.display === "none") {
    square.style.display = "block";
  } else {
    square.style.display = "none";
  }
}

//6)
let count = 0;
const counterElement = document.getElementById("counter");

const timer = setInterval(() => {
  if (count < 100) {
    count += 1;
    counterElement.textContent = count;
  } else {
    clearInterval(timer);
  }
}, 1);

//7)
const btn = document.querySelector(".get");
btn.onclick = () => {
  async function part7() {
    try {
      const response = await fetch("products.json");
      const data = await response.json();
      data.forEach((post) => {
        const { id, title, body } = post;
        console.log(post);
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
  part7();
};
