🔹 JavaScript – this Keyword
1️⃣ Explain the this keyword

this refers to the object that is executing the current function.
Its value is decided at call time, not at definition time.
In global scope it refers to window (or undefined in strict mode).
In methods, this points to the owning object.

2️⃣ How is this determined in different contexts?

In a regular function, this depends on how the function is called.
In object methods, it refers to the object.
With call, apply, or bind, this is explicitly set.
In constructors, this refers to the newly created object.

3️⃣ this in arrow functions vs regular functions

Arrow functions do not have their own this.
They lexically inherit this from the surrounding scope.
Regular functions have dynamic this based on invocation.
Arrow functions are ideal for callbacks to avoid context loss.

🔹 call, apply, bind
4️⃣ What are call, apply, and bind?

They are methods used to explicitly set this for a function.
call invokes the function with arguments passed individually.
apply invokes the function with arguments as an array.
bind returns a new function with permanently bound this.

5️⃣ When would you use bind over call/apply?

Use bind when you want to reuse a function later with fixed this.
Common in event handlers and callbacks.
call and apply are for immediate invocation only.

🔹 this in Event Handlers
6️⃣ How does this work in event handlers?

In normal functions, this refers to the element that triggered the event.
In arrow functions, this refers to the outer scope.
In React, this is undefined unless bound.
Binding ensures correct component context.

7️⃣ How do you preserve this in callbacks?

Use bind(this) in constructors.
Or use arrow functions to inherit lexical this.
Store reference like const self = this (older pattern).
Avoid unbound regular functions in callbacks.

🔹 React State Core Concepts
8️⃣ Why is setState asynchronous?

React batches state updates to improve performance.
This prevents unnecessary re-renders.
State updates may not reflect immediately after calling setState.
React schedules updates efficiently.

9️⃣ What changed in React 18 batching?

React 18 introduced automatic batching everywhere.
Batching now works in timeouts, promises, and native events.
This reduces renders and improves performance.
Earlier versions batched only inside React events.

🔟 How do you update state based on previous state?

Use the functional form of setState.
It receives the previous state safely.
This avoids stale state issues in async updates.
It ensures correctness in loops and callbacks.

1️⃣1️⃣ Can we update state directly?

No, state should never be mutated directly.
Direct mutation prevents React from detecting changes.
It can cause stale UI and unpredictable bugs.
Immutability helps debugging and performance optimization.

1️⃣2️⃣ Functional vs Object state updates

Object form replaces state based on current snapshot.
Functional form computes state from previous state.
Functional updates are safer in async scenarios.
Preferred in loops, intervals, and concurrent rendering.

🔹 Node.js Fundamentals
1️⃣3️⃣ What is Node.js?

Node.js is a JavaScript runtime built on Chrome’s V8 engine.
It allows JavaScript to run outside the browser.
Node.js is event-driven and non-blocking.
Used mainly for backend services.

1️⃣4️⃣ What is the event loop in Node.js?

The event loop handles asynchronous operations.
It processes callbacks from the task queues.
Ensures non-blocking execution.
Allows Node.js to handle many requests efficiently.

1️⃣5️⃣ What is non-blocking I/O?

Non-blocking I/O allows tasks to run without waiting.
Node.js offloads I/O to the system kernel.
Callbacks/promises handle results later.
This improves scalability.

1️⃣6️⃣ Callbacks and callback hell

Callbacks are functions passed to other functions.
Callback hell happens with deeply nested callbacks.
It reduces readability and maintainability.
Promises and async/await solve this.

1️⃣7️⃣ Promises and async/await

Promises represent future values.
They handle async code in a cleaner way.
Async/await is syntactic sugar over promises.
Makes async code look synchronous.

1️⃣8️⃣ process.nextTick vs setImmediate

process.nextTick runs before the event loop continues.
setImmediate runs in the check phase.
nextTick can block the loop if overused.
setImmediate is safer for heavy tasks.

1️⃣9️⃣ Streams in Node.js

Streams handle data in chunks.
They improve memory efficiency.
Types: Readable, Writable, Duplex, Transform.
Used in file and network operations.

2️⃣0️⃣ Buffer in Node.js

Buffer handles raw binary data.
Used when working with streams or files.
Allocated outside the V8 heap.
