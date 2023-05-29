export const validateEmail = (str: string) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(str);
};

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const getEntries = <T extends Record<any, any>>(obj: T) => Object.entries(obj) as Entries<T>;

export const isInArray = <T extends U, U>(arr: ReadonlyArray<T>, el: U): el is T => {
  return arr.includes(el as T);
};

export const removeKey = <T>(key: keyof T, { [key]: _, ...rest }: T) => rest;
