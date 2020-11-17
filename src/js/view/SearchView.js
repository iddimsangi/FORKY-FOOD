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
const button = (page, type) => `
        <button class="btn-inline results__btn--${type}" data-ongo = ${type == 'next' ? page + 1 : page - 1}>
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-triangle-${type == 'next' ? 'right' : 'left'}"></use>
                </svg>
                <span>Page ${type == 'next' ? page + 1 : page - 1}</span>
        </button>
`;

//rendering a button for pagination
const buttonRender = (page, numOfResults, resultPerPage) => {
    let btn;
    const pages = Math.ceil(numOfResults/resultPerPage);
    if(page === 1 && pages > 1){
        //Add button NEXT
        btn = button(page, 'next');
    }else if(page < pages){
        //Add both button NEXT and PREV
       btn = `${button(page, 'next')}
              ${button(page, 'next')}
              `  
    }else if(page === pages){
        button(page, 'prev');
    }
elements.resultButtonCont.insertAdjacentHTML('beforebegin', btn);
}

//public method that will be rendering these inputs(arr inputs)
export const renderResults = (recipes,page=2,resultPerPage=10) =>{
    const start = (page - 1)*resultPerPage;
    const end = page*resultPerPage;
    recipes.slice(start, end).forEach(resultGet);
    buttonRender(page, recipes.length, resultPerPage);
};
