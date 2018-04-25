import Linq from "../src/linq";

describe("Linq Perf Tests", ()=>{

    const data_Array_Of_Objects = [
        {
            firstname: "first",
            lastname: "last",
            location: "here"
        },
        {
            firstname: "first",
            lastname: "last",
            location: "here"
        },
        {
            firstname: "first",
            lastname: "last",
            location: "here"
        },
        {
            firstname: "first",
            lastname: "last",
            location: "here"
        }
    ]

    it("Compare .Select to .map", ()=>{
        var tlinqstart = performance.now();
        var l = new Linq(data_Array_Of_Objects);
        l.Select(x=>x.firstname);
        var linqResult = l.Value();
        var tlinqend = performance.now();

        var tmapstart = performance.now();
        var mapResult = data_Array_Of_Objects.map(x=>x.firstname);
        var tmapend = performance.now();

        console.log("Linq: " + (tlinqend - tlinqstart));
        console.log("map: " + (tmapend - tmapstart));


    });

});