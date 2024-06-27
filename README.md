# Express Server with Google Generative AI Integration

This project sets up a basic Express server that integrates with Google's Generative AI to generate content based on prompts. It uses `express` for the server, `body-parser` for parsing incoming request bodies, `cors` for enabling CORS, and the `@google/generative-ai` package for interacting with Google's Generative AI.

## Setup

To get started with this project, follow these steps:

1. **Clone the Repository**

   Clone this repository to your local machine using Git.

2. **Install Dependencies**

Navigate to the project directory and install the required dependencies.

3. **Environment Variables**

This project requires an API key for Google Generative AI. You should replace the placeholder API key in the `index.js` file with your actual Google Generative AI API key.

Alternatively, you can set up an environment variable named `GOOGLE_AI_API_KEY` and modify the code to use `process.env.GOOGLE_AI_API_KEY` instead of the hardcoded API key.

4. **Running the Server**

Start the server with the following command:
npm start

The server will start running on `http://localhost:3000`.

## Usage

Once the server is running, you can interact with it in the following ways:

- **Viewing the Main Page**

  Open a web browser and go to `http://localhost:3000` to view the main page served by the Express server.

- **Generating Content**

  Send a `POST` request to `http://localhost:3000/generate` with a JSON body containing a `prompt` and a `model` field. For example:

  ```json
  {
 "prompt": "Write a short story about a lost cat",
 "model": "text-generation-model-name"
  }
