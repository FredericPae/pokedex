// Chart construction

function renderChart(j) {
const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                "HP", 
                "Attack",
                "Defense",
                "Sp. Atk",
                "Sp. Def",
                "Speed",
        ],
            datasets: [{
            label: '# of Votes',
            barThickness: 4,
            data: [
                stats[`${j}`]['0']['base_stat'],
                stats[`${j}`]['1']['base_stat'],
                stats[`${j}`]['2']['base_stat'],
                stats[`${j}`]['3']['base_stat'],
                stats[`${j}`]['4']['base_stat'],
                stats[`${j}`]['5']['base_stat']
            ],    
            backgroundColor: function(context) {
                const value = context.dataset.data[context.dataIndex];
                return value < 50 ? 'rgba(252, 108, 108)' : 'rgba(70, 209, 177)'; // Rot für Werte unter 50, sonst Blau
            },
            },
            {
                label: 'Background',
                data: new Array(stats.length).fill(180),
                backgroundColor: 'rgb(234, 234, 234)',
                barThickness: 4, // Stellen Sie die Dicke nach Bedarf ein
            },
            ]
    },
        options: {
        layout: {
            height: 200,
        },
        plugins: {
            legend: {
                display: false // Schaltet die Anzeige der Legende aus
            }
        },
        indexAxis: 'y',
        scales: {
            y: {
                stacked: true,
                beginAtZero: true,
                grid: {
                    display: false, // Blendet die Gitterlinien der y-Achse aus
                },
                border: {
                    display: false
                },
                ticks: {
                    crossAlign: "far",
                    callback: function(val, index) {
                        // Zugriff auf den Wert aus dem Dataset
                        const value = this.chart.data.datasets[0].data[index];
                        return this.getLabelForValue(val) + ' (' + value + ')';
                    },
                    autoSkip: false, // Verhindert das automatische Ausblenden von Labels
                    maxRotation: 0,   // Verhindert die Rotation der Labels
                    minRotation: 0,
                    font: {
                        size: 14,
                        // weight: 'bold' // Setzt die Schriftstärke auf 'bold'
                    }
                }
            },
            x: {
                categoryPercentage: 1,  // Nutzt 100% der verfügbaren Breite für die Kategorie
                barPercentage: 1,
                grid: {
                    drawTicks: false,
                    display: false, // Blendet die Gitterlinien der x-Achse aus
                },
                border: {
                    display: false
                },
                ticks: {
                    display: false,
                }
            }
        }
        }
    });
}