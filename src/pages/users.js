import React from "react";
import { Empty, Space, Table, Tag } from "antd";
function Users() {
  const columns = [
    {
      title: "账号",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "名称",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "身份",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    // {
    //   key: "1",
    //   name: "John Brown",
    //   age: 32,
    //   address: "New York No. 1 Lake Park",
    //   tags: ["nice", "developer"],
    // },
    // {
    //   key: "2",
    //   name: "Jim Green",
    //   age: 42,
    //   address: "London No. 1 Lake Park",
    //   tags: ["loser"],
    // },
    // {
    //   key: "3",
    //   name: "Joe Black",
    //   age: 32,
    //   address: "Sydney No. 1 Lake Park",
    //   tags: ["cool", "teacher"],
    // },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        locale={{
          emptyText: <Empty description="暂无用户"></Empty>,
        }}
      />
      ;
    </div>
  );
}

export default Users;
