export default function MealsbyIngredientCart() {
  return (
    <div className="w-full max-w-sm rounded-lg shadow bg-gray-800 border-gray-700">
      <a href="/meal.html?id=52874">
        <img
          className="rounded-t-lg"
          src="https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg"
          alt="Beef and Mustard Pie"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Beef and Mustard Pie
          </h5>
        </a>
      </div>
    </div>
  );
}
