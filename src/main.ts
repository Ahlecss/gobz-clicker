import './style.css'
import { Counter } from './counter.ts'
import { Arnaud } from './arnaud.ts'
import { Teacher } from './teacher.ts';

class App {
  constructor() {
    this.init()
  }

  init() {
    const counter = Counter.getInstance();
    const arnaud = new Teacher(1, 'Arnaud', 1)
    const christian = new Teacher(100, 'Christian', 3)
    const vincent = new Teacher(1000, 'Vincent', 10)
    const Mathieu = new Teacher(10000, 'Mathieu', 30)
    const Xavier = new Teacher(100000, 'Xavier', 100)
    const Corinne = new Teacher(1000000, 'Corine', 10000)
  }


  // init Compteur

  // initClickableElement

  // créer

}

const app = new App()