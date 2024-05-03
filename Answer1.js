function mergeJSON(obj1, obj2) {

    // Create an empty object to store the merged result

    let merged = {};

    // Merge keys from obj1

    for (let key in obj1) {

        if (obj1.hasOwnProperty(key)) {

            // Check if the key exists in obj2 and both values are objects

            if (obj2.hasOwnProperty(key) && typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {

                // Recursively merge nested objects

                merged[key] = mergeJSON(obj1[key], obj2[key]);

            } else {

                // If the key doesn't exist in obj2 or values are not objects, use the value from obj1 
                merged[key] = obj1[key];

            }
        }

    }

    // Merge keys from obj2

    for (let key in obj2) {

        if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {

            // If the key doesn't exist in obj1, use the value from obj2

            merged[key] = obj2[key];

        }

    }

    // Return the merged object

    return merged;

}

// Sample input JSON objects

let json1 = {

    "key-1": "value-1.1", "key-2": "value-1.2", "key-3": {
        "key-3.1": "value-1.3"

    }

};

let json2 = {
    "key-2": "value-2.2", "key-3": {
        "key-3.2": "value-2.4"

    }

};

// Merge JSON objects

let mergedJSON = mergeJSON(json1, json2); console.log(mergedJSON);

