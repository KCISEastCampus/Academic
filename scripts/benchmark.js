const { performance } = require('perf_hooks');

// Mock data
const searchData = Array.from({ length: 10000 }).map((_, i) => ({
  title: `Title ${i} Some Words Hello World`,
  url: `/page${i}.html`,
  content: `Content of page ${i}. This is a longer text with some keywords. Hello World. Testing search.`
}));

// Baseline
function fallbackSearchOld(query, searchData) {
  const q = query.toLowerCase().trim();
  return searchData
    .filter(item =>
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.content && item.content.toLowerCase().includes(q))
    )
    .slice(0, 10)
    .map(item => ({ title: item.title, url: item.url, excerpt: item.content }));
}

// Optimized
const optimizedSearchData = searchData.map(item => ({
  ...item,
  _lowerTitle: item.title ? item.title.toLowerCase() : '',
  _lowerContent: item.content ? item.content.toLowerCase() : ''
}));

function fallbackSearchNew(query, searchData) {
  const q = query.toLowerCase().trim();
  return searchData
    .filter(item =>
      (item._lowerTitle && item._lowerTitle.includes(q)) ||
      (item._lowerContent && item._lowerContent.includes(q))
    )
    .slice(0, 10)
    .map(item => ({ title: item.title, url: item.url, excerpt: item.content }));
}

function runBenchmark() {
  const query = "hello world";
  const iterations = 1000;

  let start = performance.now();
  for (let i = 0; i < iterations; i++) {
    fallbackSearchOld(query, searchData);
  }
  let end = performance.now();
  const oldTime = end - start;

  start = performance.now();
  for (let i = 0; i < iterations; i++) {
    fallbackSearchNew(query, optimizedSearchData);
  }
  end = performance.now();
  const newTime = end - start;

  console.log(`Old time: ${oldTime.toFixed(2)} ms`);
  console.log(`New time: ${newTime.toFixed(2)} ms`);
  console.log(`Improvement: ${((oldTime - newTime) / oldTime * 100).toFixed(2)}% faster`);
}

runBenchmark();
