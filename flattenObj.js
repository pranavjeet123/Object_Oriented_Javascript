var givenObj = {
    "Key1": "1",
    "Key2": {
        "a": "2",
        "b": "3",
        "c": {
            "d": "3",
            "e": "1"
        }
    }
};

function flattenObj(obj) {
    var flattenedobj = {};

    function flattenObjHelper(obj, prop) {
        if (typeof obj != 'object') {
            flattenedobj[prop] = obj;
            return;
        }

        for (var key in obj) {
            if (prop == '') {
                flattenObjHelper(obj[key], prop + key);
            }
            else {
                flattenObjHelper(obj[key], prop + '.' + key);
            }
        }
    }

    flattenObjHelper(obj, '');
    console.log(flattenedobj);

}

flattenObj(givenObj);
