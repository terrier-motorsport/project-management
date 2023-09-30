const Sidebar = () => {
  return (
    <div className="bg-black text-white w-56 h-screen p-4">
      <div className="text-xl font-semibold text-red-600 mb-4">
        Terrier Motorsport
      </div>
      <ul>
        <li className="mb-2">
          <a
            href="/"
            className="block w-full rounded-lg px-4 py-2 hover:bg-red-800 hover:text-white transition duration-300"
          >
            Link 1
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/"
            className="block w-full rounded-lg px-4 py-2 hover:bg-red-800 hover:text-white transition duration-300"
          >
            Link 2
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/"
            className="block w-full rounded-lg px-4 py-2 hover:bg-red-800 hover:text-white transition duration-300"
          >
            Link 3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
