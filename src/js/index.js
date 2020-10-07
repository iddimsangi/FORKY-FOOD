import Search from './model/Search';
import * as searchView from './view/SearchView';
import { elements } from './view/base';

// const val = new Search('pizza');//new object with search query property

//create a gloal state for storing our objects
const state = {

}
const controlSearch = async() =>{
    //1.get a query from view
    const query = searchView.searchVal();//leter will be user input query
if(query){
    //2.get new search obj and add to state
    state.Search = new Search(query);//store this created object in state
    //3.prepare the ui for result

    //4.search for recipes
    await state.Search.getData();

    //5.sarender on UI
    console.log(state.Search.result);


}
}

//App startup 
elements.searchForm.addEventListener('submit',e =>{
e.preventDefault();//prevent loading
//function for todo-list
controlSearch();
});
// console.log(val);
// val.getData();