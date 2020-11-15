// Use d3.json to read local json file
//      Set path to data file

// ***** Review of samples.json: key and structure
//          names = simple array
//          metadata = array of objects
//              object keys: id, ethnicity, gender, age, location, bbtype, wfreq
//          samples = array of objects contaning arrays
//              object keys: id. otu_ids, sample_values, otu_labels


// Review of screenshots:
//  dashboard_part1.png & dashboard_part 2:
//     1. Select Sample: dropdown using ID: 940 >> metadata: id
//     2. Sample MetaData: Unordered list with:
//          Age: 24 >> metadata: age
//          BBTYPE: I >> metadata: bbtype
//          ETHNICITY: Caucasian >> metadata: ethnicity
//          GENDER: F >> metadata: gender
//          LOCATION: Beaufort/NC >> mwetadata: location
//          WFREQ: 2 >> metadata: wfreq
//          sample: 940 >> metadata: id
//     3. pie chart: % by samples: otu_id, samples: otu_id as label
//     4. bubble chart:
//           x-axis: >> samples: otu_id
//           y-axis: >> samples: sample_values
//           marker size >> samples: sample_values
//           marker color >> samples: otu_id
//           bubble label: >> samples: otu_labels
//     5. Belly Button Washing Frequency speedometer
//          Scrubs per week: >> metadata: wfreq
//  hw01.png: Horizontal bar
//          y-axis: samples: otu_ids
//          x-axis: samples: sample_values
//    

// Pseudo Code:
// 1. Pull required data out of json and into variables using map
// 2. Use plotly to build charts
// 3. Configure on change event with dropdowm



// Set path to json data file
var filepath = "../samples.json"

// Create function to 
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