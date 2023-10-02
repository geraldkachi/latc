import {
    Chart as ChartJS,
    Title,
    Legend,
    Tooltip,
    BarElement,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
} from "chart.js";
// import { Bar, Line } from "react-chartjs-2";
// import { barChartData, lineChartData, options } from "./inddex";

const Graph = () => {
        ChartJS.register(
          CategoryScale,
          LinearScale,
          BarElement,
          Title,
          Tooltip,
          PointElement,
          LineElement,
          Legend
        );
    return (
        <div className="grid md:grid-cols-2 gap-4">
            <div className="flex w-full flex-row gap-x-4 justify-between mt-4 p-4 max-h-[300px]">
                <div className=" bg-white h-full">
                    <h3 className="border-b py-6 px-4 bg-white font-bold">
                        Ajot Plan
                    </h3>
                    {/* First chart goes here */}
                    <div className="flex-1 flex h-full bg-white p-4">
                        {/* <Bar options={options} data={barChartData} /> */}
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row justify-between border-b bg-white py-6 px-4">
                        <h3 className="font-bold">Financial Graph</h3>
                        <span className="flex flex-row items-center gap-x-1">
                            <p className="text-sm">Range:</p>
                            <button className="text-primary-200 text-sm flex flex-row items-center">
                                Yearly{" "}
                                {/* <BsCaretDownFill
                                    color="#B7BCC2"
                                    className="ml-4"
                                    size={12}
                                /> */}
                            </button>
                        </span>
                    </div>
                    {/* 2nd chart goes here */}
                    <div className="flex-1 flex h-full bg-white p-4">
                        {/* <Line id="lineChart" options={options} data={lineChartData} /> */}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Graph
