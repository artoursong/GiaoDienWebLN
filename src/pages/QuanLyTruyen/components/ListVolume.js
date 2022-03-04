import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import bookService from "api/truyenAPI";
import StraightLine from "components/StraightLine";
import Line from "components/CurveLine";

const ListVolume = ({ volume, setTruyen }) => {
  const [hide, setHide] = useState(false);
  const params = useParams();
  const handleDeleteVolume = async (id) => {
    const response = await bookService.deleteVolume(id);

    if (response.status === 200 && response.data) {
      setTruyen((prev) => ({
        ...prev,
        volumes: prev.volumes.filter((volume) => volume.id !== id),
      }));
    }
  };

  const handleDeleteChapter = async (id) => {
    const response = await bookService.deleteChapter(id);

    if (response.status === 200) {
      setTruyen((prev) => ({
        ...prev,
        volumes: prev.volumes.map((volume) =>
          response.data.id === volume.id ? { ...response.data } : volume
        ),
      }));
    }
  };

  return (
    <ul className="text-[#cbdff3]">
      <li className="relative block">
        <div className="flex h-[50px] cursor-pointer items-center rounded-md hover:bg-gray-700 hover:bg-opacity-25">
          <div
            onClick={() => setHide((prev) => !prev)}
            className="flex cursor-pointer items-center"
          >
            {hide ? volume.listchapter.length > 0 ? <Line /> : null : null}
            <span className="min-w[18px] pointer-events-none block h-[18px] min-h-[18px] w-[18px]"></span>
            <div
              className={`${
                hide ? "bg-sky-500" : "bg-gray-500"
              } h-[12px] w-[12px] min-w-[12px] rounded-full `}
            ></div>
            <span className="min-w[16px] pointer-events-none block h-[16px] min-h-[16px] w-[16px]"></span>
            Hello
          </div>
          <div className="ml-auto mr-4 flex items-center gap-2">
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
          className={`relative -translate-y-[8px] transform  gap-2 transition-all ${
            hide ? "visible opacity-100" : "invisible h-0 opacity-0"
          }`}
        >
          {volume.listchapter.length > 0
            ? volume.listchapter.map((chapter, index) => {
                return (
                  <>
                    {index !== volume.listchapter.length - 1 ? (
                      <>
                        {index === 0 ? (
                          <StraightLine
                            top={`${43 * (index + 1)}px`}
                            left={"53px"}
                          />
                        ) : (
                          <StraightLine
                            top={`${43 * (index + 1) + 7 * index}px`}
                            left={"53px"}
                          />
                        )}
                      </>
                    ) : null}

                    <li
                      key={chapter.id}
                      className="flex h-[50px] cursor-pointer items-center rounded-md hover:bg-gray-700 hover:bg-opacity-25"
                    >
                      <span className="pointer-events-none block h-[47px] min-h-[47px] w-[47px] min-w-[47px]"></span>
                      <div
                        className={`h-[12px] w-[12px] min-w-[12px] rounded-full ${
                          hide ? "bg-sky-500" : "bg-gray-500"
                        }`}
                      ></div>
                      <span className="min-w[16px] pointer-events-none block h-[16px] min-h-[16px] w-[16px]"></span>
                      {chapter.name}

                      <BsTrash
                        onClick={() => handleDeleteChapter(chapter.id)}
                        className="ml-auto mr-4 text-lg hover:text-blue-500"
                      />
                    </li>
                  </>
                );
              })
            : null}
        </ul>
      </li>
    </ul>
  );
};

export default ListVolume;
