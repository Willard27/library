import { Empty, Input } from "antd";
import Condition from "../components/filter";
const { Search } = Input;
function Find() {
  let id = 0;
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  // const result = [];
  // for (let i = 0; i < result.length; i++) {
  //   result.push({});
  // }
  return (
    <div className="find">
      <div className="search_wrap">
        <div className="search_input_wrap">
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </div>
        <div className="search_cond_wrap">
          <Condition
            attr="editor"
            conds={[
              {
                id: id++,
                value: 1,
                lable: "牛顿",
              },
              {
                id: id++,
                value: 2,
                lable: "高斯",
              },
            ]}
          />
          <Condition
            attr="tag"
            conds={[
              {
                id: id++,
                value: 1,
                lable: "物理",
              },
              {
                id: id++,
                value: 2,
                lable: "计算机",
              },
            ]}
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
