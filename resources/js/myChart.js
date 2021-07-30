///  Calling API and modeling data for each chart ///
const btcData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}


const cosmosData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ATOM&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}


const ethereumData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}


/// Error handling ///
function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

// "July 02","July 04","July 06","July 08","July 10","July 12","July 14","July 16","July 18","July 20","July 22","July 24","July 26","July 28","july 30","July 31"

let mainData = [{
        x: "July 02",
        y: 200
    },
    {
        x: "July 02",
        y: 220
    },
    {
        x: "July 02",
        y: 240
    },
    {
        x: "July 02",
        y: 260
    },
    {
        x: "July 02",
        y: 280
    },
    {
        x: "July 02",
        y: 300
    },
    {
        x: "July 02",
        y: 310
    },
    {
        x: "July 02",
        y: 330
    },
    {
        x: "July 02",
        y: 340
    },
    {
        x: "July 02",
        y: 450
    },
    {
        x: "July 02",
        y: 500
    },
    {
        x: "July 02",
        y: 600
    },
    {
        x: "July 02",
        y: 650
    },
    {
        x: "July 02",
        y: 680
    },
    {
        x: "July 02",
        y: 300
    },
    {
        x: "July 02",
        y: 250
    },
    {
        x: "July 02",
        y: 150
    },
];

/// Charts ///
let createBtcChart
let createCosmosChart
let createethereumChart

async function printBtcChart() {
    let {
        times,
        prices
    } = await btcData()
    // console.log(times);

    let btcChart = document.getElementById('btcChart').getContext('2d');
    btcChart.canvas.parentNode.style.width = "100%";
    // btcChart.canvas.parentNode.style.height = "400px";
    // btcChart.canvas.parentNode.style.height = "300px";
    let gradient = btcChart.createLinearGradient(0, 0, 0, 500);



    gradient.addColorStop(0, 'rgba(247,147,26,.4)');
    gradient.addColorStop(.9, 'rgba(255,193,119,0.0)');

    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;

    createBtcChart = new Chart(btcChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: "Price  ",
                data: prices,
                backgroundColor: gradient,
                borderColor: 'rgba(247,147,26,1)',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
        },

        options: {
            title: {
                display: false,
                text: 'Heckin Chart!',
                fontSize: 35
            },

            legend: {
                display: false,
                fullWidth: true,
                width: 500
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
            },

            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontSize: 14,
                        fontColor: 'rgba(0, 0, 0, 1)',
                        fontFamily: 'DM Sans',
                        marginTop: 10
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {},
                    ticks: {
                        fontSize: 14,
                        fontColor: 'rgba(0, 0, 0, 1)',
                        fontFamily: 'DM Sans',
                        marginTop: 10
                    }
                }]
            },
            hover: {
                mode: "nearest",
                intersect: true
            },

            tooltips: {
                enabled: false,
                usePointStyle: true,
                callbacks: {
                    labelPointStyle: function (context) {
                        return {
                            pointStyle: 'circle',
                            rotation: 0
                        };
                    }
                },
                bodyAlign: "center",
                custom: function (tooltipModel) {
                    // Tooltip Element
                    var tooltipEl = document.getElementById('chartjs-tooltip');

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        tooltipEl.innerHTML = '<table></table>';
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set caret Position
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    // Set Text
                    if (tooltipModel.body) {
                        var titleLines = tooltipModel.title || [];
                        var bodyLines = tooltipModel.body.map(getBody);

                        var innerHtml = '<thead>';

                        titleLines.forEach(function (item) {

                            innerHtml += '<tr><th>' + item + '</th></tr>';
                        });
                        innerHtml += '</thead><tbody>';

                        bodyLines.forEach(function (body, i) {
                            var colors = tooltipModel.labelColors[i];
                            var style = 'background:' + colors.backgroundColor;
                            style += '; border-color:' + colors.borderColor;
                            style += '; border-width: 2px';
                            var span = '<span style="' + style + '"></span>';
                            innerHtml += '<tr><td>' + span + body + '</td></tr>';
                        });
                        innerHtml += '</tbody>';

                        var tableRoot = tooltipEl.querySelector('table');
                        tableRoot.innerHTML = innerHtml;
                    }

                    // `this` will be the overall tooltip
                    var position = this._chart.canvas.getBoundingClientRect();

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 10 + 'px';
                    // tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 30 + 'px';
                    tooltipEl.style.fontFamily = "DM sans";
                    tooltipEl.style.fontSize = 1.5 + 'rem';
                    tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                    // tooltipEl.style.backgroundColor = '#fff';
                    tooltipEl.style.backgroundColor = localStorage.getItem("theme") === "dark" ? "rgba(24, 26, 30, 1)" : "#fff";
                    tooltipEl.style.boxShadow = '6px 7px 34px rgba(25, 11, 75, 0.1)';
                    tooltipEl.style.borderRadius = '7px';
                    tooltipEl.style.color = localStorage.getItem("theme") === "dark" ? "#fff" : "#000000";

                },


                callbacks: {
                    label: function (tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ' : $';
                        }
                        label += Math.round(tooltipItem.yLabel * 100) / 100;
                        return label;
                    }

                },
                //this removes legend color
                displayColors: false,
                yPadding: 10,
                xPadding: 10,
                //   position: 'nearest',
                caretSize: 10,
                backgroundColor: 'rgba(255,255,255,.9)',
                bodyFontSize: 15,
                bodyFontColor: '#303030'
            }
        }
    });
}


