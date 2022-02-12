const Card = ({ width = "full", book }) => {

  const handleClick = (bookid) => {
    window.location.href = `truyen/${bookid}`
  }

  return (
    <div className={`${width} relative`} onClick = {() => handleClick(book.iD_Book)}>
      <img
        src="https://en.datosjam.net.pe/wp-content/uploads/2021/09/Jujutsu-Kaisen-manga-reveals-cover-for-volume-17.jpg"
        alt="img2"
      />
      <div className="absolute z-10 bottom-2 left-0 w-full text-center">
        <span className=" text-white font-bold">
          {book ? book.name : "Jujutsu Kaisen"}
        </span>
      </div>
    </div>
  );
};

export default Card;
