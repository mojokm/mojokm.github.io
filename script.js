document.addEventListener("DOMContentLoaded", () => {
    fetch('menu.csv')
        .then(response => response.text())
        .then(csvText => {
            const menuData = parseCSV(csvText);
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
                    <canvas class="radar-chart" id="radar-chart-${item.name.replace(/ /g, '-')}"></canvas>
                `;

                menuContainer.appendChild(menuItem);

                // Generate radar chart
                generateRadarChart(`radar-chart-${item.name.replace(/ /g, '-')}`, item.flavor_profile);
            });
        });
});

function getAlcoholUnits(units) {
    let unitIcons = '';
    for (let i = 0; i < units; i++) {
        unitIcons += `<img src="path_to_your_icon.png" alt="unit">`;
    }
    return unitIcons;
}

function generateRadarChart(containerId, flavorProfile) {
    const data = {
        labels: ['酸', '甜', '苦', '酒感', '風味強度'],
        datasets: [{
            label: 'Flavor Profile',
            data: [flavorProfile['酸'], flavorProfile['甜'], flavorProfile['苦'], flavorProfile['酒感'], flavorProfile['風味強度']],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    const ctx = document.getElementById(containerId).getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {
            scale: {
                ticks: { beginAtZero: true }
            }
        }
    });
}

function parseCSV(csvText) {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    const data = lines.slice(1).map(line => {
        const values = line.split(',');
        const item = {};
        headers.forEach((header, index) => {
            item[header.trim()] = values[index].trim();
        });
        item.flavor_profile = {
            '酸': parseInt(item['酸']),
            '甜': parseInt(item['甜']),
            '苦': parseInt(item['苦']),
            '酒感': parseInt(item['酒感']),
            '風味強度': parseInt(item['風味強度'])
        };
        return item;
    });
    return data;
}
