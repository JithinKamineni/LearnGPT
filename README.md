<img width="1919" height="1102" alt="image" src="https://github.com/user-attachments/assets/e71cebe9-743a-4e59-b7fd-c902db061a1a" /># Learn-GPT - The AI Study Buddy

An intelligent web application designed to make learning easier by simplifying complex study materials using the power of Google's Gemini AI.

**Live Demo:** [**https://learn-gpt-red.vercel.app/**](https://learn-gpt-red.vercel.app/)

---


## About The Project

Students often face the challenge of dense, jargon-filled textbooks and study materials. Learn-GPT is a full-stack application built to solve this problem. Users can upload their documents (`.pdf`, `.docx`), and the application leverages a powerful Large Language Model (LLM) to rewrite the content in a simple, clear, and easy-to-understand format.

This project demonstrates a complete development lifecycle, from concept and backend/frontend development to deployment and CI/CD.

## Key Features

* **File Upload:** Supports `.pdf` and `.docx` file uploads.
* **AI-Powered Simplification:** Utilizes the Google Gemini API to rewrite complex text into a more digestible format.
* **Iterative Simplification:** Users can choose to "Simplify Further" for even easier text.
* **PDF Download:** The final simplified content can be downloaded as a clean PDF document.
* **Modern & Responsive UI:** A clean, simple, and colorful user interface built with React and Tailwind CSS.

## Tech Stack

This project was built using a modern full-stack architecture:

* **Frontend:**
    * [React](https://reactjs.org/) (with Vite)
    * [Tailwind CSS](https://tailwindcss.com/)
    * [Axios](https://axios-http.com/)
    * [Lucide React](https://lucide.dev/) (for icons)

* **Backend:**
    * [Python](https://www.python.org/)
    * [Flask](https://flask.palletsprojects.com/)
    * [Gunicorn](https://gunicorn.org/) (for production)

* **AI & Services:**
    * [Google Gemini API](https://ai.google.dev/)
    * [FPDF2](https://github.com/py-pdf/fpdf2/) (for PDF generation)

* **Deployment:**
    * Frontend deployed on [Vercel](https://vercel.com/).
    * Backend deployed on [Render](https://render.com/).
    * CI/CD managed through [GitHub](https://github.com/).

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/JithinKamineni/LearnGPT](https://github.com/JithinKamineni/LearnGPT)
    cd LearnGPT
    ```
2.  **Setup the Backend:**
    ```sh
    cd backend
    python -m venv venv
    source venv/bin/activate  # On Windows: .\venv\Scripts\activate
    pip install -r requirements.txt
    # Create a .env file and add your GEMINI_API_KEY
    flask run
    ```
3.  **Setup the Frontend:**
    *Open a new terminal.*
    ```sh
    cd frontend
    npm install
    npm run dev
    ```

## Contact

Jithin Kamineni - [https://www.linkedin.com/in/jitin-venkata-sai-kamineni-5126a8270/]

Project Link: [https://github.com/JithinKamineni/LearnGPT](https://github.com/JithinKamineni/LearnGPT)
