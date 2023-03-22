interface User {
  name: string;
  age: number;
  skills?: string[];
}

let user: User = {
  name: "Вася",
  age: 25,
};

function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}

multiply(5);

interface UserPro {
  login: string;
  password?: {
    type: "primery" | "secondary";
  };
}

function testPass(user: UserPro) {
  const t = user.password?.type;
}

testPass(user);
