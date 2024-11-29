import { Input } from "antd";
import Condition from "./components/condition";
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
                id: "assas",
                value: 1,
                lable: "111",
              },
              {
                id: "assasasa",
                value: 2,
                lable: "222",
              },
            ]}
          />
        </div>
      </div>
      <div className="search_result_wrap">查询结果</div>
    </div>
  );
}

export default Find;
