import { h1,paragraph } from './index.js';
import contact from './image/contact.jpg';

const contactUs = new Image;
contactUs.src = contact;
contactUs.setAttribute('id','contact');

const wipeAll = () => {
    h1.textContent = 'Contact Us!';
    if (paragraph.parentNode == pageContent) pageContent.removeChild(paragraph); 
    footer.appendChild(contactUs);
    footer.style.backgroundColor = 'burlywood'; 
}

export { wipeAll, contactUs };