import Thongtindichgia from "./components/Thongtindichgia";
const RightSection = ({ book }) => {
  return (
    <div className="w-[calc(20%-20px)]">
      <Thongtindichgia book={book} />
    </div>
  );
};

export default RightSection;
