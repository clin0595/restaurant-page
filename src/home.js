import restaurantImg from './restaurant.jpeg';

function homePage() {
    const container = document.createElement('div');
    container.innerHTML = `<h1>Awesome Restaurant</h1><img src=${restaurantImg}>
    <p>Doesn't this restaurant look awesome?</p>`;
    return container;
}

export { homePage };