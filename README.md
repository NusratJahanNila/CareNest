# 🏠 CareNest - Babysitting & Elderly Care Service Platform

## 📋 Project Overview

CareNest is a comprehensive web application that connects Bangladeshi families with trusted, verified caregivers for children, elderly, and family members with special needs. Our platform makes caregiving **easy, secure, and accessible** for everyone.

### 🌟 Live Demo

## [Live Site URL](https://care-nest-kappa.vercel.app/)

## ✨ Key Features

### 1. 🔐 **Secure Authentication System**

- Email & Password registration with validation using NextAuth
- Google Social Login integration
- Protected routes for authenticated users
- NID verification for registration

### 2. 📱 **Fully Responsive Design**

- Seamless experience across mobile, tablet, and desktop
- Mobile-first approach with Tailwind CSS
- Optimized for all screen sizes

### 3. 🎯 **Service Booking System**

- Browse different care categories (Baby, Elderly, Special Care)
- Dynamic booking with duration selection (hours/days)
- Location selection (Division → District → City → Address)
- Real-time cost calculation based on duration × service charge
- Booking status tracking (Pending / Confirmed / Completed / Cancelled)

### 4. 📧 **Email Notifications**

- Automatic invoice email on successful booking
- Professional HTML email templates
- Booking confirmation details

### 5. 🎨 **Modern UI/UX**

- Clean, professional design
- Color palette: Sage green, deep green, soft peach
- Smooth animations and transitions
- Loading skeletons for better UX

### 6. 🔍 **Advanced Search & Filter**

- Browse services by category
- Filter by availability
- Search functionality

---

## 🛠️ Technologies Used

### Frontend

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS** for styling
- **DaisyUI** for UI components
- **React Icons** for icons
- **React Hot Toast** for notifications

### Backend

- **Next.js Server Actions** for API routes
- **MongoDB** for database
- **MongoDB Node.js Driver**
- **NextAuth.js** for authentication

### Email Service

- **Nodemailer** with Gmail SMTP

### Development Tools

- **ESLint** for code linting
- **Prettier** for code formatting
- **Git** for version control

---

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or Atlas)
- Gmail account for email notifications

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/carenest.git
   cd carenest
   ```
2. **Install dependencies**
   npm install
3. **Set up environment variables** # MongoDB Connection
   MONGODB_URI=your_mongodb_connection_string
   DB_NAME=carenest

    # NextAuth Configuration

    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_nextauth_secret

    # Google OAuth

    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret

    # Email Configuration (Gmail)

    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_app_password
4.  **Run the development server**
    npm run dev
5.  **Open your browser**
    Navigate to http://localhost:3000
