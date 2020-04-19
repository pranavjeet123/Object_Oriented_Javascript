function createAnotherfn(name, weapon) {
    return {
        name,
        weapon
    }
}


//const slectfunc1= createAnotherfn("pranav","Gada");

//slectfunc1.attack();


// BUt we are using the attack for multiple function and lot of memory is utilising

/** 
 * To acheive it, create an object which possess the resuable function AND new object 
 * created in future can utilise it
 * 
 * USe the this keywork so that BEfore====> (. ) object will be calling it an dcorrect reference
 * can be acheived
 */

const reusableFn = {
    attack () {
        console.log(`I am ${this.name} killing enemies with ${this.weapon}`);
    }
}


const Vishnu = createAnotherfn("Vishnu", "chakra");

Vishnu.attack = reusableFn.attack;

Vishnu.attack();