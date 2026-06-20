import chefImg from './chef.jpeg';

function aboutPage() {
    const container = document.createElement('div');
    container.innerHTML = `<h1>About</h1><img src=${chefImg}>
    <p>Enjoy our awesome food!</p>`;
    return container;
}

export { aboutPage };