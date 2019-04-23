import { db }  from './config';

class CategoryService {
    
    constructor(){
    }
    
    async getAll() {
        return await db.collection("categories").get();
    }
}

export default new CategoryService();