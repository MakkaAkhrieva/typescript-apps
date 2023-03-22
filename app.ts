/* type httpMethod = "post" | "get";

type coolString = string;

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
  return 1;
}

fetchWithAuth("d", "post");

let methods = "post";
fetchWithAuth("dsd", methods as "post"); */

type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  name: string;
  id: number;
};

type UserWithRole = { user: User; role: Role };

let userWithRole: UserWithRole = {
  user: {
    name: "Вася",
    age: 25,
    skills: [],
  },
  role: {
    name: "admin",
    id: 1,
  },
};
