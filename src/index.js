import './style.css';
import { wipeFunction, coffeeMenu } from './menu.js';
import { wipeAll, contactUs } from './contact.js';
import coffeeImage from './image/cafe.jpg';
import coffeeHouse from './image/cafe1.png';

const menupage = document.getElementById('menupage');
const h1 = document.createElement('h1');
    h1.setAttribute('id', 'title');
const paragraph = document.createElement('div');
    paragraph.setAttribute('id', 'paragraph');
const imageSection = document.createElement('div');
    imageSection.setAttribute('id', 'imageSection');
const image = new Image();
const image1 = new Image();
    image.src = coffeeImage;
    image.style.height = '350px';
    image.style.width = '400px';
    image1.src = coffeeHouse;
    image1.style.height = '350px';
    image1.style.width = '200px';
const paragraphContent = document.createElement('div');
    paragraphContent.setAttribute('id', 'paragraphContent');
const openingText = document.createElement('p');
const br = document.createElement('br');
const ul = document.createElement('ul');
const li = document.createElement('li');
const li2 = document.createElement('li');
const closingText = document.createElement('p');

homePage();
homepage.addEventListener('click', homePage);
function homePage(){
    h1.textContent = 'Coffee Shop';
    openingText.textContent = 'Hi welcome to the Fantastic Virtual Gathering Meetup Cafe!';
    ul.textContent = 'Our Opening Hours';
    li.textContent = 'Monday-Friday: 8am-10pm';
    li2.textContent = 'Saturday,Sunday & Public Holiday; 8am-11pm';
    closingText.textContent = 'Hope To See You There!';
    footer.style.backgroundColor = 'brown'; 

    // Home Page
    const pageContent = document.getElementById('pageContent');
    pageContent.appendChild(h1);
    pageContent.appendChild(paragraph);
        paragraph.appendChild(imageSection);
            imageSection.appendChild(image);
            imageSection.appendChild(image1);
            if(coffeeMenu.parentNode == imageSection) imageSection.removeChild(coffeeMenu);
        paragraph.appendChild(paragraphContent);
            paragraphContent.appendChild(openingText);
            paragraphContent.appendChild(br);
            paragraphContent.appendChild(ul);
            ul.appendChild(li);
            ul.appendChild(li2);
        paragraphContent.appendChild(closingText);
    if (contactUs.parentNode == footer) footer.removeChild(contactUs);
}

menupage.addEventListener('click', wipeFunction);
contactpage.addEventListener('click', wipeAll);

export { imageSection,image,image1,h1,paragraph,paragraphContent,openingText,ul };