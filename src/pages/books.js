import React, { useEffect, useState } from "react";
import {
  Button,
  Empty,
  Form,
  Input,
  InputNumber,
  Modal,
  Table,
  Tag,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { findAll, selectAllBooks } from "../store/slices/booklist";
import { useForm } from "antd/es/form/Form";
import axios from "../utils/http";
function Books() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllBooks);

  const columns = [
    {
      title: "ISBN",
      dataIndex: "ISBN",
      key: "ISBN",
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
    {
      title: "操作",
      key: "operation",
      dataIndex: "operation",
      render: () => (
        <Button color="primary" variant="text">
          {"继续添加"}
        </Button>
      ),
      width: "20px",
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

    await axios.post("/booklist/add_books", values);
    dispatch(findAll());
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(findAll());
  }, [dispatch]);

  return (
    <div>
      <Button className="mb-2" type="primary" onClick={showModal}>
        {"添加图书"}
      </Button>
      <Modal
        title="添加图书"
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
          <Form.Item label="ISBN" name="ISBN">
            <InputNumber />
          </Form.Item>
          <Form.Item label="书名" name="bName">
            <Input />
          </Form.Item>
          <Form.Item label="作者" name="author">
            <Input />
          </Form.Item>
          <Form.Item label="出版社" name="editor">
            <Input />
          </Form.Item>
          <Form.Item label="数量" name="cnt">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={data}
        locale={{
          emptyText: <Empty description="暂无图书"></Empty>,
        }}
        scroll={{
          x: "max-content",
          y: 80 * 5,
        }}
      />
    </div>
  );
}

export default Books;
