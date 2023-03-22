interface User {
  name: string;
  age: number;
  skills: string[];

  log: (id: number) => string;
}

interface Role {
  roleId: number;
}
interface UserWithRole extends User, Role {
  createdAt: Date;
}

let user: UserWithRole = {
  roleId: 1,
  name: "Вася",
  age: 25,
  skills: ["sdfas", "asdfasdf"],
  createdAt: new Date(),

  log(id) {
    return "1";
  },
};

interface StringArray {
  [index: number]: string;
}

let phones: StringArray;
phones = ["iPhone 7", "HTC 10", "HP Elite x3"];

let myPhone: string = phones[0];
console.log(myPhone);

interface Dictionary {
  [index: string]: string;
}

var colors: Dictionary = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";

console.log(colors["red"]);
