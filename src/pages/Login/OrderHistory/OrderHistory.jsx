import { Table } from "antd";
import dayjs from "dayjs";
import React from "react";

const OrderHistory = (ordersHistory) => {
  // const {ordersHistory}=props
  console.log(ordersHistory);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (value, record) => {
        return <img style={{ height: 70, width: 70 }} src={value} alt="" />;
      },
      width: 100,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "shortDescription",
      key: "shortDescription",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total (BE trả lỗi)",
      dataIndex: "",
      key: "total",
      render: (value, record) => {
        return <div>{record.quantity * record.price}</div>;
      },
    },
  ];

  const renderOrder = () => {
    return ordersHistory.orderHistory.map((item) => {
      const dataDetail = item.orderDetail.map((item) => item);
      console.log("dataDetail", dataDetail);
      return (
        <>
          <p>Đặt ngày: {dayjs(item.date).format("DD/MM/YYYY")}</p>
          <Table
            pagination={{ pageSize: 5 }}
            columns={columns}
            dataSource={dataDetail}
          />
        </>
      );
    });
  };
  return ordersHistory?.orderHistory && renderOrder();
};

export default OrderHistory;
