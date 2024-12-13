import Rank from "./components/rank";
import BookBlock from "Components/book_block";
import "./index.css";
import { useSelector } from "react-redux";
import { selectTopBooklist } from "../../store/slices/booklist";

function Home(params) {
  const top_booklist = useSelector(selectTopBooklist);

  return (
    <div className="home">
      <div className="recommend-wrap">
        {top_booklist.map((book) => (
          <BookBlock key={book.id} info={book} />
        ))}
      </div>
      <div className="rank-wrap">
        <Rank />
      </div>
    </div>
  );
}

export default Home;
