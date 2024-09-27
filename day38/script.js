const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const userApi = `http://localhost:3000/users`;
const root = document.getElementById("root");
const form = document.querySelector(".form-add");
const search = document.querySelector(".search");
const render = (data) => {
  root.innerHTML = `<div class="users">
            <h2>Danh sách người dùng</h2>
            ${
              data.length
                ? data
                    .map(
                      ({ name, id }) =>
                        `<div class="user-item">
                <p>Tên: ${name}</p>                
                <button data-id="${id}" data-type="detail">Chi tiết</button>
                <button data-id="${id}" data-type="delete">Xóa</button>
                <button data-id="${id}" data-type="update">Sửa</button>
            </div>`
                    )
                    .join("")
                : "không có user nào"
            }
             </div>`;
  root.querySelector(".users").addEventListener("click", (e) => {
    if (e.target.dataset.id && e.target.dataset.type === "detail") {
      const userId = e.target.dataset.id;
      showDetailUser(userId);
    }
    if (e.target.dataset.id && e.target.dataset.type === "delete") {
      if (confirm("ban co muon xoa khong")) {
        const userId = e.target.dataset.id;
        deleteUser(userId);
      }
    }
    if (e.target.dataset.id && e.target.dataset.type === "update") {
      const userId = e.target.dataset.id;
      updateUser(userId);
    }
  });
};
const deleteUser = async (id) => {
  const response = await fetch(`${userApi}/${id}`, {
    method: "DELETE",
  });
  if (response.ok) showUser();
};
const showDetailUser = async (id) => {
  const response = await fetch(`${userApi}/${id}`);
  const data = await response.json();
  //   console.log(data);
  renderUser(data);
};
const renderUser = ({ name, email }) => {
  root.innerHTML = `<div class="users">
  <h2>Chi tiết người dùng</h2>
    <p>Tên: ${name}</p>
    <p>Email: ${email}</p>
    <button onclick="showUser()">Quay lai</button>
    </div>
    `;
};
const query = {
  _sort: "id",
  _order: "desc",
  _limit: 2,
  _page: 1,
};
const showUser = async () => {
  const queryString = Object.keys(query)
    ? `?${new URLSearchParams(query).toString()}`
    : "";
  const response = await fetch(userApi + queryString);
  const data = await response.json();
  render(data);
  const totalUsers = response.headers.get("X-Total-Count");
  renderPaginate(totalUsers);
};
showUser();
const formAdd = document.querySelector(".form-add");
formAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries([...new FormData(e.target)]);
  if (form.dataset.id) {
    const id = form.dataset.id;
    updateUserApi(id, formData);
  } else {
    addUser(formData);
  }
});
const addUser = async (data) => {
  const response = await fetch(userApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) showUser();
};
const updateUser = async (data) => {
  // const response = await fetch(`${userApi}/${data.id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  // if (response.ok) showUser();
  showFormUpdate(data);
};
const showFormUpdate = async (id) => {
  const response = await fetch(`${userApi}/${id}`);
  if (response.ok) {
    const data = await response.json();
    const nameEl = form.querySelector("#name");
    const emailEl = form.querySelector("#email");
    const btnEl = form.querySelector("button");
    nameEl.value = data.name;
    emailEl.value = data.email;
    btnEl.innerText = "Sửa";
    form.dataset.id = id;
  } else {
    alert("khong tim thay nguoi dung");
  }
};
const updateUserApi = async (id, data) => {
  const response = await fetch(`${userApi}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    resetForm();
    showUser();
  }
};
const resetForm = () => {
  form.reset();
  form.dataset.id = "";
  form.querySelector("button").innerText = "Add";
};

const handleSearch = debounce((e) => {
  const value = e.target.value ? e.target.value.trim() : "";
  query.q = value;
  showUser();
}, 500);
search.addEventListener("input", handleSearch);
const pagination = document.querySelector(".pagination");
const renderPaginate = (totalUsers) => {
  const totalPages = Math.ceil(totalUsers / query._limit);
  let html = ``;
  for (let i = 1; i <= totalPages; i++) {
    html += `<a href="" style="${
      i === query._page ? "color:red;background:yellow" : ""
    }" class="page" >${i}</a>`;
  }
  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }
  pagination.innerHTML = `${
    query._page === 1 ? "" : `<a href="" class="prev">Prev</a>`
  } 
  ${html}${
    query._page === totalPages ? "" : `<a href="" class="next">Next</a>`
  } 
`;
};
pagination.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("page")) {
    const page = +e.target.innerText;
    query._page = page;
  }
  if (e.target.classList.contains("prev")) {
    query._page--;
  }
  if (e.target.classList.contains("next")) {
    query._page++;
  }
  showUser();
});
