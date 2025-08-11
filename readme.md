# BrainZ – Never lose a link again

## Description

BrainZ is a powerful web app that helps you save and organize any URL with an accompanying note in a clean and efficient way.

It was built because many times people want to save a webpage, document, or resource to revisit later, but most existing solutions are messy and frustrating.

BrainZ solves this by combining simplicity with powerful AI features, delivering convenience and a great user experience — so you never lose a valuable link again.

---

## Demo

🔗 **Live Demo:** [https://brainzz.vercel.app/](https://brainzz.vercel.app/)

---

## Features

- 🔑 **User Authentication** with Clerk
- 📄 Save and organize **any URL** with a personal note
- 🎨 **Clean & responsive UI** built with Tailwind CSS
- 🤖 **AI-powered features** for content understanding and interaction such as chat with AI and Search with AI.
- 🗂️ Preview saved resources
- ⚡ Seamless **frontend-backend integration**

---

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Express.js, Next.js (Gemini-Integration)
- **AI/ML:** Hugging Face Sentence Transformers for vector embeddings and Gemini-1.5-flash for AI chat.
- **Database:** Mongodb
- **Authentication:** Clerk
- **Deployment:** This project is deployed with the frontend on Vercel and the backend on Render

---

## Getting Started

Follow these steps to get BrainZ running locally on your machine.

### Prerequisites

Before you can install the project's dependencies with `npm`, you must have **Node.js** installed on your system. **npm** (Node Package Manager) is automatically included with the Node.js installation.

- ➡️ If you don't have it, **[download and install Node.js](https://nodejs.org/)** from the official website.

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/ARF9792/brainz.git
    cd brainz
    ```

2. **Set up Environment Variables:** In both the `frontend` and `backend` directories, create a `.env` file by copying the contents of the `.env.example` file. Fill in the necessary environment variables (like API keys and database URIs).

3. **Install Dependencies:** Open two separate terminal windows or tabs, one for the frontend and one for the backend.

    - In the **backend** terminal, navigate to the `backend` directory and run:
        ```bash
        npm install
        ```
    
    - In the **frontend** terminal, navigate to the `frontend` directory and run:
        ```bash
        npm install
        ```

4. **Run the Application:**

    - To start the **backend** server, run the following command in the backend terminal:
        ```bash
        node index.js
        ```
    
    - To start the **frontend** development server, run the following command in the frontend terminal:
        ```bash
        npm run dev
        ```
