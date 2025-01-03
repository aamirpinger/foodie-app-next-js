import Link from 'next/link';
import classes from './page.module.css';
import MealGrid from '@/components/meals/mealGrid';
import { Suspense } from 'react';

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <MealGrid />
        </Suspense>
      </main>
    </>
  );
}
