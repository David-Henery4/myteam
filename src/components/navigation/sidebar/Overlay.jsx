

const Overlay = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <div
      className={`fixed z-10 top-0 left-0 w-full h-screen bg-realBlack/50 ${
        isSidebarOpen ? "tab:hidden" : "hidden"
      }`}
      onClick={() => {
        setIsSidebarOpen(false);
      }}
    ></div>
  );
};

export default Overlay