# Tool Management Web Interface

A web-based interface for managing tools within a warehouse or company.  
This project provides a front-end dashboard and a Node.js backend script to connect to a SQL Server database, allowing basic tool administration.

> ⚠️ **Project Status**  
> This project is **not yet complete**. It is an early version meant to showcase the basic structure and database connectivity.

## 🚧 Planned Improvements
- Add full CRUD functionality (Create, Read, Update, Delete) for tools.
- Build a complete **Editare** page to edit and remove tools.
- Implement a dynamic search/filter feature connected to the database.
- Integrate proper user authentication and role-based access control.
- Move database credentials to environment variables for secure configuration.
- Improve overall UI/UX with responsive design and enhanced styling.

## 📂 Project Structure

node_modules/ # Dependencies
editare.html # Page for editing tools (placeholder)
index.html # Main dashboard page for viewing tools
user_management.html # User management page
styles.css # Custom styles + Bootstrap import
tool_management.js # Node.js script for SQL Server connection & queries
package.json # Project dependencies and scripts
package-lock.json # Dependency lock file

## ✨ Features
- **Dashboard Interface**: HTML/CSS pages with a sidebar for navigation.
- **SQL Server Integration**: Connects to a Microsoft SQL Server database using the `mssql` Node.js package.
- **Tool Management**: Demonstrates SELECT and INSERT queries to view and add tools.

## 🛠️ Technologies Used
- **Frontend**: HTML5, CSS3, [Bootstrap](https://getbootstrap.com/)
- **Backend**: Node.js with the [mssql](https://www.npmjs.com/package/mssql) package
- **Database**: Microsoft SQL Server

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- Microsoft SQL Server with a database named `ToolManagementDB` and a `Tools` table.

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```
2. Install dependencies:
   ```
   npm install
   ```
### Configuration
Edit the database connection settings in **tool_management.js**:
  ```
  const config = {
    user: 'YOUR_SQL_USER',
    password: 'YOUR_SQL_PASSWORD',
    server: 'YOUR_SERVER_NAME',
    database: 'ToolManagementDB',
    connectionTimeout: 30000,
    options: {
      trustedConnection: true
    }
  };
  ```
⚠️ **Important**:
Replace the default credentials in the code with environment variables or a **.env** file for security (never commit real passwords).

### Run
Execute the **Node.js** script to test database operations:
  ```
  node tool_management.js
  ```
