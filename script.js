const wa = n => 'https://wa.me/51952438037?text=' + encodeURIComponent('Hola Dos Hermanas, quiero pedir: ' + n);
const data = {
    g1: [
        ['https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60', 'Clásica', 'Pollo o carne, papas y ensalada.', '4.00'],
        ['https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=60', 'Mixta', 'Pollo o carne, papas, ensalada, queso y jamón.', '7.00'],
        ['https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=500&q=60', 'Especial', 'Pollo o carne, papas, queso, jamón, tocino y ensalada.', '9.00'],
        ['https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=500&q=60', 'De la casa', 'Pollo o carne, papas, queso, jamón, tocino, huevo y ensalada.', '11.00', 'La favorita']
    ],
    g2: [
        ['https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=60', 'Alitas a la BBQ', 'Con papas y ensalada.', '12.00'],
        ['https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=60', 'Alitas acevichadas', 'Con papas y ensalada.', '12.00'],
        ['https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=60', 'Pollo broaster', 'Con arroz y papas.', '10.00'],
        ['https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=60', 'Salchipollo', 'Con papas y ensalada.', '8.00'],
        ['https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=500&q=60', 'Salchipapa', 'Papas fritas con salchicha y cremas.', '6.00']
    ],
    g3: [
        ['https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60', 'Café', 'Caliente y recién hecho.', '1.50'],
        ['https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60', 'Cebada negra', 'Tradicional y refrescante.', '1.00']
    ]
};

const renderProducts = (containerId, products) => {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`No se encontró el contenedor #${containerId}.`);
        return;
    }

    products.forEach(([imageUrl, name, description, price, tag]) => {
        const card = document.createElement('article');
        card.className = 'item';

        const image = document.createElement('img');
        image.className = 'product-image';
        image.src = imageUrl;
        image.alt = name;
        image.loading = 'lazy';
        image.onerror = () => {
            image.hidden = true;
        };

        const title = document.createElement('h3');
        title.textContent = name;

        if (tag) {
            const badge = document.createElement('span');
            badge.className = 'tag';
            badge.textContent = tag;
            title.append(badge);
        }

        const details = document.createElement('p');
        details.textContent = description;

        const row = document.createElement('div');
        row.className = 'row';

        const priceLabel = document.createElement('span');
        priceLabel.className = 'price';
        priceLabel.textContent = `S/. ${price}`;

        const orderLink = document.createElement('a');
        orderLink.className = 'pedir';
        orderLink.href = wa(name);
        orderLink.textContent = 'Pedir';

        row.append(priceLabel, orderLink);
        card.append(image, title, details, row);
        container.append(card);
    });
};

Object.entries(data).forEach(([containerId, products]) => {
    renderProducts(containerId, products);
});
