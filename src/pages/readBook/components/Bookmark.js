import React from "react";

const Bookmark = ({ bookmarks }) => {
  return (
    <div>
      <h1 className="mb-4 pt-5 text-center text-3xl text-light-gray">
        Bookmark
      </h1>

      {bookmarks.length > 0 ? (
        <ul>
          {bookmarks.map((bookmark) => (
            <li className="my-2 max-w-fit text-light-gray line-clamp-1 hover:text-blue-600">
              <a href={`#${bookmark}`}>• Đoạn thứ {bookmark}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Bookmark;
