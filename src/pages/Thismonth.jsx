import { useState } from "react";
import { PieChart, Pie, Text } from 'recharts'
import { ActionButton } from "../components/ActionButton";

export const Thismonth = () => {
  
  const [category, setCategory] = useState("");
  const [price, setPrice] =useState("");
  const [payments, setPayments] = useState([]);

  const onChangePayment = (event) => {
    setCategory(event.target.value);
  }

  const onChangePayment2 = (event) => {
    setPrice(event.target.value);
  }

  const getData = () => {
    const newPayment = {
      category: category,
      price: price
    }
    setPayments([newPayment, ...payments]);
  };

  
  // const label = ({ category, price, cx, x, y }) => {
  //   const textAnchor = x > cx ? "start" : "end";
  //   return (
  //     <>
  //       <Text x={x} y={y} textAnchor={textAnchor} fill="#82ca9d">
  //         {category}
  //       </Text>
  //       <Text
  //         x={x}
  //         y={y}
  //         dominantBaseline="hanging"
  //         textAnchor={textAnchor}
  //         fill="#82ca9d"
  //       >
  //         {price}
  //       </Text>
  //     </>
  //   );
  // };

  return (
    <>
      <p>支出を登録する</p>
      費目：<input type="text" onChange={onChangePayment}/><br />
      金額：<input type="text" onChange={onChangePayment2}/>円<br />
      <ActionButton text="登録する" action={() => getData()} />

      <table>
        <thead>
          <tr>
            <th>費目</th>
            <th>金額(円)</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((x, i) => (
            <tr key={i}>
              <td>{x.category}</td>
              <td>{x.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <PieChart width={500} height={300}>
        <Pie data={payments} dataKey="price" cx="50%" cy="50%" outerRadius={100} fill="#black"/>
      </PieChart> */}
    </>
  );
};

