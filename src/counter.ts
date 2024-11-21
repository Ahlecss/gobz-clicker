export class Counter {

  private static instance: Counter | null = null; // L'unique instance

  // On définit les types
  gobzPoints: number;
  counterElement: HTMLElement;
  counterButton: HTMLElement;

  private constructor() {
    this.gobzPoints = 0;
    this.initCounter()
  }

  // Méthode pour obtenir l'instance unique
  static getInstance(): Counter {
    if (!Counter.instance) {
      Counter.instance = new Counter();
    }
    return Counter.instance;
  }

  initCounter() {
    this.counterElement = document.getElementById('counterElement');
    this.counterButton = document.getElementById('counterButton');
    this.counterButton.addEventListener('click', this.click.bind(this));
    requestAnimationFrame(this.animateCounter.bind(this));
  }

  click() {
    this.gobzPoints += 1;
  }

  addPoints(points : number) {
    this.gobzPoints += points
  }

  subPoints(points : number) {
    this.gobzPoints -= points
  }

  animateCounter() {
    this.counterElement.innerText = `${this.gobzPoints}`
    requestAnimationFrame(this.animateCounter.bind(this));
  }

}
