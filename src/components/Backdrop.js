const Backdrop = ({ onClose }) => {
  return (
    <div>
      <div
        className="fixed inset-0 z-40 cursor-pointer bg-gray-700 bg-opacity-75"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default Backdrop;
