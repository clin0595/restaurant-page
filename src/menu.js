import menuImg from './menu.jpeg';

function menuPage() {
    const container = document.createElement('div');
    container.innerHTML = `<h1>Menu</h1><img src=${menuImg}>
    <p>Looks awesome!</p>`;
    return container;
}

export { menuPage };