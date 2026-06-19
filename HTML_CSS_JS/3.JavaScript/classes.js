class Human{
    //Properties    
    age = 17;   //Public variable
    #wt = 48;   //private variable
    ht = 170;

    constructor(newAge, newHeight){
        this.age = newAge;
        this.ht = newHeight;
        this.#wt = 70; 
    }

    walking(){
        console.log("I am walking", this.#wt);
    }

    running(){
        console.log("I am running");
    }

    get fetchWeight(){      //Getter
        return this.#wt;
    }

    set modifyWeight(val){      //Setter
        this.#wt = val;
    }
}

let obj = new Human(19,172);
console.log(obj.fetchWeight);
console.log(obj.ht);
obj.walking();

