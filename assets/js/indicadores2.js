let data = []

const response = fetch('').then(response => response.json).then(data => console.log(data));
console.log(response)
var options = {
  grid: {
    borderColor: "transparent",
    strokeDashArray: 0,
  },
    series: [{
    name: 'notas',
    data: [100, 200, 300, 400, 500, 600, 1000, 400, 200, 100, 100, 100, 100, 100, 100]
  }],
    chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    colors: ["#282C35"],
    opacity: 1,
    type: "solid",
  },

  xaxis: {
    categories: ["simulado 1", "simulado 1", "simulado 1", "simulado 1", "simulado 1", "simulado 1", "simulado 1", "simulado 1", "simulado 1", "simulado 1", "simulado 1", "simulado 1", "simulado 1", "simulado 1", "simulado 1"],
    position: 'bottom',
    axisBorder: {
      show: true,
      color: "#282C35",
      height: 5,
      width: "100%",
      offsetX: 0,
      offsetY: 0,
      
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#F58E08',
          colorTo: '#F58E08',
          stops: [0, 100],
          opacityFrom: .7,
          opacityTo: .7,
        }
      }
    },
    labels:{
      style: {
        fontSize:["12px"],
      },
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false,
    }
  },
  yaxis: {

    min: 0,
    max: 1000,
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
    },
    
  

  },
  title: {
    text: '',
    floating: true,
    offsetY: -20,
    align: 'center',
    style: {
      color: '#444',
      fontSize: "27px",
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render(); 