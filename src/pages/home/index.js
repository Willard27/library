import Rank from "./components/rank";
import BookBlock from "../../components/book_block";
import "./index.css";
import { useSelector } from "react-redux";
import { selectTopBooklist } from "../../store/slices/booklist";

function Home(params) {
  const top_booklist = useSelector(selectTopBooklist);

  return (
    <div className="flex justify-around">
      <div className="grid grid-cols-3 gap-4">
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
