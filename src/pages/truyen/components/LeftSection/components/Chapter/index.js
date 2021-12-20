const chapters = [
  {
    title: 'Minh hoa',
    date: '26/09/2019',
  },
  {
    title: 'Mo dau',
    date: '26/09/2019',
  },
  {
    title: 'Chuong mot',
    date: '26/09/2019',
  },
  {
    title: 'Chuong hai',
    date: '26/09/2019',
  },
  {
    title: 'Chuong ba',
    date: '26/09/2019',
  },
];

const Chapter = () => {
  return (
    <div className='mt-6 border'>
      <div className='font-bold text-lg py-2 pl-4 bg-gray-100'>Tập 1</div>
      <div className='mt-3 flex gap-5 p-2'>
        <img
          className='w-[120px]'
          src='https://en.datosjam.net.pe/wp-content/uploads/2021/09/Jujutsu-Kaisen-manga-reveals-cover-for-volume-17.jpg'
          alt='ln'
        />
        <div className='w-full'>
          <ul className='w-full'>
            {chapters.map((chapter, index) => (
              <li
                key={index}
                className='cursor-pointer flex items-center justify-between py-1 even:bg-gray-50 px-4'
              >
                <span>{chapter.title}</span>
                <span className='text-gray-400'>{chapter.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
