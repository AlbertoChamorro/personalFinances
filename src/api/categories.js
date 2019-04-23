import {db}  from './config';

class CategoryService {
    
    constructor(){
    }
    
    async getAll() {
        return await db.collection("categories")
                        .orderBy("priority")
                        .get();
    }
}

export default new CategoryService();