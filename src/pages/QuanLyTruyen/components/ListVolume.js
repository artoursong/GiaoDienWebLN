import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import bookService from "api/truyenAPI";

const ListVolume = ({ volume, setTruyen }) => {
  const [hide, setHide] = useState(false);
  const handleDeleteVolume = async (id) => {
    const response = await bookService.deleteVolume(id);

    if (response.status === 200 && response.data) {
      setTruyen((prev) => ({
        ...prev,
        volumes: prev.volumes.filter((volume) => volume.id !== id),
      }));
    }
  };

  return (
    <ul className="text-[#cbdff3]">
      <li className="block py-2">
        <div className="flex cursor-pointer items-center justify-between">
          <h2
            className="text-lg font-semibold before:mr-2 before:content-['•'] hover:text-blue-500"
            onClick={() => setHide((prev) => !prev)}
          >
            {volume.name}{" "}
            {volume.listchapter ? (
              <span className="ml-2 text-sm">{`(Có ${volume.listchapter.length} chương)`}</span>
            ) : null}
          </h2>
          <div className="flex items-center gap-2">
            <Link to={`volume/${volume.id}/edit`}>
              <FaPencilAlt className="text-base transition-all hover:text-blue-500" />
            </Link>

            <Link to={`volume/${volume.id}/create`}>
              <AiOutlinePlus className="text-base transition-all hover:text-blue-500" />
            </Link>

            <BsTrash
              onClick={() => handleDeleteVolume(volume.id)}
              className="text-lg hover:text-blue-500"
            />
          </div>
        </div>
        <ul
          className={`relative mt-2 ml-4 flex list-inside flex-col gap-2 transition-all ${
            hide ? "visible opacity-100" : "invisible h-0 opacity-0"
          }`}
        >
          {volume.listchapter && volume.listchapter.length > 0
            ? volume.listchapter.map((chapter) => (
                <li
                  key={chapter.id}
                  className="max-w-max cursor-pointer line-clamp-1 before:mr-2 before:content-['+'] hover:text-blue-500"
                >
                  {chapter.name}
                </li>
              ))
            : "Chưa có chapter nào"}
        </ul>
      </li>
    </ul>
  );
};

export default ListVolume;
