function go(n) {
  console.log(n);

  for (let p of n.a) {
    console.log(p);
  }
}

go({ a: [1, 2, 3] });
