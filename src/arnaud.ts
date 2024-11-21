import { Teacher } from './teacher.ts'

export class Arnaud extends Teacher {
    constructor(price: number, number: string) {
        super(price, number)
        super.init()
    }
    init() {

    }
}