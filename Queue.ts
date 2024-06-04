export class Queue<T> {
    private items: T[];
  
    constructor() {
      this.items = [];
    }
  
    enqueue(element: T): void {
      this.items.push(element);
    }
  
    dequeue(): T | undefined {
      return this.items.shift();
    }
  
    peek(): T | undefined {
      return this.items[0];
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    size(): number {
      return this.items.length;
    }
  
    clear(): void {
      this.items = [];
    }
  }
  

  