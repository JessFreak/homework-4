export const task3 = {
    string: "",
    iterator: "",

    [Symbol.iterator](variant = this.iterator) {
        let count = 0;
        const string = this.string;

        if ( typeof(string) !== "string" ) {
            throw new Error("It is not a string");
        }
        if (string === "") {
            throw new Error("String is empty");
        }

        if (variant === "second") {
            return {
                next() {

                    if (2 * count < string.length) {
                        return {done: false, value: string[2 * count++]};
                    } else {
                        return {done: true};
                    }
                }
            }


        } else if (variant === "word") {
            const words = [];
            //тільки не кажи, що цього мало
            const divides = [' ', '.', ',', '!', '?', ':',';','(', ')', '{', '}', '[', ']', '"', '<', '>', '\n', '\t', '—']; //тире, не дефіс

            let word = "";
            for (let i = 0; i < string.length; i++) {

                if (i === string.length-1 && !divides.includes(string[i]) ) words.push(word + string[i]);     //якщо останнього символу немає

                if ( divides.includes(string[i]) ) {
                    while (divides.includes(string[i+1]) ) i++;    //на випадок декількох символів поспіль
                    words.push(word)
                    word = '';
                    continue;
                }
                word += string[i];
            }

            return {
                next() {
                    if (count < words.length) {
                        return { done: false, value: words[count++] };

                    } else {
                        return { done: true };
                    }
                }
            }

        } else if (variant === "sentence") {

            const sentences = [];
            const divides = ['.', '!', '?'];

            let sentence = "";

            for (let i = 0; i < string.length; i++) {

                //якщо останнього символу немає
                if (i === string.length-1 && !divides.includes(string[i]) ) sentences.push(sentence + string[i]);

                if ( divides.includes(string[i]) ) {

                    if (string[i] === '.' && string[i+1] === '.' && string[i+2] === '.') {

                        sentence += string[i] + string[i+1] + string[i+2]
                        i += 2;

                    } else {
                        while (divides.includes(string[i+1]) ) i++;    //на випадок декількох символів поспіль
                        sentence += string[i];                  //додаю кінцевий знак
                    }

                    if (string[i+1] === ' ' ) i++;          //щоб не брати пробіл в наступне речення

                    sentences.push(sentence);
                    sentence = '';
                    continue;
                }
                sentence += string[i];
            }


            return {
                next() {
                    if (count < sentences.length) {
                        return { done: false, value: sentences[count++] };

                    } else {
                        return { done: true };
                    }
                }
            }

        } else if (variant === "vowel") {
            const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'Y', 'y', 'U', 'u'];   //розраховано на англійські літери


            return {
                next() {

                        while ( !vowels.includes(string[count]) && count < string.length ) count++;
                        //пропустить лише голосні

                        if (count < string.length) {
                            return {done: false, value: string[count++]};

                        } else {
                            return {done: true};
                        }

                    }
                }
            }  else {            //якщо властивість не буде потрібною, то їх закине на звичайний ітератор
                                 //це щоб помилки не виникало
            return {
                next() {
                    if (count < string.length) {
                        return {done: false, value: string[count++]};
                    } else {
                        return {done: true};
                    }
                }
            }
        }
    }
}