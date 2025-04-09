let arr = [
  { nameInput: "John", age: 20, address: "pkr" },
  { nameInput: "Sushan", age: 21, address: "pkr" },
  {
    nameInput: "Ramu",
    age: 21,
    address: "pkr",
  },
];

let mappedDiv = document.getElementById("mapped");

let mappedarr = arr.map(function (arr_from_map) {
  console.log(arr);
  return `name: ${arr_from_map.nameInput}, age: ${arr_from_map.age}, address: ${arr_from_map.address}`;
});

mappedDiv.innerHTML = mappedarr.join(" ");
console.log(mappedarr);
