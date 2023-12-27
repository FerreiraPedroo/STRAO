class Item {
    constructor({ name, description }) {
        this.name = name;
        this.description = description;
        this.deleted_at;
        this.deleted_by;
    }
}

class GetItemCategories {
    constructor(item){
        this.item = item
    }

    get categories(){
        
    }
}
