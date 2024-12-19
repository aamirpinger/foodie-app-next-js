import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(id) {
  return db.prepare('SELECT * FROM meals WHERE id = ?').get(id);
}

export async function saveMeal(meal) {
  const mealToSave = {...meal,
    slug: slugify(meal.title, { lower: true }),
    instructions: xss(meal.instructions)
  }
  
  const extension = mealToSave.image.name.split('.').pop();
  const fileName = `${mealToSave.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await mealToSave.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });

  mealToSave.imageUrl = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @imageUrl,
      @slug
    )
  `).run(mealToSave);
}
