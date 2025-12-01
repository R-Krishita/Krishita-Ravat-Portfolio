# Portfolio Backend Server

This is the backend server for the portfolio website contact form. It uses Express.js and MongoDB to store contact form submissions.

## Setup Instructions

### 1. Install Dependencies
The dependencies are already installed, but if needed:
```bash
cd server
npm install
```

### 2. Configure MongoDB

You have two options for MongoDB:

#### Option A: Local MongoDB (Recommended for Development)
1. Install MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```
4. The default configuration in `.env` should work:
   ```
   MONGODB_URI=mongodb://localhost:27017/portfolio
   PORT=5000
   ```

#### Option B: MongoDB Atlas (Free Cloud Database)
1. Create a free account at https://www.mongodb.com/cloud/atlas
2. Create a new free cluster (M0)
3. Create a database user with username and password
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string from Atlas
6. Copy `.env.example` to `.env` and update:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/portfolio?retryWrites=true&w=majority
   PORT=5000
   ```
   Replace `<username>`, `<password>`, and `<cluster>` with your actual values.

### 3. Start the Server

```bash
npm start
```

The server will start on http://localhost:5000

You should see:
```
🚀 Server is running on http://localhost:5000
✅ Connected to MongoDB successfully
📊 Database: portfolio
```

## API Endpoints

- **POST /api/contact** - Submit contact form
  - Body: `{ name: string, email: string, message: string }`
  - Response: `{ success: boolean, message: string, data: object }`

- **GET /api/contacts** - View all contact submissions (for admin)
  - Response: `{ success: boolean, count: number, data: array }`

- **GET /api/health** - Check server and database status
  - Response: `{ status: string, message: string, database: string }`

## Running Both Frontend and Backend

1. **Terminal 1** (Frontend - already running):
   ```bash
   cd c:\Projects\Krishita-Ravat-Portfolio
   npm run dev
   ```

2. **Terminal 2** (Backend):
   ```bash
   cd c:\Projects\Krishita-Ravat-Portfolio\server
   npm start
   ```

The frontend will be on http://localhost:5173 and backend on http://localhost:5000.

## Testing the Contact Form

1. Make sure both frontend and backend are running
2. Open http://localhost:5173 in your browser
3. Scroll to the Contact section
4. Fill out the form and click "Send Message"
5. You should see a success notification
6. Check the backend terminal for the log message
7. (Optional) View submissions at http://localhost:5000/api/contacts

## Troubleshooting

- **Cannot connect to MongoDB**: Make sure MongoDB is installed and running, or check your Atlas connection string
- **CORS errors**: The backend is configured to accept requests from localhost:5173 and localhost:3000
- **Port 5000 already in use**: Change PORT in `.env` file and update the API URL in Contact.jsx
