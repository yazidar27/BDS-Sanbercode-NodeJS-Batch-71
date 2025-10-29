const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

// Fungsi baca file JSON
const readData = () => {
  try {
    const data = fs.readFileSync("./data.json", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Fungsi tulis file JSON
const writeData = (data) => {
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
};

// =============================
// RELEASE 0 - REGISTER
// =============================
app.post("/register", (req, res) => {
  const { name, password, role } = req.body;
  const data = readData();

  if (!name || !password || !role) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  // Cek apakah nama sudah terdaftar
  const existing = data.find((item) => item.name === name);
  if (existing) {
    return res.status(400).json({ message: "Nama sudah terdaftar" });
  }

  const newEmployee = { name, password, role, isLogin: false };
  data.push(newEmployee);
  writeData(data);

  res.json({ message: "Berhasil register" });
});

// =============================
// RELEASE 1 - GET SEMUA KARYAWAN
// =============================
app.get("/karyawan", (req, res) => {
  const data = readData();
  res.json({
    message: "Berhasil get karyawan",
    data,
  });
});

// =============================
// RELEASE 2 - LOGIN
// =============================
app.post("/login", (req, res) => {
  const { name, password } = req.body;
  const data = readData();

  const user = data.find(
    (item) => item.name === name && item.password === password
  );

  if (!user) {
    return res.status(400).json({ message: "Nama atau password salah" });
  }

  // Pastikan hanya satu user login
  data.forEach((item) => (item.isLogin = false));
  user.isLogin = true;

  writeData(data);
  res.json({ message: "Berhasil login" });
});

// =============================
// RELEASE 3 - ADD SISWA
// =============================
app.post("/karyawan/:name/siswa", (req, res) => {
  const { name: studentName, class: studentClass } = req.body;
  const trainerName = req.params.name;

  const data = readData();

  // Cek apakah admin login
  const admin = data.find(
    (item) => item.role === "admin" && item.isLogin === true
  );
  if (!admin) {
    return res.status(403).json({
      message: "Hanya admin yang boleh menambahkan siswa dan harus login",
    });
  }

  // Cek trainer
  const trainer = data.find(
    (item) => item.name === trainerName && item.role === "trainer"
  );
  if (!trainer) {
    return res.status(404).json({ message: "Trainer tidak ditemukan" });
  }

  if (!trainer.students) {
    trainer.students = [];
  }

  trainer.students.push({ name: studentName, class: studentClass });
  writeData(data);

  res.json({ message: "Berhasil add siswa" });
});

// =============================
// RUN SERVER
// =============================
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

module.exports = app;
