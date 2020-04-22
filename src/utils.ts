import deepMerge from 'deepmerge';

/**
 * Deeply merges two objects, overriding arrays
 * @param {Object} x
 * @param {Object} y
 */
export const merge = <T1, T2>(x: Partial<T1> = {}, y: Partial<T2> = {}): T1 & T2 => {
  return deepMerge(x, y, {arrayMerge: (_, sourceArray: any[]) => sourceArray})
};

/**
 * Return true if the object is a strict object
 * which means it's not Array, Function, Number, String, Boolean or Null
 * @param obj the Object
 */
export const isStrictObject = (obj: any) => {
  return (
    obj instanceof Object &&
    !(obj instanceof Array) &&
    !(obj instanceof Function) &&
    !(obj instanceof Number) &&
    !(obj instanceof String) &&
    !(obj instanceof Boolean)
  );
};

/**
 * transfer the first letter of the keys to lowercase
 * @param {Object} obj - the object need to be transferred
 * @param {Array} whiteListForItself - whitelist itself from being transferred
 * @param {Array} whiteListForChildren - whitelist its children keys from being transferred
 */
export const transferKeyToLowerCase = (
  obj: Record<string, any>,
  whiteListForItself: string[] = [],
  whiteListForChildren: string[] = []
) => {
  if (!isStrictObject(obj)) return obj;
  const ret: Record<string, any> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const transferredKey = whiteListForItself.includes(key)
        ? key
        : key[0].toLowerCase() + key.slice(1);

      ret[transferredKey] = whiteListForChildren.includes(key)
        ? obj[key]
        : transferKeyToLowerCase(
          obj[key],
          whiteListForItself,
          whiteListForChildren
        );
    }
  }

  return ret;
};

/**
 * transfer the first letter of the keys to uppercase
 * @param {Object} obj - the object need to be transferred
 * @param {Array} whiteListForItself - whitelist itself from being transferred
 * @param {Array} whiteListForChildren - whitelist its children keys from being transferred
 */
export const transferKeyToUpperCase = (
  obj: Record<string, any>,
  whiteListForItself: string[] = [],
  whiteListForChildren: string[] = []
) => {
  if (!isStrictObject(obj)) return obj;
  const ret: Record<string, any> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const transferredKey = whiteListForItself.includes(key)
        ? key
        : key[0].toUpperCase() + key.slice(1);

      ret[transferredKey] = whiteListForChildren.includes(key)
        ? obj[key]
        : transferKeyToUpperCase(
          obj[key],
          whiteListForItself,
          whiteListForChildren
        );
    }
  }
  return ret;
};
