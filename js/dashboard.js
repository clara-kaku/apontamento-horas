var donutChart = document.getElementById("donut");
var donut = new Chart(donutChart, {
    type: 'doughnut',
    data: {
        labels: ["Project 1", "Project 2", "Project 3"],
        datasets: [{
            data: [4, 2, 3],
            backgroundColor: [
                'rgba(220, 53, 69, 1)',
                'rgba(145, 39, 171, 1)',
                'rgba(36, 85, 164, 1)'
            ]
        }]
    },
    options: {
        cutoutPercentage: 85,

        legend: {
            position:'bottom',
            labels:{
                pointStyle:'circle',
                usePointStyle:true
            }
        }
    }
});

var barChart = document.getElementById("bar");
var bar = new Chart(barChart, {
    type: 'line',
    data: {
        labels: ["May", "June", "July"],
        datasets: [{
            label: "Project 1",
            data: [10, 20, 45],
            borderColor: [
                'rgba(220, 53, 69, 1)'
            ],
            backgroundColor: [
                'rgba(220, 53, 69, 1)'
            ],
            fill: false
          },
          {
            label: "Project 2",
            data: [2, 8, 5],
            borderColor: [
                'rgba(145, 39, 171, 1)'
            ],
            backgroundColor: [
                'rgba(145, 39, 171, 1)'
            ],
            fill: false
          },
          {
            label: "Project 3",
            data: [35, 5, 10],
            borderColor: [
                'rgba(36, 85, 164, 1)'
            ],
            backgroundColor: [
                'rgba(36, 85, 164, 1)'
            ],
            fill: false
          }],

    },
    options: {
        legend: {
            position:'bottom',
            labels:{
                pointStyle:'circle',
                usePointStyle:true
            }
        },

        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    beginAtZero:true
                }
            }],

            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    }
});
