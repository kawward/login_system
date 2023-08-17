# Login System

A simple Login System built with Node.js, MongoDB, and Passport.js.

## Features

- User registration with email and password
- User login with email and password
- Password encryption using bcrypt
- Session management with Passport.js
- MongoDB integration for storing user data

## Installation

1. Clone the repository:

   
shell
   git clone https://github.com/your-username/login_system.git
   
2. Install dependencies:

   
shell
   cd login_system
   npm install
   
3. Start the server:

   
shell
   node server.js
   
4. Access the application in your browser at `http://localhost:3000`.

## Usage

1. Navigate to the registration page (`/register`) and create a new account by providing your email and password.

2. Once registered, you can proceed to the login page (`/login`) and enter your credentials to log in.

3. After successful login, you will be redirected to the dashboard page (`/dashboard`), where you can access the protected content.

## File Structure


login_system/
  ├── server.js
  ├── package.json
  ├── package-lock.json
  └── models/
      ├── User.js
  └── routes/
      ├── index.js
      ├── auth.js
  └── views/
      ├── login.ejs
      ├── register.ejs
      ├── dashboard.ejs
      └── layout.ejs
## Dependencies

- Node.js
- Express.js
- MongoDB
- Passport.js
- Bcrypt

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

For any questions or support, feel free to reach out to me at your-email@example.com.
Please replace the placeholders (`your-username`, `login_system`, `your-email@example.com`) with the appropriate values for your project. Also, make sure to update the file structure section if needed.

Once you've made the necessary adjustments, you can save this Markdown code as your project's README.md file in your GitHub repository.
Main Avatar
