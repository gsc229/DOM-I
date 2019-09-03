const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
const nav = document.querySelector("nav");
const navA = document.getElementsByTagName("a");

for (let i = 0; i < navA.length; i++) {
  navA[i].innerHTML = siteContent["nav"][`nav-item-${i + 1}`];
  navA[i].style.color = "limegreen";
}
const newA = document.createElement("a");
nav.prepend(newA);
newA.innerHTML = "Me first!";
newA.style.color = "hotpink";
console.log(newA);
const lastA = document.createElement("a");
lastA.innerHTML = "I'm last";
lastA.style.color = "lightblue";
lastA.style.fontWeight = "bolder";
nav.append(lastA);

//console.log(siteContent["nav"]["nav-item-1"]);
/* =========== CTA STUFF ============================ */
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const ctaHeading = document.querySelector("h1");
ctaHeading.innerHTML = siteContent.cta.h1;
const button = document.querySelector("button");
button.innerHTML = siteContent.cta.button;

/* ============= MAIN CONTENT STUFF =================== */

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
/* ========== TOP-CONTENT ========================= */
const topContent = document.querySelector(".top-content");
const textContent = topContent.firstElementChild;
/* FEATURES */
const featuresHeading = textContent.firstElementChild;
featuresHeading.innerHTML = siteContent["main-content"]["features-h4"];
const featursP = textContent.lastElementChild;
featursP.innerHTML = siteContent["main-content"]["features-content"];

/* ABOUT */
const textContentB = topContent.lastElementChild;
const aboutHeading = textContentB.firstElementChild;
aboutHeading.innerHTML = siteContent["main-content"]["about-h4"];
const aboutP = textContentB.lastElementChild;
aboutP.innerHTML = siteContent["main-content"]["about-content"];
// BOTTOM CONTENT CONTAINER:
const bottomContent = document.querySelector(".bottom-content");
// SERVICES
const firstTextContent = bottomContent.firstElementChild;
const servicesH = firstTextContent.firstElementChild;
servicesH.innerHTML = siteContent["main-content"]["services-h4"];
const servicesP = servicesH.nextElementSibling;
servicesP.innerHTML = siteContent["main-content"]["services-content"];

// PRODUCT
const secondTextContent = firstTextContent.nextElementSibling;
const productH = secondTextContent.firstElementChild;
productH.innerHTML = siteContent["main-content"]["product-h4"];
const productP = productH.nextElementSibling;
productP.innerHTML = siteContent["main-content"]["product-content"];

//VISION
const thirdTextContent = bottomContent.lastElementChild;
const visionH = thirdTextContent.firstElementChild;
visionH.innerHTML = siteContent["main-content"]["vision-h4"];
const visionP = visionH.nextElementSibling;
visionP.innerHTML = siteContent["main-content"]["vision-content"];
/* CONTACT AND FOOTER  */
/* CONTACT AND FOOTER  */
const contatSec = document.querySelector(".contact");
const contactH = contatSec.firstElementChild;
contactH.innerHTML = siteContent.contact["contact-h4"];
const address = contactH.nextElementSibling;
address.innerHTML = siteContent.contact.address;
address.nextElementSibling.innerHTML = siteContent.contact.phone;
contatSec.lastElementChild.innerHTML = siteContent.contact.email;
// FOOTER
const footer = document.querySelector("footer");
footer.firstElementChild.innerHTML = siteContent.footer.copyright;

//console.log(`Contact Sibling: ${contactH.nextElementSibling}`);
//contactH.nextElementSibling.innerHTML = siteContent.address;
