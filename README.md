# NoteTaker
Note Taker
Description
Note Taker is an application that allows users to write and save notes. It provides an intuitive interface for users to organize their thoughts and keep track of tasks they need to complete. The application features a front end built with HTML and CSS, and a back end powered by Express.js. Note data is stored and retrieved from a JSON file using the fs module.

# Features
User-friendly Interface: The application provides a clean and intuitive user interface for creating, viewing, and managing notes.

Note Creation: Users can create new notes by entering a title and text in the provided input fields.

Note Storage: Each note is stored with a unique ID in a JSON file on the server, allowing users to retrieve and manage their notes at any time.
Note Listing: Existing notes are listed in the left-hand column of the notes page, allowing users to easily access and view their notes.

Note Viewing: Clicking on an existing note in the list displays its details, including the title and text, in the right-hand column.
Note Saving: Users can save new notes by clicking the "Save Note" button, which adds the note to the list of existing notes.

Note Deletion (Bonus): The application supports deleting notes, allowing users to remove unwanted notes from their list.
 # Installation

Clone the repository to your local machine using git clone https://github.com/jmartincampos/NoteTaker.git
Navigate to the project directory and install dependencies by running:
npm install.
Start the server by running:
node server.js.
Open a web browser and navigate to
 http://localhost:3000 to access the application.
Usage
Click on the "Notes" link in the navigation to access the notes page.
Enter a title and text for your new note in the input fields provided.
Click the "Save Note" button to save the note.
To view an existing note, click on its title in the list of notes.
To delete a note (if implemented), click on the "Delete" button next to the note.

# API Endpoints
GET /api/notes: Returns all saved notes as JSON.
POST /api/notes: Receives a new note to save on the request body, adds it to the JSON file, and returns the new note to the client.
DELETE /api/notes/:id (Bonus): Receives a query parameter containing the ID of a note to delete, removes the note with the given ID, and updates the JSON file.
Technologies Used
HTML
CSS
JavaScript
Node.js
Express.js


