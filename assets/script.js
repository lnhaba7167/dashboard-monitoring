// Script untuk demo dashboard: generate data acak dan update chart setiap 3 detik
const maxPoints = 20;

function makeChart(ctx, label, unit, borderColor) {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({length:maxPoints}, (_,i)=>i - maxPoints + 1),
      datasets: [{
        label: label,
        data: Array(maxPoints).fill(0),
        borderColor: borderColor,
        backgroundColor: 'rgba(0,0,0,0)',
        tension: 0.25,
      }]
    },
    options: {
      animation: false,
      responsive: true,
      scales: {
        x: { display:false },
        y: { beginAtZero:true }
      },
      plugins: { legend: { display: false } }
    }
  });
}

function pushData(chart, value) {
  chart.data.datasets[0].data.push(value);
  while (chart.data.datasets[0].data.length > maxPoints) chart.data.datasets[0].data.shift();
  chart.update();
}

const cpuChart = makeChart(document.getElementById('cpuChart').getContext('2d'), 'CPU %', '%', '#ef4444');
const memChart = makeChart(document.getElementById('memChart').getContext('2d'), 'Memory MB', 'MB', '#0ea5e9');
const reqChart = makeChart(document.getElementById('reqChart').getContext('2d'), 'Requests/min', 'req', '#10b981');

function random(valMin, valMax){ return Math.round((Math.random()*(valMax-valMin)+valMin)*100)/100; }

function update() {
  // contoh nilai acak; ganti dengan fetch ke API nyata jika ada
  pushData(cpuChart, random(10, 85));
  pushData(memChart, random(200, 1200));
  pushData(reqChart, random(5, 250));
}

// inisialisasi beberapa titik awal
for (let i=0;i<maxPoints;i++) update();
// update berkala
setInterval(update, 3000);
