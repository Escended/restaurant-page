const updateAboutData = () => {
    const container = document.createElement('div');
    container.id = 'info'
    const header = document.createElement('h4');
    header.classList.add('header');
    header.textContent = "About our Restaurant";
    const data = document.createElement('p');
    data.id = 'data';
    data.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."; 
    container.append(header, data);
    return container;
}

export default updateAboutData;