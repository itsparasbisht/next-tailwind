function SidebarElement({ Icon, text }) {
  return (
    <div className="py-4 px-2 flex flex-col justify-center items-center">
      <Icon className="text-3xl text-white cursor-pointer" />
      <span className="text-white text-xs mt-1 cursor-pointer">{text}</span>
    </div>
  );
}

export default SidebarElement;
