// import Rank from "../components/echarts/rank";
import BookBlock from "../components/book/book-block";
import { useDispatch, useSelector } from "react-redux";
import { findTop, selectTopBooks } from "../store/slices/booklist";
import { Card, Statistic } from "antd";
import { useEffect } from "react";

function Home(params) {
  const dispatch = useDispatch();
  const topBooks = useSelector(selectTopBooks);

  useEffect(() => {
    dispatch(findTop());
  }, [dispatch]);

  return (
    <div className="flex justify-around">
      <div className="grid grid-cols-4 gap-4">
        {topBooks.map((book) => (
          <BookBlock key={book.ISBN} info={book} />
        ))}
      </div>
      {/* <div className="flex w-2/5 flex-col justify-around"> */}
      {/* <Rank /> */}
      <div className="grid w-1/4 grid-cols-1 gap-4">
        <Card bordered={false}>
          <Statistic
            title="注册用户"
            value={11.28}
            precision={2}
            valueStyle={{
              color: "#3f8600",
            }}
            // prefix={<ArrowUpOutlined />}
            // suffix="%"
          />
        </Card>
        <Card bordered={false}>
          <Statistic
            title="最受欢迎图书"
            value={9.3}
            precision={2}
            valueStyle={{
              color: "#cf1322",
            }}
            // prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
        <Card bordered={false}>
          <Statistic
            title="最活跃用户"
            value={11.28}
            precision={2}
            valueStyle={{
              color: "#3f8600",
            }}
            // prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
        <Card bordered={false}>
          <Statistic
            title="在馆图书"
            value={9.3}
            precision={2}
            valueStyle={{
              color: "#cf1322",
            }}
            // prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
