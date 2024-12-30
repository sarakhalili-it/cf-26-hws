export default function IngredientCart() {
  return (
    <div className="mb-4">
      <a
        href="/mealbying.html?id=Beef"
        className="flex items-center border rounded-lg shadow w-full max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700"
      >
        <img
          className="object-cover h-auto w-48"
          src="https://www.themealdb.com/images/ingredients/Beef.png"
          alt="Beef"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Beef
          </h5>
        </div>
      </a>
    </div>
  );
}
