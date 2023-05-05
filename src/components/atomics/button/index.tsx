type props = {
  title: string;
};
function Button({ title }: props) {
  return (
    <button className="text-white font-medium text-sm h-8 w-28 px-5 gap-2 rounded-0 bg-black">
      {title}
    </button>
  );
}

export default Button;
