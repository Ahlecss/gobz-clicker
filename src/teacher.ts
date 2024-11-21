import { Counter } from "./counter";

export class Teacher {
    count: number;
    price: number;
    name: string;
    elName: HTMLElement;
    elPrice: HTMLElement;
    elCount: HTMLElement;
    counter: Counter;

    constructor(price: number, name: string) {
        this.count = 0;
        this.price = price;
        this.name = name;
        this.elName = document.createElement('h2')
        this.elPrice = document.createElement('h3')
        this.elCount = document.createElement('h4')
        this.init()
        this.addThunes()

        this.counter = Counter.getInstance();

    }
    init() {
        console.log('ici')
        const teacherList = document.getElementById('teachers')!
        const liTeacher = document.createElement('li')
        // const elBlock = document.createElement('div')
        // const teacherImage = document.createElement('img')
        this.elName.textContent = this.name
        this.elPrice.textContent = `Prix : ${this.price}`
        this.elCount.textContent = `Nombre : ${this.count}`

        liTeacher.appendChild(this.elName)
        liTeacher.appendChild(this.elPrice)
        liTeacher.appendChild(this.elCount)
        teacherList.appendChild(liTeacher)
        // Ajouter un item dans le template
        // Lance un set interval
        liTeacher.addEventListener('click', this.buyTeacher.bind(this))
    }

    buyTeacher() {
        if(this.counter.gobzPoints < this.price) return
        this.counter.subPoints(this.price)
        this.count += 1;
        this.price += 1;
        console.log(this.count)
        this.elPrice.textContent = `Prix : ${this.price}`
        this.elCount.textContent = `Nombre : ${this.count}`
    }

    addThunes() {
        const interval = setInterval(() => {
            this.counter.addPoints(this.count)
        }, 1000);
    }
}