import * as fs from "node:fs";

export function Read(file: String){

  fs.readFile(file, 'utf-8', (err, content: String) => {
    if (err) {
      console.log(err);
    } else {
      console.log(content);
    }
  })

}

export function Rename(file: String, nuevo: String){
  fs.rename(file, nuevo, (err) => {
    if (err) {
      throw err;
    }
    console.log("Name changed");
  })
}

export function Crear(file: String, content: String){
  fs.writeFile(file, content, (err) => {
    if (err) {
      throw err;
    }
    console.log("File Created");
  })
}

export function Delete(file: String){
  fs.unlink(file, (err) => {
    if (err) {
      throw err;
    }
    console.log("File Deleted");
  })
}

