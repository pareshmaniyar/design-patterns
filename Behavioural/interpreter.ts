/*
SQL, regex
PrimaMadonna = generate new enlish language where a is *
Not sure about if the below should be interface or abstract class
*/
interface LanguageConverter {
    getNativeLanguage();
    getOriginalLanguage();
}

class PrimaMadonna {
    original: string;
    words: string;
    constructor(name: string) {
        this.original = name;
        this.words = name.replace('a', '*');
    }
    getNativeLanguage() {
        return this.original;
    }
    getOriginalLanguage() {
        return this.original
    }
}

const newLanguage = new PrimaMadonna('Observe yourself attentively, know yourself deeply');
console.log(newLanguage);
