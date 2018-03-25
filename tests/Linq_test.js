class Linq {
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
        
        this.init = this.init.bind(this);
        this.createKey = this.createKey.bind(this);
        this.where = this.where.bind(this);
        this.select = this.select.bind(this);
        this.aggregate = this.aggregate.bind(this);
        this.any = this.any.bind(this);
        this.all = this.all.bind(this);

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

    init(){
        return this.ops[this.pipeline[0].method].call(this.data, this.pipeline[0].fn);
    }

    createKey(m, f){
        this.pipeline.push({
            method: m,
            fn: f
        });
    };

    where(func){
        this.createKey("where", func);
        return this;
    };
    select(func){
        this.createKey("select", func);
        return this;
    };
    aggregate(func){
        this.createKey("aggregate", func);
        return this;
    };
    any(func){
        this.createKey("any", func);
        return this;
    };
    all(func){
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

var data = [{
  "data": [
    {
      "DisplayName": "Brightdog",
      "ResourceType": "Chegg, Inc."
    },
    {
      "DisplayName": "Yombu",
      "ResourceType": "Independent Bank Corp."
    },
    {
      "DisplayName": "Zoozzy",
      "ResourceType": "Advance Auto Parts Inc"
    },
    {
      "DisplayName": "Fivespan",
      "ResourceType": "Heritage Insurance Holdings, Inc."
    },
    {
      "DisplayName": "Browseblab",
      "ResourceType": "J.C. Penney Company, Inc. Holding Company"
    },
    {
      "DisplayName": "Skimia",
      "ResourceType": "Drive Shack Inc."
    },
    {
      "DisplayName": "Plambee",
      "ResourceType": "Marriott International"
    },
    {
      "DisplayName": "Oyope",
      "ResourceType": "Encore Capital Group Inc"
    },
    {
      "DisplayName": "Blogtag",
      "ResourceType": "News Corporation"
    },
    {
      "DisplayName": "Teklist",
      "ResourceType": "Scorpio Tankers Inc."
    },
    {
      "DisplayName": "Yakitri",
      "ResourceType": "The Providence Service Corporation"
    },
    {
      "DisplayName": "Muxo",
      "ResourceType": "Omega Protein Corporation"
    },
    {
      "DisplayName": "Centidel",
      "ResourceType": "Mitsubishi UFJ Financial Group Inc"
    },
    {
      "DisplayName": "Trudeo",
      "ResourceType": "Canadian National Railway Company"
    },
    {
      "DisplayName": "Livepath",
      "ResourceType": "Medley Management Inc."
    },
    {
      "DisplayName": "Quimm",
      "ResourceType": "MDC Partners Inc."
    },
    {
      "DisplayName": "Quinu",
      "ResourceType": "EMCOR Group, Inc."
    },
    {
      "DisplayName": "Quinu",
      "ResourceType": "Bio-Techne Corp"
    },
    {
      "DisplayName": "Dynazzy",
      "ResourceType": "Gaming Partners International Corporation"
    },
    {
      "DisplayName": "Yamia",
      "ResourceType": "Vanguard Russell 3000 ETF"
    },
    {
      "DisplayName": "Zava",
      "ResourceType": "Nordson Corporation"
    },
    {
      "DisplayName": "Twimm",
      "ResourceType": "Babcock"
    },
    {
      "DisplayName": "Quinu",
      "ResourceType": "T2 Biosystems, Inc."
    },
    {
      "DisplayName": "Devpulse",
      "ResourceType": "Electronic Arts Inc."
    },
    {
      "DisplayName": "Zoomcast",
      "ResourceType": "Ollie&#39;s Bargain Outlet Holdings, Inc."
    },
    {
      "DisplayName": "Eamia",
      "ResourceType": "BB&T Corporation"
    },
    {
      "DisplayName": "Twimm",
      "ResourceType": "Internet Initiative Japan, Inc."
    },
    {
      "DisplayName": "Zooveo",
      "ResourceType": "C"
    },
    {
      "DisplayName": "Realcube",
      "ResourceType": "Baozun Inc."
    },
    {
      "DisplayName": "Dabvine",
      "ResourceType": "Pioneer Municipal High Income Advantage Trust"
    },
    {
      "DisplayName": "Feedfish",
      "ResourceType": "Ignyta, Inc."
    },
    {
      "DisplayName": "Quaxo",
      "ResourceType": "InterDigital, Inc."
    },
    {
      "DisplayName": "Zoombox",
      "ResourceType": "Paragon Commercial Corporation"
    },
    {
      "DisplayName": "Tazzy",
      "ResourceType": "iStar Financial Inc."
    },
    {
      "DisplayName": "Kimia",
      "ResourceType": "Kayne Anderson MLP Investment Company"
    },
    {
      "DisplayName": "Layo",
      "ResourceType": "Tyler Technologies, Inc."
    },
    {
      "DisplayName": "Fivechat",
      "ResourceType": "Sypris Solutions, Inc."
    },
    {
      "DisplayName": "Mita",
      "ResourceType": "New Senior Investment Group Inc."
    },
    {
      "DisplayName": "Pixoboo",
      "ResourceType": "W&T Offshore, Inc."
    },
    {
      "DisplayName": "Thoughtstorm",
      "ResourceType": "Heico Corporation"
    },
    {
      "DisplayName": "Quimba",
      "ResourceType": "Citizens Holding Company"
    },
    {
      "DisplayName": "Oyondu",
      "ResourceType": "Steven Madden, Ltd."
    },
    {
      "DisplayName": "Skyble",
      "ResourceType": "EnLink Midstream, LLC"
    }
  ],
  "request": "Cater",
  "success": false
}];





// var one = new Linq(data);
// var two = one.where(x=>x.gender==="Male");
// var three = two.select(x=>x.email);
// console.log(three.Value);

// var test2 = new Linq(data);
// var result2 = test2.where(x=>x.gender==="Female");
// console.log(result2.Value);

var test3 = new Linq(data);
console.log(test3.select((x)=>{console.log(x);return x.data;}).where(x=>x.ResourceType.includes("LLC")).Value);