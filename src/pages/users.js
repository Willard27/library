import React, { useEffect } from "react";
import { Button, Empty, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, selectUsers } from "../store/slices/user";
import axios from "../utils/http";
function Users() {
  const dispatch = useDispatch();

  const data = useSelector(selectUsers);

  const handleSet = (uid) => {
    axios.post("/user/set_admin", { uid }).then(() => {
      dispatch(getUsers());
    });
  };

  const handleCancel = (uid) => {
    axios.post("/user/cancel_admin", { uid }).then(() => {
      dispatch(getUsers());
    });
  };

  const columns = [
    {
      title: "账号",
      dataIndex: "uid",
      key: "uid",
    },
    {
      title: "名称",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "身份",
      dataIndex: "role",
      key: "role",
      render: (_, record) => {
        return record.role === "admin" ? "管理员" : "普通用户";
      },
      width: 100,
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <div>
          {record.role === "admin" ? (
            <Button
              color="danger"
              variant="text"
              onClick={() => handleCancel(record.uid)}
            >
              {"取消管理员"}
            </Button>
          ) : (
            <Button
              color="primary"
              variant="text"
              onClick={() => handleSet(record.uid)}
            >
              {"设为管理员"}
            </Button>
          )}
        </div>
      ),
      width: 200,
    },
  ];

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        locale={{
          emptyText: <Empty description="暂无用户"></Empty>,
        }}
        scroll={{
          x: "max-content",
          y: 100 * 5,
        }}
      />
    </div>
  );
}

export default Users;
