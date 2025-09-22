# Node.js Backend Project

This is a simple Node.js backend project created for testing deployment. It uses Express.js to set up a basic server with a few endpoints.

## Project Structure

```
node-backend-project
├── src
│   ├── app.js
│   ├── routes
│   │   └── testRoutes.js
│   ├── controllers
│   │   └── testController.js
│   └── utils
│       └── index.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd node-backend-project
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the application, run:
```
npm start
```

The server will start on `http://localhost:3000`.

## Endpoints

### GET /test
- Description: Retrieves a test message.
- Response: A JSON object containing a test message.

### POST /test
- Description: Accepts a test message and returns it.
- Request Body: A JSON object with a `message` field.
- Response: A JSON object echoing the received message.

## License

This project is licensed under the MIT License.