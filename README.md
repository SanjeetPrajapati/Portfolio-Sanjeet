# 📬 React Contact Form with EmailJS

This is a simple and responsive **React Contact Form** that uses **EmailJS** to send emails directly without any backend.

## 🚀 Features
- Sends email using EmailJS
- Uses Tailwind CSS for styling
- Shows toast messages on success/failure

## 🔧 Setup

1. **Clone the repo**  
```bash
git clone https://github.com/your-username/contact-form-emailjs.git
cd contact-form-emailjs

    Install dependencies

npm install

    Add your EmailJS config in .env

VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key

    Start the app

npm run dev

✅ EmailJS Template Variables

Make sure your template uses these variables:

{{user_name}}, {{user_email}}, {{subject}}, {{message}}

📌 Done!

Your form will now send messages to your EmailJS inbox.


---

Let me know if you want:
- `.env.example` file  
- To include GitHub or live site link  
- To publish this to a public repo