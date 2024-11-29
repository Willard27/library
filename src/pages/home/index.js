import OneBook from "Components/one_book";
import Rank from "./components/rank";

function Home(params) {
  let key = 0;
  const top_book = [
    {
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
    },
    {
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
    },
    {
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
    },
    {
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
    },
    {
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
    },
    {
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
    },
  ];
  const recommend_list = [];

  for (let i = 0; i < top_book.length; i++) {
    recommend_list.push(<OneBook key={key++} info={top_book[i]} />);
  }
  return (
    <div className="home">
      书籍是人类进步的阶梯
      <div className="recommend_wrap">{recommend_list}</div>
      <Rank />
    </div>
  );
}

export default Home;
