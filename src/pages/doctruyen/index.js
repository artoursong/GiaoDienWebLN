import { useEffect, useState } from "react/cjs/react.development";
import bookService from "api/truyenAPI";
import { BsFillBookmarkFill } from "react-icons/bs";

const DocTruyen = () => {
  const [data, setData] = useState(null);
  const [bookMark, setBookmark] = useState([]);

  function createMarkup(content) {
    return { __html: content };
  }

  const handleSetBookmark = (id) => {
    setBookmark((prev) => prev.concat(id));
  };

  useEffect(() => {
    const fetchTruyen = async () => {
      const response = await bookService.getChapter(12);

      if (response.status === 200) {
        setData(response.data);
      }
    };

    fetchTruyen();
  }, []);

  return (
    <div className="flex items-start">
      <div className="sticky top-2 flex w-[20%] flex-col gap-2">
        {bookMark.length > 0 ? (
          bookMark.map((mark) => <a href={`#${mark}`}>Bookmark {mark}</a>)
        ) : (
          <p>Chưa có bookmark</p>
        )}
      </div>
      <div className="w-[80%]">
        {data !== null ? (
          <div>
            <h2>{data.name}</h2>

            {data.contentchapter.map((paragraph) => (
              <div className="flex items-center py-2">
                <p
                  id={paragraph.id}
                  dangerouslySetInnerHTML={createMarkup(paragraph.content)}
                ></p>
                {""} Dòng {paragraph.id}
                <BsFillBookmarkFill
                  className="cursor-pointer text-lg hover:text-blue-500"
                  onClick={() => handleSetBookmark(paragraph.id)}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DocTruyen;
