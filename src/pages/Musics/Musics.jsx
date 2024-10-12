import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Slug",
    dataIndex: "slug",
    key: "slug",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => <img width="40px" src={image.small} alt="" />,
  },
];

const Musics = (props) => {
  return (
    <div className="max-w-[800px] w-full">
      <h1 className="text-[42px]">Aydym.com</h1>
      <h2>Total: {props.total}</h2>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              console.log(record);
              window.location.href = `/${record.id}`;
            },
          };
        }}
        dataSource={props.musics}
        columns={columns}
        rowKey={(record) => record.id}
      />
      ;
    </div>
  );
};

export default Musics;
