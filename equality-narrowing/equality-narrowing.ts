function combineLike(piece: string | number, num: number, str: string) {
    if (typeof piece === "number" && piece === num) {
      return piece * num;
    } else if (typeof piece === "string" && piece === str) {
      return `${piece}~${str}`;
    } else {
      return piece;
    }
  }
  
  console.log(combineLike("A", 2, "A"));
  console.log(combineLike(2, 2, "A"));
  console.log(combineLike("B", 2, "A"));