import SectionHeader from "components/Section/SectionHeader";
import SectionDivider from "components/Section/SectionDivider";

const Chapters = () => {
  return (
    <div>
      <div className="mb-5">
        <SectionHeader>Tập truyện</SectionHeader>
      </div>
      <div className="mb-5">
        <h3 className="mb-4 rounded-md bg-gray-100 bg-opacity-10 py-2 px-4 text-xl text-[#c9e1f8]">
          Tập 1
        </h3>
        <div className="flex items-start gap-5">
          <div className="max-w-[200px]">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/715RXAmrh1L.jpg"
              alt="img2"
              className="overflow-hidden rounded-md"
            />
          </div>
          <div className="w-full">
            <ul className="max-h-[280px] w-full overflow-auto pr-1">
              {new Array(10).fill("1").map((_, index) => (
                <li
                  className="mb-2 flex w-full cursor-pointer justify-between rounded-md py-1 px-2 transition-all last:mb-0 even:bg-gray-50 even:bg-opacity-10 odd:hover:bg-gray-50 odd:hover:bg-opacity-20 even:hover:bg-opacity-20"
                  key={index}
                >
                  <span className="text-[#c9e1f8]">Chương {index + 1}</span>
                  <span className="text-[#c9e1f8]">02/12/2022</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="my-5 inline-block h-[2px] w-[200px] bg-gray-50"></div>
      </div>

      <div>
        <h3 className="mb-4 rounded-md bg-gray-100 bg-opacity-10 py-2 px-4 text-xl text-[#c9e1f8]">
          Tập 2
        </h3>
        <div className="flex items-start gap-5">
          <div className="max-w-[200px]">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/715RXAmrh1L.jpg"
              alt="img2"
              className="overflow-hidden rounded-md"
            />
          </div>
          <div className="w-full">
            <ul className="max-h-[280px] w-full overflow-auto pr-1">
              {new Array(10).fill("1").map((_, index) => (
                <li
                  className="mb-2 flex w-full cursor-pointer justify-between rounded-md py-1 px-2 transition-all last:mb-0 even:bg-gray-50 even:bg-opacity-10 odd:hover:bg-gray-50 odd:hover:bg-opacity-20 even:hover:bg-opacity-20"
                  key={index}
                >
                  <span className="text-[#c9e1f8]">Chương {index + 1}</span>
                  <span className="text-[#c9e1f8]">02/12/2022</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="my-5 inline-block h-[2px] w-[200px] bg-gray-50"></div>
      </div>
      <div>
        <h3 className="mb-4 rounded-md bg-gray-100 bg-opacity-10 py-2 px-4 text-xl text-[#c9e1f8]">
          Tập 3
        </h3>
        <div className="flex items-start gap-5">
          <div className="max-w-[200px]">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/715RXAmrh1L.jpg"
              alt="img2"
              className="overflow-hidden rounded-md"
            />
          </div>
          <div className="w-full">
            <ul className="max-h-[280px] w-full overflow-auto pr-1">
              {new Array(10).fill("1").map((_, index) => (
                <li
                  className="mb-2 flex w-full cursor-pointer justify-between rounded-md py-1 px-2 transition-all last:mb-0 even:bg-gray-50 even:bg-opacity-10 odd:hover:bg-gray-50 odd:hover:bg-opacity-20 even:hover:bg-opacity-20"
                  key={index}
                >
                  <span className="text-[#c9e1f8]">Chương {index + 1}</span>
                  <span className="text-[#c9e1f8]">02/12/2022</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapters;
