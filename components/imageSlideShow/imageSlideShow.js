'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from './imageSlideshow.module.css';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { 
      setImageIndex((prevState) => prevState === images.length - 1 ? 0 : prevState + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
 
  return (
    <div className={classes.slideshow}>
      <Image
        src={images[imageIndex].image}
        alt={images[imageIndex].alt}
        className={classes.active}
      />
    </div>
  );
}
