export const elements = {
searchForm: document.querySelector('.search'),
searchInput: document.querySelector('.search__field'),
searchInputUI: document.querySelector('.results__list'),
serchResContainer:document.querySelector('.results'),
resultButtonCont:document.querySelector('.results__pages')
};

const elementString = {
    loader:'loader'
};

export const reanderloader = parent =>{
    const loader =`
    <div class="${elementString.loader}">
        <svg>
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () =>{
    const ld = document.querySelector(`.${elementString.loader}`)
if(ld) ld.parentNode.removeChild(ld);
};
