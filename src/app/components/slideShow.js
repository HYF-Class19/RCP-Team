import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import Image from 'next/image';
import styles from './SlideShow.module.css';


export const SlideShow = () => {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=3&apiKey=ea39901342fe48f09ee98db9646b139d`);
        const data = await response.json();
        setRecipes(data.recipes);
    }

    useEffect(() => {
        fetchRecipes();
    }, []);

    const itemTemplate = (recipe) => {
        return (
            <>
                <div className="p-col-12 p-md-7 p-d-flex p-flex-column p-jc-center p-ai-center">
                    <h2 className={styles.title}>{recipe.title}</h2>
                    <Button label="Check Recipe" icon="pi pi-angle-right" className="p-button-rounded p-button-lg" />
                </div>
                <div className="p-col-12 p-md-5 p-d-flex p-jc-center p-ai-center">
                    <Image src={recipe.image} alt={recipe.title} width={525} height={350} />
                </div>
            </>
        );
    }

    return (
        <div className={styles.container}>
            <div className={classNames('p-grid', styles.slide)}>
                {recipes.length > 0 && (
                    <Carousel value={recipes} itemTemplate={itemTemplate} numVisible={1} />
                )}
            </div>
        </div>
    );
}
