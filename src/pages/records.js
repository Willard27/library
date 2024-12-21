import React, { useState } from "react";
import {
  Button,
  Empty,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Table,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getRecords, selectRecords } from "../store/slices/record";
import { useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import axios from "../utils/http";
function Records() {
  const dispatch = useDispatch();
  const data = useSelector(selectRecords);

  const columns = [
    {
      title: "记录号",
      dataIndex: "rid",
      key: "rid",
    },
    {
      title: "书号",
      dataIndex: "bid",
      key: "bid",
    },
    {
      title: "借阅人",
      dataIndex: "uid",
      key: "uid",
      width: 200,
    },
    {
      title: "负责人",
      dataIndex: "",
      key: "",
      width: 200,
    },
    {
      title: "时间",
      dataIndex: "time",
      key: "time",
      width: 200,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    console.log(form.getFieldsValue());
    const values = form.getFieldsValue();

    if (values.action !== undefined) {
      if (values.action) {
        await axios.post("/record/borrow_books", values);
      } else {
        await axios.post("/record/return_books", values);
      }
    }
    dispatch(getRecords());
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (e) => e.target.value;

  useEffect(() => {
    dispatch(getRecords());
  }, [dispatch]);

  return (
    <div>
      <div className="mb-2">
        <Button className="mr-2" type="primary" onClick={showModal}>
          {"图书出入"}
        </Button>
      </div>
      <Modal
        title="操作"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item label="书号" name="ISBN">
            <Input />
          </Form.Item>
          <Form.Item label="编号" name="bid">
            <Input />
          </Form.Item>
          <Form.Item label="借阅人" name="uid">
            <InputNumber />
          </Form.Item>
          <Form.Item label="借 / 还" name="action">
            <Radio.Group onChange={onChange}>
              <Radio value={true}>借书</Radio>
              <Radio value={false}>还书</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={data}
        locale={{
          emptyText: <Empty description="暂无记录"></Empty>,
        }}
        scroll={{
          x: "max-content",
          y: 80 * 5,
        }}
      />
    </div>
  );
}

export default Records;
