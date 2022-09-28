class Fibonacci {
  // função geradora
  *execute(input, current = 0, next = 1) {
    if (input === 0) {
      return 0
    }
    // yield retorna valores sobre demanda da função geradora
    yield current
    // yield* vai delegar uma função, não vai retornar valor
    yield* this.execute(input -1, next, current + next)
  }
}

module.exports = Fibonacci