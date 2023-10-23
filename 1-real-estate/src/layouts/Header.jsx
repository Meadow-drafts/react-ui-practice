

export default function Header() {
  return (
    <>
      <header className="relative text-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Logo & Company Name</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center font-semibold justify-center">
            <a className="mr-5 hover:text-gray-900 border-b-2 border-gray-500">Home</a>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">Service</a>
            <a className="mr-5 hover:text-gray-900">Portfolio</a>
            <a className="mr-5 hover:text-gray-900">Blog</a>
            <a className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
}
