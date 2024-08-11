document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");

    menuData.forEach((item, index) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="info-container">
                <h2>${item.name}</h2>
                <p>${item.flavor}</p>
                <p class="price">NT$ ${item.price}</p>
                <div class="alcohol-content">
                    <span>酒精濃度: ${item.alcohol_content}</span>
                    <div class="alcohol-units">${getAlcoholUnits(item.alcohol_units)}</div>
                </div>
            </div>
            <div class="radar-chart-container">
                <canvas class="radar-chart" id="radar-chart-${item.name.replace(/ /g, '-')}"></canvas>
            </div>
        `;

        menuContainer.appendChild(menuItem);

        // Add delay to animation
        setTimeout(() => {
            menuItem.classList.add('loaded');
        }, index * 100); // Delay increases with each item

        // Generate radar chart
        generateRadarChart(`radar-chart-${item.name.replace(/ /g, '-')}`, item.flavor_profile);
    });
});

function getAlcoholUnits(units) {
    let unitIcons = '';
    for (let i = 0; i < units; i++) {
        unitIcons += `<img src="icon.png" alt="unit">`;
    }
    return unitIcons;
}

function generateRadarChart(containerId, flavorProfile) {
    const data = {
        labels: ['酸', '甜', '苦', '酒感', '風味強度'],
        datasets: [{
            //label: 'Flavor Profile',
            data: [flavorProfile['酸'], flavorProfile['甜'], flavorProfile['苦'], flavorProfile['酒感'], flavorProfile['風味強度']],
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgba(255, 159, 64, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
        }]
    };

    const ctx = document.getElementById(containerId).getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 5, // Assuming the maximum value is 5
                    min: 0,
                    stepSize: 1,
                    showLabelBackdrop: false, // Hide the backdrop
                    fontColor: '#333',
                    fontStyle: 'bold'
                },
                gridLines: {
                    color: 'rgba(0, 0, 0, 0.2)',
                    circular: true
                },
                angleLines: {
                    color: 'rgba(0, 0, 0, 0.2)' // Lines from the center outward
                },
                pointLabels: {
                    fontSize: 14,
                    fontColor: '#333',
                    fontStyle: 'bold'
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
