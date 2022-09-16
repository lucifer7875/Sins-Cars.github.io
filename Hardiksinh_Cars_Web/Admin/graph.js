let myChart = document.getElementById("chart").getContext("2d");
// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 15;
// Chart.defaults.global.defaultFontColor = "black";
let massChart = new Chart(myChart, {
  type: "line", // bar , horizontalBar , pie , line , doughnut , radar , polarArea
  data: {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "coustomers in lakhs",
        data: [5, 6, 8, 7.8, 12, 15],
        backgroundColor: "rgba(50 310 100 )",
        //   "rgb(232 152 156)",
        //   "rgb(59 210 115)",
        //   "rgb(184 187 34)",
        //   "rgb(208 93 38)",

        borderWidth: 1,
        borderColor: "#000",
        hoverBorderWidth: 2,
        hoverBorderColor: "rgba(50 310 100 )",
        // hoverBackgroundColor: "",
      },
      {
        label: "selling cars in lakhs",
        data: [1.7, 3.5, 5, 3.8, 8, 11],
        backgroundColor: [
          //   "rgba(50 310 100 )",
          "rgb(232 152 156)",
          //   "rgb(59 210 115)",
          //   "rgb(184 187 34)",
          //   "rgb(208 93 38)",
        ],
        borderWidth: 1,
        borderColor: "#000",
        hoverBorderWidth: 2,
        hoverBorderColor: "#000",
      },
      {
        label: "company valuation in Crore",
        data: [15, 23, 110, 52, 150, 270],
        backgroundColor: [
          //   "rgba(50 310 100 )",
          //   "rgb(232 152 156)",
          //   "rgb(59 210 115)",
          //   "rgb(184 187 34)",
          "rgb(208 93 38)",
        ],
        borderWidth: 1,
        borderColor: "#000",
        hoverBorderWidth: 2,
        hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Student Marks Record Graph ",
      fontSize: 18,
    },
    legend: {
      display: true,
    },
    layout: {
      padding: {
        left: 18,
        right: 20,
        top: 30,
      },
    },
    tooltips: {
      enabled: true,
      backgroundColor: "#000",
    },
  },
});
