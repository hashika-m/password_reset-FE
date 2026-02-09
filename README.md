<!-- PASSWORD RESET FLOW UI -->

 Routes and Components:
1. / : This shows the default home page for the app with register and login links with welcome msg
2. /register : if the user is first time visiting the, he/she can signup/register with their email, password as ceredentials to get access. With their given credentials the user is dynamically created in db with help of opst req.
3. /login : If the user is aware with their login  credentails they can login and directed to their respective dashboard with jwt Bearer token in backend.then,
        /dashbord : the user is authorized with the given token in backend and get the access to dashboard in the frontend.
      If user forgot their password, they can click forgitPassword link, which redirect user to Forgotpassword component. There the user can enter their eamil to get a random string which further help them to reset their password.  
4. /forgotPassword : here the user enter  their email based on verificatio if teh user is found in db/not a random string is sent in console termial of backend/ postamn response with restPassword link. Based on the res from server a msg is visble in frontend for user
5. /resetPassword : here the user is verified with his random string and allowed to encrypt his password , confirm password. if matches the db is updated with new password and its is imitated for the user by an alert msg.
    To verify the user can login with his newpassword, email to access get further access.      





















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
