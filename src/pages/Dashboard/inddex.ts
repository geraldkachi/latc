export const barChartData = {
    labels: ["Long", "Short"],
    options: {
      legend: false,
    },
    plugins: {
      options: {
        legend: false,
      },
    },
    datasets: [
      {
        label: "My First Dataset",
        data: [120, 220],
        // barThickness: 32,
        backgroundColor: ["#BBBFC8", "#454C5E"],
        categoryPercentage: 1.0,
        barPercentage: 0.8,
        normalized: true,
      },
    ],
  };

  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
      title: {
        display: false,
      },
    },
  };

  export const lineChartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: "#2684FF",
        backgroundColor: "rgba(38, 132, 255, .3)",
        tension: 0.45,
      },
      {
        label: "My First Dataset",
        data: [22, 16, 45, 33, 22, 22, 30, 16, 45, 33, 22, 22, 30],
        fill: true,
        borderColor: "rgba(244, 83, 103, 1)",
        backgroundColor: "rgba(244, 83, 103, .3)",
        tension: 0.45,
      },
    ],
  };

  export const dashBoardMarkingData = [
    {
      name: "Sean Woodward",
      id: "FVH36YWO5EA",
      bank: "Jeju",
      amount: "32450",
      date: "20/4/2021",
      status: false,
      duration: "3",
    },
    {
      name: "Quinn Crosby",
      id: "BQI84VTU7MS",
      bank: "North Gyeongsang",
      amount: "95905",
      date: "14/10/2021",
      status: true,
      duration: "2",
    },
    {
      name: "Tiger Kirk",
      id: "UQS72EME6QK",
      bank: "North Chungcheong",
      amount: "58485",
      date: "10/3/2023",
      status: true,
      duration: "2",
    },
    {
      name: "Aileen Maldonado",
      id: "ABC57PUE9JR",
      bank: "Jambi",
      amount: "22580",
      date: "26/3/2021",
      status: true,
      duration: "5",
    },
  ];
