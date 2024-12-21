const renderMeal = (meal = {}) => {
  const { strMeal, strMealThumb, strInstructions } = meal;
  document.getElementById("app").innerHTML = ` <div
class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4"
>
<a href="#">
  <img
    class="rounded-t-lg"
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
  <p class="mb-3 font-normal text-gray-700">${strInstructions}</p>
</div>
</div>`;
};
axios.get("https://www.themealdb.com/api/json/v1/1/random.php").then((res) => {
  renderMeal(res.data.meals[0]);
});
