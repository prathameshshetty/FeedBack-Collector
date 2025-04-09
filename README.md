# Feedback Collector App

The **Feedback Collector App** is a simple web application that allows users to submit feedback and view submitted feedback in an admin view. It supports light and dark themes, and the feedback data is stored in Firebase Realtime Database.

---

## 📁 Project Structure

The project is organized as follows:

```
feedback-collector/
├── src/
│   ├── components/
│   │   ├── AdminView.jsx          # Admin view to display submitted feedback
│   │   ├── FeedbackCard.jsx       # Card component to display individual feedback
│   │   ├── FeedbackForm.jsx       # Form for submitting feedback
│   │   ├── Footer.jsx             # Footer component
│   │   └── ThemeToggle.jsx        # Light/Dark mode toggle button
│   ├── context/
│   │   └── ThemeContext.jsx       # Context for managing theme state
│   ├── firebase.js                # Firebase configuration and helper functions
│   ├── App.jsx                    # Main application component
│   └── index.css                  # Global styles
├── .env                           # Environment variables for Firebase configuration
├── package.json                   # Project dependencies and scripts
README.md                      # Project documentation
```

---

## Tech Stack

### Frontend

- **React**: Component-based UI library for building the app.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide Icons**: Icon library for UI elements.

### Backend

- **Firebase Realtime Database**: Used to store and retrieve feedback in real-time.

### Deployment

- **Netlify**: For hosting and deploying the application.

---

## Features

1. **Feedback Submission**: Users can submit feedback with their name, email, and message.
2. **Admin View**: Admins can view all submitted feedback in a card-based layout.
3. **Light/Dark Mode**: Users can toggle between light and dark themes.
4. **Real-Time Updates**: Feedback is stored and retrieved in real-time using Firebase.

---

## 🌐 Environment Variables

The app uses environment variables for Firebase configuration. Create a `.env` file in the root directory and add the following variables:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
VITE_FIREBASE_DATABASE_URL=your_firebase_database_url
```

## 🚀 Deployment Steps (Netlify)

1. **Install Netlify CLI (optional):**

    ```bash
    npm install -g netlify-cli
    ```

2. **Build the Project:**

    Run the following command to create a production build:

    ```bash
    npm run build
    ```

3. **Deploy to Netlify:**

    - Log in to your Netlify account.
    - Drag and drop the `dist/` folder (created after the build) into the Netlify dashboard.
    - Alternatively, use the CLI:

        ```bash
        netlify deploy --prod
        ```

4. **Set Environment Variables:**

    - Go to your Netlify project settings.
    - Add the Firebase environment variables under the **Environment Variables** section.

5. **Access Your App:**

    - Once deployed, Netlify will provide a live URL for your app.

## 💻 How to Run Locally

1. **Clone the repository:**

    ```bash
    git clone https://github.com/prathameshshetty/feedback-collector.git
    cd feedback-collector
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Add your `.env` file with Firebase credentials.**

4. **Start the development server:**

    ```bash
    npm run dev
    ```

5. **Open the app in your browser at** `http://localhost:5173`.

---

Crafted with ❤️ by Prathamesh Shetty
