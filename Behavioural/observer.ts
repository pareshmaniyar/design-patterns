
class Blog {
    text: string;
    constructor(text: string) {
        this.text = text;
    }
}
interface Subject {
    addPerson(person: Person): void;
    notify(blog: Blog): void;
}
class Website implements Subject {
    persons: Person[] = [];
    blogs: Blog[] = [];
    addPerson(person: Person): void {
        this.persons.push(person);
    }
    addBlog(blog: Blog): void {
        this.blogs.push(blog);
        this.notify(blog);
    }
    notify(blog: Blog): void {
        this.persons.forEach(person => {
            person.update(blog);
        });
    }
}
interface Observer {
    update(blog: Blog): void;
}
class Person implements Observer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    update(blog: Blog): void {
        console.log(`${this.name} is reading: ${blog.text}`);
    }
}
const person1 = new Person("Brutus");
const person2 = new Person("Caesar");
const website = new Website();
const newBlog = new Blog("Friends, Romans and Countrymen. Lend me your ears!");
website.addPerson(person1);
website.addPerson(person2);
website.addBlog(newBlog);
