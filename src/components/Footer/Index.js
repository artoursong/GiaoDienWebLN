import Container from '../Container';
const Footer = () => {
  return (
    <div className='bg-gray-700 mt-auto py-4'>
      <Container>
        <div className='flex justify-between'>
          <span className='text-white'>
            © 2016 - 2021 Cổng Light Novel - Trang đọc Light Novel lớn nhất Việt
            Nam
          </span>
          <div>
            <span className='text-white mr-2'>Liên hệ:</span>
            <span className='text-green-600'>abc@gmail.com</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
