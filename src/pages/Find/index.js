import { Input } from "antd";
import OneBook from "./components/one_book";
const { Search } = Input;
function Find() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const books = [];
  for (let i = 0; i < books.length; i++) {
    books.push({});
  }
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
      <OneBook name="asa" editor="asasa" isbn="1212" />
      <div className="recommend_wrap">books</div>
    </div>
  );
}

export default Find;
