function steamrollArray(arr) {
  return arr.reduce((acc, curr) => {
    console.log(acc, curr)
    return acc.concat(
      !Array.isArray(curr) ? 
      curr : 
      steamrollArray(curr)
    )
  }, [])
}

// steamrollArray([1, [2, 4], [3, [[4]]]]);
steamrollArray([1, 3, 4, [10, 11]]);
/**
 * level 1: 1, [2], [3, [[4]]]
 * level 2: 2, 3, [4],
 * level 3: 4
 */