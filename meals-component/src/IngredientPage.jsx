import IngredientCart from "./IngredientCart";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
export default function IngredientPage() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <main className="mb-8">
        <div className="max-w-screen-xl columns-3 mx-auto py-4">
          <IngredientCart />
          <IngredientCart />
          <IngredientCart />
          <IngredientCart />
          <IngredientCart />
          <IngredientCart />
        </div>
        <div className="max-w-screen-xl mx-auto my-4">
          <Pagination />
        </div>
      </main>
    </div>
  );
}
