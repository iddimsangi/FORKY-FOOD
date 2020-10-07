import {elements} from './base';

//clear the input field
export const clearResult = () =>{
    elements.searchInput.value = '';
}

//clear the recipes list ui
export const clearResultList = () =>{
    elements.searchInputUI.innerHTML = '';
}

//Reduce the title techniques
const reduceTitle = (title, limit = 17) => {
const newTitle = [];
if(title.length > limit){
    title.split(' ').reduce((acc, curr) =>{
        if((acc + curr.length) <= limit){
            newTitle.push(curr);
        }
        return acc + curr.length;
    },0);
}
return `${newTitle.join('')}...`;

}
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
                            <h4 class="results__name">${reduceTitle(recipe.title)}</h4>
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
