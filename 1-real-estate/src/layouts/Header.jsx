

export default function Header() {
  return (
    <>
      <header className="relative text-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="w-1/3 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl">Logo & Company Name</span>
          </a>
          <nav className="md:ml-auto w-1/2 text-lg flex flex-wrap items-center font-bold justify-around">
            <a className=" hover:text-gray-900 border-b-2 border-gray-500">Home</a>
            <a className=" hover:text-gray-900">About</a>
            <a className="hover:text-gray-900">Service</a>
            <a className=" hover:text-gray-900">Portfolio</a>
            <a className=" hover:text-gray-900">Blog</a>
            <a className=" hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
}
