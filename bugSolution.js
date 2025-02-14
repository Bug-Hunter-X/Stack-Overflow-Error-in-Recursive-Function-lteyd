function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a > 1000) { //Added check to prevent stack overflow for large a
    return Infinity; // Or handle the error appropriately
  }
  return foo(a - 1, a + b);
}