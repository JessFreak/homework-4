export const task6 = {
    Kiev: -1,
    Lviv: -4,
    Dnipro: 0,
    Odesa: +5,

    [Symbol.toPrimitive](hint) {
        const [ towns, temps ] = [ Object.keys(this), Object.values(this) ];

        if (towns.length === 0 || temps.length === 0) {
            throw new Error("Incomplete data");
        }
        if ( temps.some( (temp) => isNaN( +temp) ) || temps.some( (temp) => temp === undefined ) ) {
            throw new Error("Temperature is not a number");
        }

        if (hint === "string") {
            let string = "";

            for (let i = 0; i < towns.length; i++) {
                if (temps[i] > 0 && temps[i][0] !== '+' ) {
                    temps[i] = '+' + temps[i];      //лишаю плюсик
                }

                if ( i !== towns.length - 1) {
                    string += `${towns[i]}: ${temps[i]};\n`;
                } else {
                    string += `${towns[i]}: ${temps[i]}.`;
                }
            }
            return string;

        } else {
            const sum = temps.reduce( (sum, temp) => (+sum) + (+temp) );        //з переводом у числа
            return sum / temps.length;
        }
    }
}