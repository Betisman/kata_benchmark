const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const functions = require('require-all')({
  dirname: `${__dirname}/functions`,
});


// const matteo = require('./functions/matteo');
// const betisman = require('./functions/betisman');
// const cesar = require('./functions/cesar');

const compare = (a, b) => b.hz - a.hz;

const addAll = s => Object.entries(functions).reduce((agg, [k, v]) => agg.add(k, v), s);

// add tests
// suite
//   .add('matteo', matteo)
//   .add('betisman', betisman)
//   .add('cesar', cesar)

addAll(suite)
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
    // console.log(event);
  })
  .on('complete', function () {
    console.log(this.map(el => el).join(':'));
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    console.log(this.sort(compare).map(({ name, hz }) => ({ name, opsPerSecond: hz })))
  })
  // run async
  .run({ 'async': true });

// console.log(functions);