/* eslint-disable @typescript-eslint/ban-types */

export const mapKeys = <T extends Object, R extends Object>(
  obj: T,
  fn: (key: keyof T, value: T[keyof T]) => string | number | undefined
): R => {
  const output = {};

  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const mappedKey = fn(key, value);

      if (typeof mappedKey !== "undefined") {
        output[mappedKey] = value;
      }
    }
  }

  return output as R;
};

export const mapValues = <T extends Object, R extends Object>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T) => any
): R => {
  const output = {};

  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      output[key as any] = fn(obj[key], key);
    }
  }

  return output as R;
};
