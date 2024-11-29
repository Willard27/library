import { Image } from "antd";
import conver_def from "../assets/cover_def.png";

function OneBook(params) {
  const info = params.info;
  return (
    <div className="one_book_wrap">
      <Image height={250} width={160} src={conver_def} />
      <h1>{info.name}</h1>
      <span>{info.author}</span>
      <span>{info.brief_intro}</span>
    </div>
  );
}
export default OneBook;
