# ToDo List - React Project

This project is a simple To-Do List application built using React for the client side, and Express.js for the server side.

The main features of this application are:

- List tasks
- Add new tasks
- Delete existing tasks

Each task includes a due date and a task description.

## Project Structure

The project has two main directories:

1. **Client**: This is the frontend part of the application built using React. It includes components for adding and deleting tasks, displaying tasks, handling modals, and more.

2. **Server**: This is the backend part of the application built using Express.js. It provides the necessary endpoints to perform CRUD operations (Create, Read, Update, Delete) on the tasks.

## Setup and Run

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone this repository on your local machine.
2. Navigate to the project directory in the terminal.

#### Client-side setup

3. Go into the client directory (`cd client`) and install all required dependencies by running `npm install`.
4. Start the React development server by running `npm start`.

#### Server-side setup

5. Go back to the project root directory (`cd ..`).
6. Go into the server directory (`cd server`) and install all required dependencies by running `npm install`.
7. Start the server by running `node server.js` (or `nodemon server.js` if you have nodemon installed).

Now, both the client and server should be running. Navigate to `http://localhost:3000` in your browser to see the application.

## Built With

- React.js
- Express.js
- axios (for HTTP requests)
- uuid (to generate unique identifiers)

## Functionality

- The application retrieves tasks from a JSON file (`database.json`) via an Express.js server.
- Users can add new tasks which are then saved to the `database.json` file.
- Users can also delete existing tasks.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


Feel free to modify this template according to your project's specifics.
