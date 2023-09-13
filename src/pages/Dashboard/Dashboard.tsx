import './styles.css'
import { Table } from "../../components"
import Cards from './Cards'

const renderOrderHead = (item: any, index: number) => (
  <th className="hidden" key={index}>{item}</th>
)

const renderOrderBody = (item: any, index: number) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      {/* <Badge type={orderStatus[item.status]} content={item.status}/> */}
    </td>
  </tr>
)


const latestOrders = {
  header: [
    "order id",
    "user",
    "total price",
    "date",
    "status"
  ],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund"
    }
  ]
}


const Dashboard = () => {
  return (
    <div className="h-full pt-3">
      <div className="text- mb-[18px]">Loan Report Summary</div>
      <div className="flex lg:flex-row flex-col gap-4 sm:gap-x-[23px] mb-10">
        <Cards />
        <Cards />
        <Cards />
      </div>

      <div className="card__body">
        <Table
          headData={latestOrders.header}
          renderHead={(item: any, index: number) => renderOrderHead(item, index)}
          bodyData={latestOrders.body}
          renderBody={(item: any, index: number) => renderOrderBody(item, index)}
        />
      </div>
    </div>
  )
}

export default Dashboard
