import fs from "fs";
import fsPromises from "fs/promises";

// ======================
// Release 0: REGISTER
// ======================
export const Register = (InputData) => {
  const [name, password, role] = InputData.split(",");

  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) throw err;

    const employees = JSON.parse(data);

    const newEmployee = {
      name,
      password,
      role,
      isLogin: false,
    };

    employees.push(newEmployee);

    fs.writeFile("data.json", JSON.stringify(employees, null, 2), (err) => {
      if (err) throw err;
      console.log("Berhasil register");
    });
  });
};

// ======================
// Release 1: LOGIN (Promise)
// ======================
export const Login = (InputData) => {
  const [name, password] = InputData.split(",");

  fsPromises
    .readFile("data.json", "utf-8")
    .then((data) => {
      const employees = JSON.parse(data);
      const user = employees.find(
        (emp) => emp.name === name && emp.password === password
      );

      if (!user) {
        console.log("User tidak ditemukan atau password salah");
        return;
      }

      user.isLogin = true;

      return fsPromises.writeFile(
        "data.json",
        JSON.stringify(employees, null, 2)
      );
    })
    .then(() => console.log("Berhasil Login"))
    .catch((err) => console.error(err));
};

// ======================
// Release 2: ADD SISWA (Async/Await)
// ======================
export const AddSiswa = async (InputData) => {
  const [studentName, trainerName] = InputData.split(",");

  try {
    const data = await fsPromises.readFile("data.json", "utf-8");
    const employees = JSON.parse(data);

    // cari admin yang sedang login
    const admin = employees.find((emp) => emp.role === "admin" && emp.isLogin);
    if (!admin) {
      console.log("Hanya admin yang login yang boleh menambah siswa");
      return;
    }

    // cari trainer
    const trainer = employees.find(
      (emp) => emp.name === trainerName && emp.role === "trainer"
    );

    if (!trainer) {
      console.log("Trainer tidak ditemukan");
      return;
    }

    if (!trainer.students) trainer.students = [];
    trainer.students.push({ name: studentName });

    await fsPromises.writeFile("data.json", JSON.stringify(employees, null, 2));
    console.log("Berhasil add siswa");
  } catch (err) {
    console.error(err);
  }
};
