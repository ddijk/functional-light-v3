const expect = x => ({
    toBe: y => {
      if (x !== y) {
        throw new Error(`expected ${x} to be ${y}`);
      }
    }
  });
  
//   const curry = fn => (...args) =>
//   args.length >= fn.length
//     ? fn(...args)
//     : (...innerArgs) => fn(...args, ...innerArgs);

    const curry = fn => {
        const curryN = (n, fn) => (...args) =>
          args.length >= n
            ? fn(...args)
            : curryN(n - args.length, (...innerArgs) => fn(...args, ...innerArgs));
      
        return curryN(fn.length, fn);
      };

  const sum4 = curry((a, b, c, d) => a + b + c + d);

  
  expect(sum4()(1, 2, 3, 4)).toBe(10);
  console.log(sum4(1,2)(3,4));
  expect(sum4(1)(2, 3, 4)).toBe(10);
  expect(sum4(1, 2)(3, 4)).toBe(10);
  expect(sum4(1, 2, 3)(4)).toBe(10);
  expect(sum4(1, 2, 3, 4)).toBe(10);
  console.log('end nu?')
  expect(sum4(1, 2) (3) (4)).toBe(10);
  console.log('The end.');