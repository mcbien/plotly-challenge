// Use d3.json to read local json file
//      Set path to data file

// ***** Review of samples.json: key and structure
//          names = simple array
//          metadata = array of objects
//              object keys: id, ethnicity, gender, age, location, bbtype, wfreq
//          samples = array of objects contaning arrays
//              object keys: id, otu_ids, sample_values, otu_labels


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
// 2. Filter data based on id entered.  Note: id is a key in 
// 2. Use plotly to build charts Note: will need to cast metadata: sample values as integer for graphing
// 3. Configure on change event with dropdowm



// Set path to json data file
var filepath = "../samples.json"

// Create function to parse the json
function importData() {

    d3.json(filepath).then(function (data) {
        // console.log(data);
        // console.log("Keys");
        // console.log(Object.keys(data));
        // console.log("Values");
        // console.log(Object.values(data));
        // console.log("Entries");
        // console.log(Object.entries(data));

        //Break data object into component parts
        var names = data.names;
        // console.log("Names");
        // console.log(names);
        var metadata = data.metadata;
        // console.log("Metadata");
        // console.log(metadata)
        // console.log("Samples");
        var samples = data.samples;
        // console.log(samples);

        // Use forEach to create option for dropdown
        // Select select element
        var selectElement = d3.select("#selDataset");
        // data.names.forEach(name => {
        //     console.log(name);
        Object.entries(data.names).forEach(([key, value]) => {
            // console.log(key, value);
            var option = selectElement.append("option");
            option.property('value', value);
            option.text(value);
        })

        // Grab selected id from dropdown
        // dropdownSelection = select.property(onchange.value)
        // console.log(dropdownSelect);
        var selection = d3.select("#selDataset").node().value
        console.log(selection)

        // filter data
        var tempId = "940";
        var sampleFilter = samples.filter(sample => sample.id === selection);
        console.log("Selection Sample Data");
        console.log(sampleFilter);
        var metadataFilter = metadata.filter(meta => meta.id.toString() === selection);
        console.log("Selection Metadata");
        console.log(metadataFilter);

        //Create plotly bar chart



    })

}

// Call function
importData()

        // Use map to enumerate the values within metadata
        //var metadataId = data.metadata.map(item => item.id);