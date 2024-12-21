import { ConfigProvider, Empty, Input, Switch } from "antd";
const { Search } = Input;
function Find() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  // const result = [];
  // for (let i = 0; i < result.length; i++) {
  //   result.push({});
  // }
  return (
    <div className="find">
      <div className="search_wrap">
        <div className="flex flex-row items-center justify-end">
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
      <div className="search_result_wrap">
        <Empty />
      </div>
    </div>
  );
}

export default Find;
