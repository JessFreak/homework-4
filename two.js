export const task2 = {
    zoo : [],

    amountByName(name) {
        for (let animal of this.zoo) {
            if (animal.name === name) {
                return animal.amount;
            }
        }
        return 0;
    },
    amountByNameNorm(name) {
        const animal = this.zoo.find(animal => animal.name === name);
        if (animal) return animal.amount;
        else return 0;
    },

    amountOfZoo() {
        let amount = 0;
        for (let animal of this.zoo) {
            amount += animal.amount;
        }
        return amount
    },
    amountOfZooNorm() {
        return this.zoo.reduce((sum, current) => sum + current.amount, 0);
    },

    nameByAmount(amount = 0) {
        const animals = [];
        let i = 0;

        for (let animal of this.zoo) {
            if (animal.amount === amount) {
                animals[i++] = animal.name;
            }
        }
        return animals;
    },
    nameByAmountNorm(amount = 0) {
        const wanted = this.zoo.filter(animal => animal.amount === amount);
        return wanted.map(animal => animal.name);
    },

    sortZoo() {
        let copyOfZoo = this.zoo.slice();

        for (let i = 0; i < copyOfZoo.length; i++) {
            for (let j = i+1; j < copyOfZoo.length; j++) {
                if (copyOfZoo[i].amount > copyOfZoo[j].amount) {
                    [ copyOfZoo[i], copyOfZoo[j] ] = [ copyOfZoo[j], copyOfZoo[i] ]
                }
            }
        }
        return copyOfZoo;
    },
    sortZooNorm() {
        let copyOfZoo = this.zoo.slice();
        copyOfZoo.sort((a, b) => a.amount - b.amount );
        return copyOfZoo;
    },

    addAnimal(name, amount = 1) {

        if ( isNaN(+amount) ) {
            throw new Error("Amount is not a number");
        } else {
            amount = +amount;
        }

        if ( !this.checkAnimal(name) ) {
            this.zoo[this.zoo.length] = {
                name: name,
                amount: amount,
            }
        } else {
            for (let animal of this.zoo) {
                if (animal.name === name) {
                    animal.amount += amount;
                }
            }
        }

    },
    addAnimalNorm(name, amount = 1) {

        if ( isNaN(+amount) ) {
            throw new Error("Amount is not a number");
        } else {
            amount = +amount;
        }

        const animal = this.zoo.find(animal => animal.name === name);
        if (!animal) {
            this.zoo.push( {
                name: name,
                amount: amount,
            } );
        } else {
            animal.amount += amount;
        }
    },

    showAnimals() {
        const names = [];

        for (let i = 0; i < this.zoo.length; i++) {
            names[i] = this.zoo[i].name;
        }
        return names;
    },
    showAnimalsNorm() {
        return this.zoo.map(animal => animal.name);
    },

    deleteAnimal(name) {
        const copyOfZoo = this.zoo.slice();
        let j = 0;
        let del = 0;

        for (let i = 0; i < copyOfZoo.length; i++) {

            if (copyOfZoo[i].name !==  name) {
                this.zoo[j] = copyOfZoo[i];
                j++;
            } else del++;
        }
        this.zoo.length -= del;
    },
    deleteAnimalNorm(name) {
        const index = this.zoo.findIndex(animal => animal.name === name);
        if (index !== -1) {
            this.zoo.splice(index,1);
        }
    },

    checkAnimal(name) {
        for (let animal of this.zoo) {
            if (animal.name === name) {
                return true;
            }
        }
        return false;
    },
    checkAnimalNorm(name) {
//        return !!this.zoo.find(animal => animal.name === name);        //!!- переводжу в булеан (підказало IDE)
        return this.zoo.some( (animal) => animal.name === name);         // згадав про some
    },
}