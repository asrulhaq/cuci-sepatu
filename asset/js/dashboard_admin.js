// Authentication check
if (localStorage.getItem('adminLoggedIn') !== 'true') {
  window.location.href = 'admin_login.html';
}

// Menu
function addMenu() {
  const name = document.getElementById('menuName').value;
  const price = document.getElementById('menuPrice').value;
  if (!name || !price) return alert("Lengkapi semua kolom!");

  let menuData = JSON.parse(localStorage.getItem('menus')) || [];
  menuData.push({ name, price });
  localStorage.setItem('menus', JSON.stringify(menuData));
  renderMenu();
}

// Lokasi
function updateLokasi() {
  const lokasi = document.getElementById('lokasiText').value;
  if (!lokasi) return alert("Lokasi tidak boleh kosong!");
  localStorage.setItem('lokasi', lokasi);
  renderLokasi();
}

function renderMenu() {
  const menuData = JSON.parse(localStorage.getItem('menus')) || [];
  const list = document.getElementById('menuList');
  list.innerHTML = '';
  menuData.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Rp${item.price}`;
    list.appendChild(li);
  });
}

function renderLokasi() {
  const lokasi = localStorage.getItem('lokasi') || '(belum diisi)';
  document.getElementById('lokasiDisplay').textContent = lokasi;
}

// Logout function
function logout() {
  localStorage.setItem('adminLoggedIn', 'false');
  window.location.href = 'admin_login.html';
}

window.onload = () => {
  // Authentication check again on page load
  if (localStorage.getItem('adminLoggedIn') !== 'true') {
    window.location.href = 'admin_login.html';
    return;
  }
  
  renderMenu();
  renderLokasi();
};
