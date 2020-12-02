import './assets/styles/style.css';
import loadElements from './modules/page-load';
import updateAboutData from './modules/about-tab';
import updateMenuData from './modules/menu-data';
import updateContactData from './modules/contact-data';
loadElements();

const updateContent = () => {
    const content = document.getElementById('content');

    const aboutPage = document.getElementById('tab2-0')
    aboutPage.addEventListener('click', () => {
        content.removeChild(content.lastElementChild);
        content.append(updateAboutData());
        console.log('clicked about');
    });

    const menuPage = document.getElementById('tab2-1');
    menuPage.addEventListener('click', () => {
        content.removeChild(content.lastElementChild);
        content.append(updateMenuData());
        console.log('clicked menu');
    });

    const contactPage = document.getElementById('tab2-2');
    contactPage.addEventListener('click', () => {
        content.removeChild(content.lastElementChild);
        content.append(updateContactData());
        console.log('clicked contact');
    });
}

updateContent();

console.log("Workings");
