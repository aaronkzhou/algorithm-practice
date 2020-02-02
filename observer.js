class Subject {
    constructor() {
        this.observerCollection = []
    }

    subscribe(observer) {
        this.observerCollection.push(observer)
    }

    unsubscribe(observer) {
        this.observerCollection = this.observerCollection.filter(item => item !== observer)
    }

    emit() {
        this.observerCollection.forEach((observer) => observer.notify());
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    notify() {
        console.log(`${this.name} has been notified.`);
    }
}

let subject = new Subject();

let observer1 = new Observer('semlinker');
let observer2 = new Observer('lolo');
subject.subscribe(observer1)
subject.subscribe(observer2)
subscribe.emit()
