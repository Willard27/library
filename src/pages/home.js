import Rank from "../components/echarts/rank";
import BookBlock from "../components/book/book-block";
import { useSelector } from "react-redux";
import { selectTopBooklist } from "../store/slices/booklist";
import { Card, Statistic } from "antd";

function Home(params) {
  const top_booklist = useSelector(selectTopBooklist);

  return (
    <div className="flex justify-around">
      <div className="grid grid-cols-4 gap-4">
        {top_booklist.map((book) => (
          <BookBlock key={book.id} info={book} />
        ))}
      </div>
      <div className="flex w-2/5 flex-col justify-around">
        <Rank />
        <div className="grid grid-cols-2 gap-4">
          <Card bordered={false}>
            <Statistic
              title="Active"
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
              title="Idle"
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
              title="Active"
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
              title="Idle"
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
      </div>
    </div>
  );
}

export default Home;
