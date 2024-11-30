import Rank from "./components/rank";
import BookBlock from "Components/book_block";
import "./index.css";

function Home(params) {
  const top_book = [
    {
      id: 1,
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
      rate: 10.0,
      tag: "都市",
    },
    {
      id: 2,
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
    },
    {
      id: 3,
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
    },
  ];

  return (
    <div className="home">
      书籍是人类进步的阶梯
      <div className="recommend_wrap">
        {top_book.map((book) => (
          <BookBlock key={book.id} info={book} />
        ))}
      </div>
      <Rank />
    </div>
  );
}

export default Home;
