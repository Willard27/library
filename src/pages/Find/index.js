import { Input } from "antd";
const { Search } = Input;
function Find() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="find">
      <div className="search_wrap">
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
      </div>
      <div className="recommend_wrap">books</div>
    </div>
  );
}

export default Find;
