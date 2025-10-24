import { AddSiswa, Login, Register } from "./libs/Karyawan.js"

const args = process.argv
const command = args[2]
const input = args[3]

switch (command) {
    case "register":
        Register(input)
        break
    case "login":
        Login(input)
        break
    case "addsiswa":
        AddSiswa(input)
        break
    default:
        console.log("command tidak ditemukan")
        break;
}