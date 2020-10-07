import axios from 'axios';
export default class Search{

    constructor(query){
        this.query = query;
    }
async getData(){
    try {
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
        console.log(res);
        this.result = res.data.recipes;
        console.log(this.result);
    } catch (error) {
        console.log(error);
    }
}

}
 