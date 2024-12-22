// import Rank from "../components/echarts/rank";
import BookBlock from "../components/book/book-block";
import { useDispatch, useSelector } from "react-redux";
import {
  findTop,
  getBookCount,
  selectBookCount,
  selectTheMostPopularBook,
  selectTopBooks,
} from "../store/slices/booklist";
import { Card, Statistic } from "antd";
import { useEffect } from "react";
import {
  getActiveUser,
  getUserCount,
  selectTheMostActiveUser,
  selectUserCount,
} from "../store/slices/user";

function Home(params) {
  const dispatch = useDispatch();
  const topBooks = useSelector(selectTopBooks);
  const userCount = useSelector(selectUserCount);
  const bookCount = useSelector(selectBookCount);
  const theMostActiveUser = useSelector(selectTheMostActiveUser);
  const theMostPopularBook = useSelector(selectTheMostPopularBook);

  useEffect(() => {
    dispatch(findTop());
    dispatch(getUserCount());
    dispatch(getBookCount());
    dispatch(getActiveUser());
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
            value={userCount}
            valueStyle={{
              color: "#3f8600",
            }}
            suffix="人"
          />
        </Card>
        <Card bordered={false} suffix="%">
          <div className="text-neutral-400">最受欢迎图书</div>
          <div className="text-xl text-red-700">{theMostPopularBook}</div>
        </Card>
        <Card bordered={false}>
          <Statistic
            title="在馆图书"
            value={bookCount}
            precision={2}
            valueStyle={{
              color: "#3f8600",
            }}
            suffix="册"
          />
        </Card>
        <Card bordered={false} suffix="%">
          <div className="text-neutral-400">最活跃用户</div>
          <div className="text-xl text-red-700">{theMostActiveUser}</div>
        </Card>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
