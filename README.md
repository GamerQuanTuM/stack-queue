# Stack and Queue Package

This npm package provides implementations of stack and queue data structures in TypeScript.

## Installation

You can install this package via npm:

```bash
npm install stack-queue-ts-simplified
```

### Stack

```
import { Stack } from 'stack-queue-typescript-simplified';

// Create a new stack
const stack = new Stack<number>();

// Push elements onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

// Pop elements from the stack
console.log(stack.pop()); // Output: 3
console.log(stack.pop()); // Output: 2

// Peek at the top element of the stack
console.log(stack.peek()); // Output: 1

// Check if the stack is empty
console.log(stack.isEmpty()); // Output: false

// Get the size of the stack
console.log(stack.size()); // Output: 1

// Clear the stack
stack.clear();
console.log(stack.isEmpty()); // Output: true
```

### Queue
```
import { Queue } from 'stack-queue-typescript-simplified';

// Create a new queue
const queue = new Queue<number>();

// Enqueue elements into the queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// Dequeue elements from the queue
console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

// Peek at the front element of the queue
console.log(queue.peek()); // Output: 3

// Check if the queue is empty
console.log(queue.isEmpty()); // Output: false

// Get the size of the queue
console.log(queue.size()); // Output: 1

// Clear the queue
queue.clear();
console.log(queue.isEmpty()); // Output: true
```
