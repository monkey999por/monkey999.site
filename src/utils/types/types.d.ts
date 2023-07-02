declare type Simple<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: Simple<O[K]> }
    : never
  : T;
