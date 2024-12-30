import MealsRecipeCartIngredients from "./MealsRecipeCartIngredients";

export default function MealsRecipeCart() {
  return (
    <div className="max-w-3xl bg-white border border-gray-200 rounded-lg shadow mb-4">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-auto"
          src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
          alt="Teriyaki Chicken Casserole"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Teriyaki Chicken Casserole
          </h5>
        </a>
        <p className="mb-2">
          <a href="#">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded me-2">
              Chicken
            </span>
          </a>
          <a href="#">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded me-2">
              Japanese
            </span>
          </a>
        </p>
        <p className="mb-5 font-normal text-gray-700">
          Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick
          spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and
          garlic in a small saucepan and cover. Bring to a boil over medium
          heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile,
          stir together the corn starch and 2 tablespoons of water in a separate
          dish until smooth. Once sauce is boiling, add mixture to the saucepan
          and stir to combine. Cook until the sauce starts to thicken then
          remove from heat.\r\nPlace the chicken breasts in the prepared pan.
          Pour one cup of the sauce over top of chicken. Place chicken in oven
          and bake 35 minutes or until cooked through. Remove from oven and
          shred chicken in the dish using two forks.\r\n*Meanwhile, steam or
          cook the vegetables according to package directions.\r\nAdd the cooked
          vegetables and rice to the casserole dish with the chicken. Add most
          of the remaining sauce, reserving a bit to drizzle over the top when
          serving. Gently toss everything together in the casserole dish until
          combined. Return to oven and cook 15 minutes. Remove from oven and let
          stand 5 minutes before serving. Drizzle each serving with remaining
          sauce. Enjoy!
        </p>
        <ul>
          <li className="font-bold mb-3 text-xl">Ingredient</li>
          <MealsRecipeCartIngredients />
          <MealsRecipeCartIngredients />
          <MealsRecipeCartIngredients />
          <MealsRecipeCartIngredients />
          <MealsRecipeCartIngredients />
          <MealsRecipeCartIngredients />
          <MealsRecipeCartIngredients />
          <MealsRecipeCartIngredients />
          <MealsRecipeCartIngredients />
        </ul>
      </div>
    </div>
  );
}
