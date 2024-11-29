import { Image } from "antd";

function Detail(params) {
  const info = params.info;
  return (
    <div className="detail">
      <h1>{info.name}</h1>
      <div className="bookinfo_wrap">
        <div className="cover_wrap">
          <Image
            height={250}
            width={160}
            src={!info.src ? "Assets/cover_def.png" : info.src}
          />
        </div>
        <div className="msgList_wrap">
          <span>作者</span>
          <span>出版社</span>
          <span>ISBN</span>
        </div>
      </div>
    </div>
  );
}

export default Detail;
