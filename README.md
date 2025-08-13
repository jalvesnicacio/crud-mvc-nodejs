# Crud-MVC-Nodejs

## 📌 Purpose

This project is an experimental lab for developing a **CRUD** in **Node.js**, following the layered **MVC** (Model-View-Controller) architecture.

Since the goal is to build an **API**, the **View layer is not implemented**.  
All data retrieved by the CRUD operations is delivered in **JSON format**.

---

## 🛠 Technologies Used

- **Node.js**
- **SQLite** (database)
- **Sequelize** (ORM)

---

## 📂 Project Structure

The application follows the **MVC** pattern, separating responsibilities into:

- **Models** – Entity definitions and database integration using Sequelize.
- **Controllers** – Business logic and request/response handling.
- _(No View layer – API returns JSON data directly)._

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/crud-mvc-nodejs.git
cd crud-mvc-nodejs
```

### 2.Install dependencies

```bash
npm install
```

### 3. Configure the database

Edit the src/config/config.json file as needed.
By default, the project uses SQLite.

### 4. Run migrations

```bash
npx sequelize-cli db:migrate
```

### 5. Start the project

```bash
npm start
```

⸻

## 📌 Project Status

🟢 In development

⸻

## 📄 License

This project is licensed under the MIT License.
You are free to use and modify it.
