import React, { useEffect, useState } from "react";
import {
  Button,
  Empty,
  Form,
  Input,
  InputNumber,
  Modal,
  Popover,
  Table,
  Tag,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  findAll,
  selectAddRow,
  selectAllBooks,
  setAddRow,
} from "../store/slices/booklist";
import { useForm } from "antd/es/form/Form";
import axios from "../utils/http";
function Books() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllBooks);
  const addRow = useSelector(selectAddRow);
  const [cnt, setCnt] = useState(0);

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
      render: (_, record) => (
        <Popover content={content} trigger="click">
          <Button
            color="primary"
            variant="text"
            onClick={() => {
              dispatch(setAddRow(record.ISBN));
            }}
          >
            {"继续添加"}
          </Button>
        </Popover>
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
  const onclick = async () => {
    // console.log("qq", addRow, cnt);
    await axios.post("/book/add_books_again", { cnt: cnt, ISBN: addRow });
  };

  const content = (
    <div>
      <InputNumber
        className="mr-2"
        min={1}
        onChange={(value) => setCnt(value)}
      />
      <Button onClick={onclick}>确认</Button>
    </div>
  );

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
