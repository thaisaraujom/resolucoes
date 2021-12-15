$('#selecao').change(function() {
    window.location = $(this).val();
});

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
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8]
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
    categories: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
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
        fontSize:["20px"],
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
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
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