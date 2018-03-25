export default class Linq {
    constructor(data) {
        this.pipeline = [];
        this.data = data;

        this.ops = {
            where: Array.prototype.filter,
            select: Array.prototype.map,
            aggregate: Array.prototype.reduce,
            any: Array.prototype.some,
            all: Array.prototype.every
        };

        // this.where = Array.prototype.filter;
        // this.select = Array.prototype.map;
        // this.aggregate = Array.prototype.reduce;
        // this.any = Array.prototype.some;
        // this.all = Array.prototype.every;
    }

    get Value() {
        return this.pipeline.reduce((acc, elm, index, arr) => {
            
            return this.ops[elm.method].call(acc, elm.fn);
        }, this.init());
    }

    init = () => {
        return this.ops[this.pipeline[0].method].call(this.data, this.pipeline[0].fn);
    };

    createKey = (m, f) => {
        this.pipeline.push({
            method: m,
            fn: f
        });
    };

    where = (func) => {
        this.createKey("where", func);
        return this;
    };
    select = (func) => {
        this.createKey("select", func);
        return this;
    };
    aggregate = (func) => {
        this.createKey("aggregate", func);
        return this;
    };
    any = (func) => {
        this.createKey("any", func);
        return this;
    };
    all = (func) => {
        this.createKey("all", func);
        return this;
    };

    

    // ops_where(fn) {
    //     return this.filter(fn);
    // }
    // ops_select(fn) {
    //     return this.map(fn);
    // }
    // ops_aggregate(fn) {
    //     return this.reduce(fn);
    // }
    // ops_any(fn) {
    //     return this.some(fn);
    // }
    // ops_all(fn) {
    //     return this.every(fn);
    // }
}
