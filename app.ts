function fetchWithAuth(url: string, method: "post" | "get"): 1 | -1 {
  return 1;
}

fetchWithAuth("d", "post");

let methods = "post";
fetchWithAuth("dsd", methods as "post");
