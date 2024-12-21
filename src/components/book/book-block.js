import { StarFilled } from "@ant-design/icons";
import def_cover from "../../assets/def-cover.png";

function BookBlock(params) {
  const info = params.info;
  return (
    <div className="flex h-1/2 w-36 flex-col">
      <img className="max-w-none" src={def_cover} alt="fail to load"></img>
      <span className="text-base">{info.bName}</span>
      <span className="text-xs text-slate-500">{info.author}</span>
      <span className="h-8 text-xs">{info.editor}</span>
      <span className="text-xs text-slate-500">
        <div className="inline-block text-yellow-400">
          <StarFilled />
          {info.rate}
        </div>
        |{info.tag}
      </span>
    </div>
  );
}
export default BookBlock;
