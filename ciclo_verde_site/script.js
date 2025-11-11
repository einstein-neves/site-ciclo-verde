// Menu responsivo
function toggleMenu() {
  document.querySelector('.menu').classList.toggle('active');
}

// Gráfico de pedidos
const ctx = document.getElementById('graficoPedidos').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
      'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ],
    datasets: [{
      label: 'Pedidos Enviados',
      data: [50, 70, 60, 90, 120, 150, 180, 130, 160, 140, 110, 200],
      backgroundColor: '#2e8b57'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Mapa interativo com Leaflet
const map = L.map('map').setView([-15.7801, -47.9292], 4); // Brasil
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Marcador exemplo
const marker = L.marker([-7.8031389,-35.6957075,369305]).addTo(map); /*  latitude e logetud de recife ^^ */
marker.bindPopup("🚚 Pedido em trânsito - recife-PE").openPopup();
