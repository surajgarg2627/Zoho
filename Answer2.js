// Function to generate sample JSONs based on the given JSON structure 
function generateSampleJSONs(structure, numOfSamples) {

    // Array to store the generated sample JSONs

    const samples = [];

    // Loop through the desired number of samples 
    for (let i = 0; i < numOfSamples; i++) {

        // Object to hold the current sample JSON 
        const sample = {};

        // Iterate through each item in the structure

        structure.forEach(item => {

            // Check if the item has both key and type properties

            if (item.key && item.type) {

                // Depending on the type specified, generate sample data 
                switch (item.type) {

                    // If type is string, assign a sample string value

                    case "string":

                        sample[item.key] = "sample";

                        break;

                    // If type is number, assign a random number between 1 and 100 
                    case "number":
                        sample[item.key] = Math.floor(Math.random() * 100) + 1;

                        break;
                    // If type is boolean, assign a random true/false value 
                    case "boolean":

                        sample[item.key] = Math.random() < 0.5 ? true : false;
                        break;

                }
            }
        }
        );

        // Add the generated sample JSON to the samples array

        samples.push(sample);
    }

    //Return the array containing all the generated sample JSONs
    return samples;
}
// Example input structure

const structure = [

    {

        "key": "name",

        "type": "string"

    },

    {

        "key": "age",

        "type": "number"

    },

    {

        "key": "canVote",

        "type": "boolean"
    }
];

//Generate 2 sample JSONs based on the structure

const numOfSamples = 2;

const sampleOutput = generateSampleJSONs(structure, numOfSamples);

// Output the generated sample JSONS

onsole.log(sampleOutput);