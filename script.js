document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");

    menuData.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.flavor}</p>
            <p class="price">NT$ ${item.price}</p>
            <div class="alcohol-content">
                <span>酒精濃度: ${item.alcohol_content}</span>
                <div class="alcohol-units">${getAlcoholUnits(item.alcohol_units)}</div>
            </div>
        `;

        menuContainer.appendChild(menuItem);
    });
});

function getAlcoholUnits(units) {
    let unitIcons = '';
    for (let i = 0; i < units; i++) {
        unitIcons += `<img src="path_to_your_icon.png" alt="unit">`;
    }
    return unitIcons;
}
