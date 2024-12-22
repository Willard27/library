import { Card, ConfigProvider, Empty, Input, List, Switch } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findByCondition, selectFindResult } from "../store/slices/booklist";
const { Search } = Input;
function Find() {
  const dispatch = useDispatch();

  const [searchType, setSearchType] = useState("书名");
  const result = useSelector(selectFindResult);
  const onSearch = (value, _e, info) => {
    const condition = searchType === "书名" ? "title" : "tag";
    // console.log(info?.source, value);
    if (info?.source === "input") {
      // console.log("search", value, searchType);
      dispatch(findByCondition({ value, condition }));
    }
  };

  const onchange = (e) =>
    e === true ? setSearchType("书名") : setSearchType("分类");

  useEffect(() => {
    dispatch(findByCondition({ value: "", condition: "title" }));
  }, [dispatch]);

  return (
    <div className="find">
      <div className="search_wrap">
        <div className="mb-2 flex flex-row items-center justify-end">
          <ConfigProvider
            theme={{
              components: {
                Switch: {
                  colorTextQuaternary: "#1677ff",
                  colorTextTertiary: "#1677ff",
                },
              },
            }}
          >
            <Switch
              className="mx-2"
              checkedChildren="书名"
              unCheckedChildren="分类"
              onChange={onchange}
              defaultChecked
            />
          </ConfigProvider>
          <Search
            placeholder="请输入"
            allowClear
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </div>
      </div>
      <div className="">
        {result.length > 0 ? (
          <List
            pagination={{
              position: "bottom",
              align: "end",
              pageSize: 8,
            }}
            grid={{
              gutter: 16,
              column: 4,
            }}
            dataSource={result}
            renderItem={(item) => (
              <ConfigProvider
                theme={{
                  components: {
                    Card: {
                      fontFamily: "serif",
                    },
                  },
                }}
              >
                <List.Item>
                  <Card title={item.bName}>
                    <p className="font-sans text-sm">作者：{item.author}</p>
                    <p className="font-sans text-sm">出版社：{item.editor}</p>
                    <p className="font-sans text-sm">分类：{item.tag}</p>
                  </Card>
                </List.Item>
              </ConfigProvider>
            )}
          />
        ) : (
          <Empty description="换个关键词吧..." />
        )}
      </div>
    </div>
  );
}

export default Find;
