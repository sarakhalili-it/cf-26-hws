const renderIngredient = (meals = {}) => {
  const Ingredient = {};
  for (let i = 1; i <= 20; i++) {
    if (meals["strIngredient" + i]) {
      Ingredient["strIngredient" + i] = meals["strIngredient" + i];
      Ingredient["strMeasure" + i] = meals["strMeasure" + i];
    }
  }
  return Ingredient;
};

function renderList(obj) {
  let result = "";
  for (let i = 1; i <= Object.keys(obj).length / 2; i++) {
    result += `<li class="list-none ms-2 mb-1">${obj["strIngredient" + i]} - ${
      obj["strMeasure" + i]
    }</li>`;
  }
  return result;
}
const renderMeal = (meal = {}) => {
  const { strMeal, strMealThumb, strInstructions, strCategory, strArea } = meal;
  document.getElementById("app").innerHTML = ` <div
class="max-w-3xl bg-white border border-gray-200 rounded-lg shadow mb-4"
>
<a href="#">
  <img
    class="rounded-t-lg w-full h-auto"
    src="${strMealThumb}"
    alt="${strMeal}"
  />
</a>
<div class="p-5">
  <a href="#">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
    ${strMeal}
    </h5>
  </a>
  <p class="mb-2">
    <a href="#">
         <span
          class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded me-2"
            >${strCategory}</span
         >
           </a>
               <a href="#">
          <span
          class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded me-2"
           >${strArea}</span
         >
           </a>
      </p>
  <p class="mb-5 font-normal text-gray-700">${strInstructions}</p>
  <ul>
  <li class="font-bold mb-3 text-xl">Ingredient</li>
  ${renderList(renderIngredient(meal))}
  </ul>
</div>
</div>`;
};
axios.get("https://www.themealdb.com/api/json/v1/1/random.php").then((res) => {
  renderMeal(res.data.meals[0]);
});
