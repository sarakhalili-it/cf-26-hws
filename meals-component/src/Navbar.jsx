export default function Navbar() {
  return (
    <nav className="bg-gray-800 border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Meals DB
          </span>
        </a>

        <div className="w-auto">
          <ul className="flex font-medium rounded-lg space-x-8 flex-row mt-0 bg-gray-800 dark:bg-transparent">
            <li>
              <a
                href="/index.html"
                className="block p-0 rounded bg-transparent text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/ings.html"
                className="block p-0 rounded text-white hover:text-blue-500"
              >
                Ingredients
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
