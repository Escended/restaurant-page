import updateAboutData from './about-tab';

const container = document.getElementById('content');

const createTitle = () => {
    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Brasserie of Light';
    console.log('Title created');
    return title;
}

const createNav = () => {
    const nav = document.createElement('div')
    nav.classList.add('tabs');
    nav.id = 'navbar';
    const headers = ["About", "Menu", "Contact"];
    for (let i = 0; i < 3; i++) {
        const tab = document.createElement('div');
        tab.classList.add('tab-2', headers[i]);

        const label = document.createElement('label');
        label.htmlFor = `tab2-${i}`;
        label.textContent = headers[i];

        const input = document.createElement('input');
        input.id = `tab2-${i}`;
        input.name = 'tabs-two';
        input.type = 'radio';
        // Highlight the first tab 
        if (i === 0) {
            input.checked = true;
        }
        tab.append(label, input);
        nav.appendChild(tab);
    }
    return nav;
}

const loadElements = () => {
    container.append(createTitle(), createNav(), updateAboutData());
};

export default loadElements;
