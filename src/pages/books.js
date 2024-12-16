import React from "react";
import { Button, Empty, Table, Tag } from "antd";
function Books() {
  const columns = [
    {
      title: "ISBN",
      dataIndex: "isbn",
      key: "isbn",
    },
    {
      title: "书名",
      dataIndex: "bName",
      key: "bName",
    },
    {
      title: "作者",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "出版社",
      dataIndex: "editor",
      key: "editor",
    },
    // 剩余数量
    {
      title: "分类",
      key: "tag",
      dataIndex: "tag",
      render: (tag) => (
        <Tag color="blue" key={tag}>
          {tag}
        </Tag>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tag: "nice",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tag: "loser",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tag: "cool",
    },
  ];
  return (
    <div>
      <Button
        type="primary"
        onClick={(data) => {
          data = [];
        }}
      >
        添加图书
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        locale={{
          emptyText: <Empty description="暂无图书"></Empty>,
        }}
      />
    </div>
  );
}

export default Books;
