import { getMeals } from "@/lib/meals";
import MealItem from "./mealItem";
import classes from './mealGrid.module.css'

export default async function MealGrid(){

    const meals = await getMeals();
    

  return (
    <>
      <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
      </>
    )
}
