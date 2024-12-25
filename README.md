# FoodieDelight - MERN Stack Food Delivery Application  

## Description  
FoodieDelight is a full-stack food delivery application designed to provide customers with a seamless food ordering experience and admins with an efficient order management system. The app includes features for browsing menus, adding items to the cart, secure Stripe payment processing, and tracking orders. Admins can manage and update order statuses dynamically through the admin panel.  

---

## Features  

### **Customer-Facing Features**  
- Browse food menus with detailed descriptions and prices.  
- Add items to the cart, customize quantities, and review orders.  
- Checkout securely using the Stripe payment gateway.  
- View order statuses in real-time: Received, Prepared, and Dispatched.  

### **Admin Panel Features**  
- Accept or reject orders in real-time.  
- Update order statuses dynamically.  
- Manage the food menu by adding, updating, or deleting items.  
- Monitor orders with live updates.  

---

## Installation and Setup  

### **Steps to Set Up the Project**  

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/yourusername/foodiedelight.git
   cd foodiedelight
   ```
2.**Setup Enviromental Variables**
-PORT=5000
-MONGO_URI=your_mongodb_connection_string
-STRIPE_SECRET_KEY=your_stripe_secret_key
-REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

3.**Install Dependencies and Start the Application:**
```bash
npm install               # Install backend dependencies
cd client && npm install  # Install frontend dependencies
cd ..                     # Return to root folder
npm start                 # Start both backend and frontend servers
```
4.**Access the Application:**
-Open the app at http://localhost:5173 for the frontend.
-Backend runs on http://localhost:5000.

5.**Contact**
For inquiries, reach out to me:
Name: Anurag Kumar
Email: singhanurag1309@gmail.com
