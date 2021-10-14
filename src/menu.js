import { h1,paragraph, paragraphContent,imageSection,image,image1,openingText,ul } from './index.js';
import { contactUs } from './contact.js';
import coffeemenu from './image/coffeemenu.jpg';


const coffeeMenu = new Image;
coffeeMenu.src = coffeemenu;

const wipeFunction = () => { 
    if (coffeeMenu.parentNode != imageSection){
        imageSection.removeChild(image);
        imageSection.removeChild(image1);
        paragraphContent.removeChild(ul);   
        imageSection.appendChild(coffeeMenu);
    } 
    pageContent.appendChild(paragraph);
    if (contactUs.parentNode == footer) footer.removeChild(contactUs);
    h1.textContent = 'Menu';
    footer.style.backgroundColor = 'brown'; 
    openingText.textContent = 'We Aim To Provide The Best Environment and Serve the Best Coffee For Our Beloved Customer';
}

export { wipeFunction, coffeeMenu };