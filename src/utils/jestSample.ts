export function sum(x: number, y: number): number {
  return x + y;
}

export function throwAnything(): void {
  throw new Error("anything error");
}

export function returnPromise(second: number): Promise {}
