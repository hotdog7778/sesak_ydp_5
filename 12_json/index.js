// JSON
const car = `{
    "model": "IONIQ 5",
    "company": "HYUNDAI",
    "price": 50000000,
    "year": 2023,
    "isElectricCar": true,
    "options": ["side mirror", "smart sensor", "built-in cam" ]
}`;

console.log(car);

const obj = JSON.parse(car);

console.log(obj.model);
console.log(obj.price);

const json = JSON.stringify(obj);
console.log(typeof json); // string
console.log(json.model); // undefined
