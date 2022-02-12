import ThongTin from "./components/ThongTin";
import Chapter from "./components/Chapter";
const LeftSection = ({ book }) => {
  return (
    <div className="w-[calc(80%-20px)]">
      <ThongTin book={book} />
      <div>
        {new Array(3).fill("").map((_, index) => (
          <Chapter key={index} />
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
