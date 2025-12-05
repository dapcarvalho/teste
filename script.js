// === Alternar entre login e cadastro ===
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

showRegister.addEventListener("click", () => {
  loginContainer.style.display = "none";
  registerContainer.style.display = "flex";
});

showLogin.addEventListener("click", () => {
  registerContainer.style.display = "none";
  loginContainer.style.display = "flex";
});

// === Cadastro ===
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  localStorage.setItem("user", JSON.stringify({ name, email, password, backups: [] }));
  alert("Cadastro realizado com sucesso!");
  registerContainer.style.display = "none";
  loginContainer.style.display = "flex";
});

// === Login ===
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    alert("Login realizado com sucesso!");
    loginContainer.style.display = "none";
    document.getElementById("mainHeader").classList.remove("hidden");
    document.getElementById("content").classList.remove("hidden");
    updateProfile();
    loadBackups();
  } else {
    alert("Email ou senha incorretos.");
  }
});

// === Alternar Abas ===
const tabs = document.querySelectorAll(".tab");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("data-tab");
    tabs.forEach((tab) => tab.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  });
});

// === Logout ===
document.getElementById("logoutBtn").addEventListener("click", () => {
  document.getElementById("mainHeader").classList.add("hidden");
  document.getElementById("content").classList.add("hidden");
  loginContainer.style.display = "flex";
});

// === Função Proteção ===
document.getElementById("scanBtn").addEventListener("click", () => {
  const result = document.getElementById("scanResult");
  result.innerHTML = "🔍 Verificando sistema...";
  setTimeout(() => {
    const foundThreat = Math.random() < 0.3;
    if (foundThreat) {
      result.innerHTML = "⚠️ Ameaça detectada e removida com sucesso!";
    } else {
      result.innerHTML = "✅ Nenhuma ameaça encontrada. Sistema seguro!";
    }
  }, 2000);
});

// === Função Backup ===
document.getElementById("backupBtn").addEventListener("click", () => {
  const fileInput = document.getElementById("backupFile");
  const user = JSON.parse(localStorage.getItem("user"));

  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    user.backups.push(fileName);
    localStorage.setItem("user", JSON.stringify(user));
    loadBackups();
    alert(`Backup do arquivo "${fileName}" realizado com sucesso!`);
  } else {
    alert("Selecione um arquivo para fazer backup.");
  }
});

function loadBackups() {
  const user = JSON.parse(localStorage.getItem("user"));
  const listDiv = document.getElementById("backupList");
  const select = document.getElementById("recoverSelect");

  listDiv.innerHTML = "";
  select.innerHTML = "";

  if (user.backups.length === 0) {
    listDiv.innerHTML = "Nenhum backup disponível.";
    return;
  }

  user.backups.forEach((file) => {
    listDiv.innerHTML += `📁 ${file}<br>`;
    const option = document.createElement("option");
    option.value = file;
    option.textContent = file;
    select.appendChild(option);
  });
}

// === Função Recuperação ===
document.getElementById("recoverBtn").addEventListener("click", () => {
  const select = document.getElementById("recoverSelect");
  const recoverResult = document.getElementById("recoverResult");
  const selectedFile = select.value;

  if (selectedFile) {
    recoverResult.innerHTML = `✅ Arquivo "${selectedFile}" restaurado com sucesso!`;
  } else {
    recoverResult.innerHTML = "Nenhum arquivo selecionado.";
  }
});

// === Perfil ===
function updateProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("profileData").innerHTML = `
    <p><strong>Nome:</strong> ${user.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Backups realizados:</strong> ${user.backups.length}</p>
  `;
}