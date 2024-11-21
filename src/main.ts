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
    const arnaud = new Teacher(1, 'Arnaud')
    const christian = new Teacher(100, 'Christian')
    const vincent = new Teacher(1000, 'Vincent')
    const Mathieu = new Teacher(10000, 'Mathieu')
    const Xavier = new Teacher(100000, 'Xavier')
    const Corinne = new Teacher(1000000, 'Corine')
  }


  // init Compteur

  // initClickableElement

  // créer

}

const app = new App()