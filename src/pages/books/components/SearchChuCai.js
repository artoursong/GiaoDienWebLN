const danhsachchu = [
  {
    id: 1,
    title: 'Tất cả',
  },
  {
    id: 2,
    title: 'A',
  },
  {
    id: 3,
    title: 'B',
  },
  {
    id: 4,
    title: 'C',
  },
  {
    id: 5,
    title: 'D',
  },
  {
    id: 6,
    title: 'E',
  },
  {
    id: 7,
    title: 'F',
  },
  {
    id: 8,
    title: 'G',
  },
  {
    id: 9,
    title: 'H',
  },
  {
    id: 10,
    title: 'I',
  },
  {
    id: 11,
    title: 'J',
  },
  {
    id: 12,
    title: 'K',
  },
  {
    id: 13,
    title: 'L',
  },
  {
    id: 14,
    title: 'M',
  },
  {
    id: 15,
    title: 'N',
  },
  {
    id: 16,
    title: 'O',
  },
  {
    id: 17,
    title: 'P',
  },
  {
    id: 18,
    title: 'Q',
  },
  {
    id: 19,
    title: 'R',
  },
  {
    id: 20,
    title: 'S',
  },
  {
    id: 21,
    title: 'T',
  },
  {
    id: 22,
    title: 'U',
  },
  {
    id: 23,
    title: 'V',
  },
  {
    id: 24,
    title: 'W',
  },
  {
    id: 25,
    title: 'X',
  },
  {
    id: 26,
    title: 'Y',
  },
  {
    id: 27,
    title: 'Z',
  },
];
const SearchChuCai = () => {
  return (
    <div>
      <div className='flex w-[220px] flex-wrap gap-3 mt-11 shadow-md p-5'>
        {danhsachchu.map(item => (
          <div key={item.id} className='font-semibold cursor-pointer'>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchChuCai;
