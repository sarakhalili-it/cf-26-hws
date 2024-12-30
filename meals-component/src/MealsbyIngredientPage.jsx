import MealsbyIngredientCart from "./MealsbyIngredientCart";
import Navbar from "./Navbar";
export default function MealsbyIngredientPage() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <main>
        <section>
          <div className="max-w-screen-xl columns-3 mx-auto py-4 flex flex-wrap gap-3 justify-center">
            <MealsbyIngredientCart />
            <MealsbyIngredientCart />
            <MealsbyIngredientCart />
            <MealsbyIngredientCart />
            <MealsbyIngredientCart />
          </div>
        </section>
      </main>
    </div>
  );
}
