import MealsRecipeCart from "./MealsRecipeCart";
import Navbar from "./Navbar";
export default function MealsRecipePage() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <main>
        <section className="flex justify-center mt-8">
          <MealsRecipeCart />
        </section>
      </main>
    </div>
  );
}
