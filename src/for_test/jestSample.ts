import hoge from "./hoge";

export function sum(x: number, y: number): number | string {
  return x + y + hoge();
}

export function callSum(): ReturnType<typeof sum> {
  return sum(1, 2);
}

export function throwAnything(): void {
  throw new Error("anything error");
}

export async function asyncFunc(): Promise<boolean> {
  //sleep 3000 ms
  await ((ms) => new Promise((resolve) => setTimeout(resolve, ms)))(3000);
  return false;
}

export function forEach(
  items: number[],
  callback: (val: number) => void
): void {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
