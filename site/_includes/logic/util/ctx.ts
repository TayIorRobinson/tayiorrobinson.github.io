
export class Context<T> {
    private static store = new Map<any,any>();
    public readonly name: string;
    constructor(name: string) {
        this.name = name;
        this.Provider = this.Provider.bind(this);
    }
    _type: T = undefined as any;


    provide<R>(value: T, children: () => R): R {
        if (Context.store.has(this))
            throw new Error("Cannot provide a value for context '" + this.name + "' when a value has already been provided");
        Context.store.set(this, value);
        try {
            return children();
        } finally {
            Context.store.delete(this);
        }
    }
    Provider<R>({ value, children }: { value: T, children?: () => R | R}): R {
        if (typeof children !== 'function') {
            console.warn("Context(" +this.name + ").Provider recieved children", children, "expected function.")
            return children as R;
        }
        return this.provide(value,children);
    }

    use(): T {
        if (!Context.store.has(this))
            throw new Error("Couldn't find value for context '" + this.name + "'");
        return Context.store.get(this);
    }
}

export type ContextValue<T extends Context<R>, R> = R;