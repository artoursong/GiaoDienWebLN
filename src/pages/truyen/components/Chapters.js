import SectionHeader from "components/Section/SectionHeader";
import SectionDivider from "components/Section/SectionDivider";

const Chapters = ({ volumes }) => {
  return (
    <div>
      <div className="mb-5">
        <SectionHeader>Tập truyện</SectionHeader>
      </div>
      {volumes.map((volume) => (
        <div key={volume.id}>
          <div className="mb-5">
            <h3 className="mb-4 rounded-md bg-gray-100 bg-opacity-10 py-2 px-4 text-xl text-[#c9e1f8]">
              {volume.name}
            </h3>
            <div className="flex items-start gap-5">
              <div className="max-w-[200px]">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/715RXAmrh1L.jpg"
                  alt="img2"
                  className="overflow-hidden rounded-md"
                />
              </div>
              {volume.listchapter.length > 0 ? (
                <ul className="max-h-[280px] w-full overflow-auto pr-1">
                  {volume.listchapter.map((chapter) => (
                    <li
                      className="mb-2 flex w-full cursor-pointer justify-between rounded-md py-1 px-2 transition-all last:mb-0 even:bg-gray-50 even:bg-opacity-10 odd:hover:bg-gray-50 odd:hover:bg-opacity-20 even:hover:bg-opacity-20"
                      key={chapter.id}
                    >
                      <span className="text-[#c9e1f8]">{chapter.name}</span>
                      <span className="text-[#c9e1f8]">
                        {new Intl.DateTimeFormat(["ban", "id"]).format(
                          new Date(chapter.create_date)
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
          <div className="text-center">
            <div className="my-5 inline-block h-[2px] w-[200px] bg-gray-50"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chapters;
