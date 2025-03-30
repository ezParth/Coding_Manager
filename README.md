# 🚀 Coding Manager  

**Coding Manager** is your all-in-one dashboard to track your **LeetCode progress, Codeforces stats, and manage your projects**. Whether you're preparing for interviews or just want a centralized hub for all your coding activities, **Coding Manager** has you covered!  

## ✨ Features  

- ✅ **Track LeetCode Stats** – View your solved problems, rankings, and streaks.  
- ✅ **Monitor Codeforces Profile** – Keep up with your rating, contests, and submissions.  
- ✅ **Manage Your Projects** – Store and showcase all your coding projects with links and descriptions.  
- ✅ **Share Your Profile** – Send your **Codeforces profile link** to interviewers to **boost your chances**!  
- ✅ **Beautiful UI** – A clean and modern interface for easy navigation.  

---

## 🛠️ Tech Stack  

- **Frontend:** React + TypeScript + Tailwind CSS  
- **Backend:** Node.js (Pure Node) + Express (if used)  
- **Database:** MongoDB  
- **Authentication:** JWT-based authentication  
- **Storage:** AWS S3 for project images  

---

## 🚀 Getting Started  

## Add .env file in server/src/config
- MONGO_URI=MONGO_DB_URI
- KEY=CODEFORCES_KEY
- SECRET=CODEFORCES_SECRET
- JWT_SECRET=JWT_SECRET
- ACCESS_KEY=AWS_S3_ACCESS_KEY
- SECRET_ACCESS_KEY=AWS_S3_SECRET_ACCESS_KEY
- S3_BUCKET=YOUR_BUCKET_NAME

### **1️⃣ Clone the Repository And Run The Following Commands**  
```sh
git clone https://github.com/ezParth/Coding_Manager.git
cd Coding_Manager

cd server
npm i

cd client
npm i

cd server
npm run dev

cd client
npm run dev