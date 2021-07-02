export const clsx = (...args: unknown[]): string => {
  let output = "";

  for (const arg of args) {
    if (typeof arg === "string" && !!arg) {
      output += (output ? " " : "") + arg;
    }
  }

  return output;
};
