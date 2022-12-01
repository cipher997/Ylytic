chart = new Chart(document.getElementById("myChart").getContext("2d"), {
  data: {
    datasets: [
      {
        type: "line",
        label: "Sum of report.subscribersgained",
        data: [
          168, 441, 361, 2227, 2456, 5325, 5441, 4180, 1669, 498, 200, 401,
          3016, 2021, 901, 654, 957, 768, 862, 1111, 847, 844, 994, 817, 875,
        ],

        borderColor: "#018749",
      },
      {
        type: "bar",
        label: "Sum of report.subscribersGained",
        data: [
          168, 441, 361, 2300, 2564, 5486, 5764, 4272, 1875, 666, 452, 625,
          3265, 2221, 1102, 845, 1036, 899, 999, 1203, 899, 999, 1023, 1062,
          1111,
        ],
        backgroundColor: "#D0F0C0 ",
      },
      {
        type: "bar",
        label: "Sum of report.subscribersLost",
        data: [
          0, -100, -100, -300, -360, -500, -700, -500, -300, -120, -80, -200,
          -250, -100, -250, -120, -100, -200, -120, -100, -200, -120, -100,
          -100, -100, -120,
        ],
        backgroundColor: " #eec0c8",
      },
    ],
    labels: [
      "W14",
      "W15",
      "W16",
      "W17",
      "W18",
      "W19",
      "W20",
      "W21",
      "W22",
      "W23",
      "W24",
      "W25",
      "W26",
      "W27",
      "W28",
      "W29",
      "W30",
      "W31",
      "W32",
      "W33",
      "W34",
      "W35",
      "W36",
      "W37",
      "W38",
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,

        font: {
          size: 1,
        },
      },
    },
    responsive: true,

    scales: {
      x: {
        grid: {
          display: false,
        },

        stacked: true,
      },
      y: {
        grid: {
          display: false,
        },

        stacked: true,
      },
    },
  },
});
