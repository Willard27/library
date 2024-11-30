import { StarFilled } from "@ant-design/icons";
import conver_def from "../../assets/cover_def.png";
import "./index.css";

function BookBlock(params) {
  const info = params.info;
  return (
    <div className="book_block_wrap">
      <img src={conver_def} alt="fail to load"></img>
      <span className="h1">{info.name}</span>
      <span className="p2">{info.author}</span>
      <span className="p1">{info.brief_intro}</span>
      <span className="p2">
        <div className="rate">
          <StarFilled />
          {info.rate}
        </div>
        |{info.tag}
      </span>
    </div>
  );
}
export default BookBlock;
