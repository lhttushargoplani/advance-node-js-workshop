let data = {
    name: "David",
    age: 40,
    gender: "male"
};

// to convert this json to string we can use JSON.stringyfy
data = JSON.stringify(data);
console.log(data); // output - '{"name":"David","age":40,"gender":"male"}'

// to convert string json to json we can use JSON.parse
data = JSON.parse(data);
console.log(data); // output - {"name":"David","age":40,"gender":"male"}