var ctx = document.getElementById('bar').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow','Green', 'Purple', 'Orange'],
        datasets: [
            
        {
                label: '# of Votes',
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderWidth: 1
        },
        
    
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


function adddata(chart, label, data) {

}

document.getElementById('btn1').addEventListener('click', () => {
    myChart.data.datasets.forEach((dataset) => {
        dataset.data[0] = dataset.data[0] + 1
        document.getElementById('btn1').textContent = dataset.data[0];
    });
    myChart.update();
})

document.getElementById('btn2').addEventListener('click', () => {
    myChart.data.datasets.forEach((dataset) => {
        dataset.data[1] = dataset.data[1] + 1
        document.getElementById('btn2').textContent = dataset.data[1];
    });
    myChart.update();
})

document.getElementById('btn3').addEventListener('click', () => {
    myChart.data.datasets.forEach((dataset) => {
        dataset.data[2] = dataset.data[2] + 1
        document.getElementById('btn3').textContent = dataset.data[2];
    });
    myChart.update();
})

document.getElementById('btn4').addEventListener('click', () => {
    myChart.data.datasets.forEach((dataset) => {
        dataset.data[3] = dataset.data[3] + 1
        document.getElementById('btn4').textContent = dataset.data[3];
    });
    myChart.update();
})

document.getElementById('btn5').addEventListener('click', () => {
    myChart.data.datasets.forEach((dataset) => {
        dataset.data[4] = dataset.data[4] + 1
        document.getElementById('btn5').textContent = dataset.data[4];
    });
    myChart.update();
})

document.getElementById('btn6').addEventListener('click', () => {
    myChart.data.datasets.forEach((dataset) => {
        dataset.data[5] = dataset.data[5] + 1
        document.getElementById('btn6').textContent = dataset.data[5];
    });
    myChart.update();
})
