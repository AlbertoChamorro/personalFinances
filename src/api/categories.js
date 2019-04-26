import {db}  from './config';

class CategoryService {
    
    constructor(){
    }
    
    getAll() {
        return db.collection("categories")
                    .orderBy("priority");
    }
}

export default new CategoryService();