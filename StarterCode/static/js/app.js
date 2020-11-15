// Use d3.json to read local json file
//      Set path to data file
var filepath = "../samples.json"

function importData() {

    d3.json(filepath).then(function (data) {
        console.log(data);
        console.log("Keys");
        console.log(Object.keys(data));
        console.log("Values");
        console.log(Object.values(data));
        console.log("Entries");
        console.log(Object.entries(data));

        //Break data object into component parts
        var names = data.names;
        console.log("Names");
        console.log(names);
        var metadata = data.metadata;
        console.log("Metadata");
        console.log(metadata)
        console.log("Samples");
        var samples = data.samples;
        console.log(samples);

        //find the keys
        console.log("Sample Keys");
        console.log(Object.keys(samples));






        // Use map to enumerate the values within metadata
        var Id = data.metadata.map(item => item.id);
        console.log(Id)
    })

}


// Call function
importData()