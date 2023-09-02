// SECTIUNE DE CONECTARE LA SQL SERVER
const sql = require('mssql');

// Info de CONECTARE la baza de date SQL Server
const config = {
  user: 'sa',
  password: 'mihai2000',
  server: 'DESKTOP-GVTOHC2\\SQL2019X',
  database: 'ToolManagementDB',
  connectionTimeout: 30000,
  options:{
      trustedConnection: true
  }
};


// TESTARE CONEXIUNE SQL - JS
const pool = new sql.ConnectionPool(config);

pool.connect().then(() => {
  console.log('Conectat la baza de date SQL Server');

  // Interogare SELECT
  const selectQuery = 'SELECT * FROM Tools';
  const request = new sql.Request(pool);

  request.query(selectQuery, (err, result) => {
    if (err) {
      console.error('Eroare la interogare SELECT:', err);
      return;
    }

    console.log('Rezultatul interogării SELECT:', result.recordset);

    // Inserare de date in tabel
    const insertQuery = `
      INSERT INTO Tools (ToolID, Nume_Tool, Data_Adaugare, Nume_Parametri, Valoare_Parametri)
      VALUES (@ToolID, @Nume_Tool, @Data_Adaugare, @Nume_Parametri, @Valoare_Parametri)
    `;

    const insertRequest = new sql.Request(pool);
    insertRequest.input('ToolID', sql.Int, 1);
    insertRequest.input('Nume_Tool', sql.VarChar(20), 'NumeTool');
    insertRequest.input('Data_Adaugare', sql.DateTime, new Date());
    insertRequest.input('Nume_Parametri', sql.VarChar(20), 'NumeParam');
    insertRequest.input('Valoare_Parametri', sql.Float, 3.14);

    insertRequest.query(insertQuery, (err, result) => {
      if (err) {
        console.error('Eroare la inserare:', err);
        return;
      }

      console.log('Datele au fost inserate cu succes.');
      // Incheiere conexiune baza de date
      pool.close();
    });
  });
}).catch((err) => {
  console.error('Eroare la conectarea la baza de date:', err);
});
