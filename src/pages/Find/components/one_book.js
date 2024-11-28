function OneBook(params) {
  return (
    <div className="one_book_wrap">
      <h1>{params.name}</h1>
      <p>出版社：{params.editor}</p>
      <p>ISBN：{params.isbn}</p>
    </div>
  );
}
export default OneBook;
