var givenObj = {
    "Key1": "1",
    "Key2": {
        "a": "2",
        "b": "3",
        "c": {
            "d": "4",
            "e": "5"
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



/**
 * =============output =======
 * {
 * key1:1,
 * key2.a:2,
 * key2.b:3,
 * key2.c.d:4,
 * key2.c.e:5}
 */