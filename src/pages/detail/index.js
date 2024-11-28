import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redux_book_test, selectCount } from "../../store/slices/book.js";
function Detail() {
  const dispatch = useDispatch();
  const value = useSelector(selectCount);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(redux_book_test({ num: 2 }));
        }}
      >
        修改
      </button>
    </div>
  );
}

export default Detail;