/*
async function printCosmosChart() {
    let {
        times,
        prices
    } = await cosmosData()

    let cosmosChart = document.getElementById('cosmosChart').getContext('2d');

    let gradient = cosmosChart.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(27,30,54,.5)');
    gradient.addColorStop(.425, 'rgba(46,49,72,0)');

    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;

    createCosmosChart = new Chart(cosmosChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: "",
                data: prices,
                backgroundColor: gradient,
                borderColor: 'rgba(46,49,72,1)',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
        },

        options: {
            title: {
                display: false,
                text: 'Heckin Chart!',
                fontSize: 35
            },

            legend: {
                display: false
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {}
                }],
                yAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },

            tooltips: {
                callbacks: {
                    //This removes the tooltip title
                    title: function () {}
                },
                //this removes legend color
                displayColors: false,
                yPadding: 10,
                xPadding: 10,
                position: 'nearest',
                caretSize: 10,
                backgroundColor: 'rgba(255,255,255,.9)',
                bodyFontSize: 15,
                bodyFontColor: '#303030'
            }
        }
    });
}


async function printEthereumChart() {
    let {
        times,
        prices
    } = await ethereumData()

    // let ethereumChart = document.getElementById('ethereumChart').getContext('2d');

    // let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);

    // gradient.addColorStop(0, 'rgba(78,56,216,.5)');
    // gradient.addColorStop(.425, 'rgba(118,106,192,0)');

    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;

    createEthereumChart = new Chart(ethereumChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: 'rgba(118,106,192,1)',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
        },

        options: {
            title: {
                display: false,
                text: 'Heckin Chart!',
                fontSize: 35
            },

            legend: {
                display: false
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {}
                }],
                yAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },

            tooltips: {
                callbacks: {
                    //This removes the tooltip title
                    title: function () {}
                },
                //this removes legend color
                displayColors: false,
                yPadding: 10,
                xPadding: 10,
                position: 'nearest',
                caretSize: 10,
                backgroundColor: 'rgba(255,255,255,.9)',
                bodyFontSize: 15,
                bodyFontColor: '#303030'
            }
        }
    });
}


/// Update current price ///
async function updateEthereumPrice() {
    let {
        times,
        prices
    } = await ethereumData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    // document.getElementById("ethPrice").innerHTML = "$" + currentPrice;
}

async function updateCosmosPrice() {
    let {
        times,
        prices
    } = await cosmosData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    // document.getElementById("atomPrice").innerHTML = "$" + currentPrice;
}

async function updateBitcoinPrice() {
    let {
        times,
        prices
    } = await btcData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    // document.getElementById("btcPrice").innerHTML = "$" + currentPrice;
}
updateEthereumPrice()
updateCosmosPrice()
updateBitcoinPrice()

printCosmosChart()
printEthereumChart()
*/
printBtcChart()