import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import bookService from "api/truyenAPI";
import StraightLine from "components/StraightLine";
import Line from "components/CurveLine";

const ListVolume = ({ volume, setTruyen }) => {
  const [show, setShow] = useState(false);
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
      <li className="relative block" onClick={() => setShow((prev) => !prev)}>
        <div className="flex h-[50px] cursor-pointer items-center rounded-md hover:bg-gray-700 hover:bg-opacity-25">
          <div className="flex cursor-pointer items-center">
            {show ? (
              volume.listchapter && volume.listchapter.length > 0 ? (
                <Line />
              ) : null
            ) : null}
            <span className="min-w[18px] pointer-events-none block h-[18px] min-h-[18px] w-[18px]"></span>
            <div
              className={`${
                show || +params.volumeId === volume.id
                  ? "bg-indigo-500"
                  : "bg-gray-500"
              } h-[12px] w-[12px] min-w-[12px] rounded-full `}
            ></div>
            <span className="min-w[16px] pointer-events-none block h-[16px] min-h-[16px] w-[16px]"></span>
            {volume.name}{" "}
            {`(${(volume.listchapter && volume.listchapter.length) || 0})`}
          </div>
          <div className="ml-auto mr-4 flex items-center gap-4">
            <Link
              onClick={(event) => event.stopPropagation()}
              className="hover:text-indigo-500"
              to={`${volume.id}/create`}
            >
              Thêm
            </Link>
            <Link
              onClick={(event) => event.stopPropagation()}
              className="hover:text-yellow-500"
              to={`${volume.id}/edit`}
            >
              Sửa
            </Link>

            <button
              className="hover:text-red-600"
              onClick={(event) => {
                event.stopPropagation();
                handleDeleteVolume(volume.id);
              }}
            >
              Xóa
            </button>
          </div>
        </div>
        <ul
          className={`relative -translate-y-[8px] transform gap-2 ${
            show ? "visible" : "invisible h-0"
          }`}
        >
          {volume.listchapter && volume.listchapter.length > 0
            ? volume.listchapter.map((chapter, index) => {
                return (
                  <>
                    {index !== volume.listchapter.length - 1 ? (
                      <>
                        {index === 0 ? (
                          <StraightLine
                            top={`${43 * (index + 1)}px`}
                            left={"53px"}
                            key={index}
                          />
                        ) : (
                          <StraightLine
                            top={`${43 * (index + 1) + 7 * index}px`}
                            left={"53px"}
                            key={index}
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
                          show ? "bg-indigo-600" : "bg-gray-500"
                        }`}
                      ></div>
                      <span className="pointer-events-none block h-[16px] min-h-[16px] w-[16px] min-w-[16px]"></span>
                      {chapter.name}

                      <button
                        className="ml-auto mr-4 hover:text-red-600"
                        onClick={() => handleDeleteChapter(chapter.id)}
                      >
                        Xóa
                      </button>
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
