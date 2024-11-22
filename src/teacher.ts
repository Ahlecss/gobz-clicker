import { Counter } from "./counter";

export class Teacher {
    count: number;
    price: number;
    generate: number;
    name: string;
    liTeacher: HTMLElement;
    elName: HTMLElement;
    elGenerate: HTMLElement;
    elPrice: HTMLElement;
    elCount: HTMLElement;
    elTeacherImage: HTMLImageElement;
    counter: Counter;

    constructor(price: number, name: string, generate: number) {
        this.count = 0;
        this.price = price;
        this.name = name;
        this.generate = generate;
        this.liTeacher = document.createElement('li')
        this.elName = document.createElement('h2')
        this.elPrice = document.createElement('h3')
        this.elGenerate = document.createElement('h4')
        this.elCount = document.createElement('h5')
        this.elTeacherImage = document.createElement('img')
        this.init()
        this.addThunes()

        this.counter = Counter.getInstance();

    }
    init() {
        const teacherList = document.getElementById('teachers')!
        // const elBlock = document.createElement('div')
        this.elName.textContent = this.name
        this.elTeacherImage.src = `teachers/${this.name}.png`
        this.elPrice.textContent = `Prix : ${this.price}`
        this.elCount.textContent = `Quantite : ${this.count}`
        this.elGenerate.textContent = `Génére : ${this.generate}`

        this.liTeacher.appendChild(this.elName)
        this.liTeacher.appendChild(this.elTeacherImage)
        this.liTeacher.appendChild(this.elPrice)
        this.liTeacher.appendChild(this.elGenerate)
        this.liTeacher.appendChild(this.elCount)
        teacherList.appendChild(this.liTeacher)
        // Ajouter un item dans le template
        // Lance un set interval
        this.liTeacher.addEventListener('click', this.buyTeacher.bind(this))
    }

    buyTeacher() {
        if (this.counter.gobzPoints < this.price) return
        this.counter.subPoints(this.price)
        this.count += 1;
        this.price += 1;
        console.log(this.count)
        this.elPrice.textContent = `Prix : ${this.price}`
        this.elCount.textContent = `Quantité : ${this.count}`
        this.elGenerate.textContent = `Génére : ${this.generate}`
    }

    checkPoints(): void {
        if (this.counter.gobzPoints >= this.price && !this.liTeacher.classList.contains("teacherClickable")) {
            this.liTeacher.classList.add("teacherClickable");
        }
    }

    addThunes() {
        const interval = setInterval(() => {
            this.counter.addPoints(this.count)
            this.checkPoints()
        }, 1000);
    }
}