const Container = ({ children, size = "max-w-[1640px]" }) => {
  return <div className={`mx-auto px-5 ${size}`}>{children}</div>;
};

export default Container;
