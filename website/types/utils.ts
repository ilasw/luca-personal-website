
export type Maybe<T> = T | null;

export type Paths<T> = T extends object
    ? {
      [K in keyof T]: `${Exclude<K, symbol>}${'' | `.${Paths<T[K]>}`}`;
    }[keyof T]
    : never;

// Returns T if the T is a branch. Otherwise it returns `never`.
type IsBranch<T> =
// Is T an object?
    T extends {[k: string]: any}
        ? // T is an object. Is it also an array?
        T extends any[]
            ? // T is an object, but also is an array. This is a leaf.
            never
            : // T is an object, but is not also an array. This is a branch.
            T
        : // T is not an object. This is a leaf.
        never;

// Recursively process each key.
// If it is a branch, process its keys and return the Partial of that branch.
// If it is a leaf, replace with the value type.
export type ModifyShapeType<S, T> = S extends IsBranch<S>
    ? Partial<{[k in keyof S]: ModifyShapeType<S[k], T>}>
    : T;
