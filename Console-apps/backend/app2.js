const getData = async () => {
  const fetchSettings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    //new Headers(),
    mode: "cors",
    cache: "default",
  };

  try {
    const response = await fetch("http://localhost:3000/users", fetchSettings);
    const jsonResponse = await response.json();
    if (!jsonResponse) throw new Error("Ops");

    return jsonResponse;
  } catch (err) {
    console.error(err);
  }
};

const useData = async () => {
  const data = await getData();
  console.log(data);
  return ` ${data
    .map((user) => {
      const { id, name, email } = user;

      return `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
        </tr>`;
    })
    .join("")}
`;
};

window.onclick = async () => {
  document.querySelector("#table").innerHTML = await useData();
};
