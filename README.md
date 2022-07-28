# The kata benchmarker

## Why

This repo is just a proof of concept of using [benchmark.js](https://benchmarkjs.com/) to measure the performance of different solutions to a same problem. We want to use it to create a kata challenge in our organization and let our program get the winner.

## How

To add a new solution, you just have to create a node file with your name inside the folder functions. That JS file should be like:

```javascript
module.exports = () => {
  //...your code goes here...
}
```

To run the benchmarker, once all the solutions are added to the folder, just run:

```sh
node index.js
```

And you'll get stats and standings like:

```sh
@MacBoo ➜  benchmark  node index.js
betisman x 101,306 ops/sec ±0.51% (94 runs sampled)
cesar x 1,002,139 ops/sec ±2.42% (92 runs sampled)
matteo x 8,099 ops/sec ±0.50% (95 runs sampled)
betisman x 101,306 ops/sec ±0.51% (94 runs sampled):cesar x 1,002,139 ops/sec ±2.42% (92 runs sampled):matteo x 8,099 ops/sec ±0.50% (95 runs sampled)
Fastest is cesar
[
  { name: 'cesar', opsPerSecond: 1002139.327019037 },
  { name: 'betisman', opsPerSecond: 101306.48491351385 },
  { name: 'matteo', opsPerSecond: 8099.064104895205 }
]
```