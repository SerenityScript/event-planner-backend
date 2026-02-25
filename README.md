# Event Planner Backend

Backend API for the **Event Planner** application.  
Built with **Node.js + Express** and **MongoDB (Mongoose)**. 
The API is modular (events, tasks, guests, dishes, shopping).

---

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- dotenv
- cors

---

## Architecture

The backend follows a modular structure:

src/
  app.js
  server.js
  routes/
    index.js
  modules/
    event/
    task/
    guest/
    dish/
    shopping/

Each module contains:
- `model.js`
- `controller.js`
- `routes.js`

---

## Getting Started

### 1 Install dependencies
```
npm install
```
### 2 Create .env

Create a .env file in the project root:

PORT=8000
MONGODB_LINK=mongodb://127.0.0.1:27017/event-planner

PORT is optional (defaults to 8000).

### 3 Run the server
```
node src/server.js
```
If MongoDB connection is successful you should see:

Mongo connected
Server running on 8000

---

## API Base URL

All routes are mounted under:

/api

---

## Health Check

Quick check if the server is running:

GET /api/health

Response:

OK

---

## Modules / Routes

The router mounts the following modules:

- Events (src/modules/event/routes.js)
- Tasks (src/modules/task/routes.js)
- Guests (src/modules/guest/routes.js)
- Dishes (src/modules/dish/routes.js)
- Shopping (src/modules/shopping/routes.js)

Exact endpoint paths depend on the module route files.
Open src/modules/*/routes.js to see the concrete URLs (GET/POST/PUT/DELETE).

---

## Middleware

- `express.json()` – JSON body parsing
- `cors()` – enabled (currently allows all origins)

To restrict CORS:

```js
app.use(cors({ origin: "http://localhost:5173" }));
```
---
## Notes

mongoose.set('strictQuery', false); is enabled in src/server.js

Database connection is created via process.env.MONGODB_LINK

---

## Future Improvements

- Authentication (JWT)
- Role-based access
- Validation (Joi / Zod)
- Swagger documentation
- Docker support

---

## 👩‍💻 Author

Yulia Siebrandt
Fullstack Developer
Hamburg, Germany