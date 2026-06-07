// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// );

// export const AgeBarChart = () => {
//   const users = [
//     { name: "ali", gender: "male", age: 19 },
//     { name: "ayesha", gender: "female", age: 24 },
//     { name: "aliyan", gender: "male", age: 54 },
//     { name: "aiza", gender: "female", age: 34 },
//     { name: "aliza", gender: "female", age: 64 },
//     { name: "khan", gender: "male", age: 23 },
//     { name: "sami", gender: "male", age: 18 },
//   ];

//   let EighteenTo25 = users.filter(
//     (user) => user.age >= 18 && user.age <= 25,
//   ).length;
//   let twentyFiveTo35 = users.filter(
//     (user) => user.age >= 25 && user.age < 35,
//   ).length;
//   let moreThan35 = users.filter((user) => user.age > 35).length;
//   console.log(EighteenTo25, twentyFiveTo35);
//   let data = {
//     labels: ["18 to 25", "25 to 35", "35+"], //how many bars on x axis
//     datasets: [
//       //how many representations
//       {
//         label: "Pakistan",
//         data: [EighteenTo25, twentyFiveTo35, moreThan35],
//         backgroundColor: "orange",
//       },
//       { label: "Iran", data: [2, 3, 5], backgroundColor: "green" },
//     ],
//   };
//   return (
//     <div style={{ width: "500px", height: "500px" }}>
//       <Bar data={data}></Bar>
//     </div>
//   );
// };
