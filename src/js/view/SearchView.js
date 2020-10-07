import {elements} from './base';

//reading data from user input
export const searchVal = () => elements.searchInput.value; 

//function for render a single recipe
const resultGet = recipe =>{
const markUp = `
<li>
                    <a class="results__link results__link--active" href="${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">Pasta with Tomato ...</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>
`;
elements.searchInputUI.insertAdjacentHTML('beforeend', markUp);
}

//public method that will be rendering these inputs(arr inputs)
export const renderResults = recipes =>{
    recipes.forEach(resultGet);
};
