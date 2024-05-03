// Function to fetch value from JSON object based on path 
function fetchValue(jsonPath, jsonObject) {

    // Split the JSON path into individual keys

    const keys = jsonPath.split('.');

    let value = jsonObject;

    // Iterate through each key in the path

    for (let key of keys) {

        // If the current key exists in the JSON object, update the value

        if (value.hasOwnProperty(key)) {

            value = value[key];

        } else {

            // If the key does not exist, throw an error 
            throw new Error("Path does not exist.");

        }

    }

    // Return the final value

    return value;

}

// Sample JSON object

const jsonObject = {

    "India": {

        "TamilNadu": {

            "Chennai": {

                "Population": 11933697

            },

            "Trichy": {

                "Population": 1221960

            }

        }

    }
};

// Sample input path 
const inputPath = "India. TamilNadu.Chennai. Population";

try {

    // Fetch and print the value based on the input path 
    const result = fetchValue(inputPath, jsonObject); 
    console.log(result);

} catch (error) {

    // Print the error message if the path is invalid 
    console.error(error.message);
}