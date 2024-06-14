const mysql = require("mysql2/promise");
const databaseconfig = require("../config/database.js");

async function createusuariotable() {
try{

    const connection = await mysql.createConnection(databaseconfig);

    await connection.query(`USE ${databaseconfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS usuario (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        cpf VARCHAR(255) NOT NULL,
        endereco VARCHAR(255) NOT NULL,
        telefone VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        senhaUsuario VARCHAR(255) NOT NULL,
        tipoCadastro INT NOT NULL
    )`);

    await connection.end();
    
    console.log(`Table user created!`);
    }  catch(error) {
        console.log(`Error creating table: ${error}`);
    }
}

createusuariotable();
