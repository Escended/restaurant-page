const updateContactData = () => {
    const container = document.createElement('div');
    container.id = 'info'
    const header = document.createElement('h4');
    header.classList.add('h4-styling');
    header.textContent = "Our Menus";
    const data = document.createElement('div');
    data.id = 'data-menu';
    data.textContent = "Contact info";
    container.append(header, data);
    return container;
}

export default updateContactData;