## 🚀 Set-up and Run

To set-up this project in your local environment, follow these steps:

Clone this repository in your local:
```
git clone https://github.com/FabioGuardado/webhelp-challenge-fe.git
```
Navigate to the folder where you cloned the repository and run the installation command:
```
npm install
```
Then, create a file in the root directory for env variables and name it: `.env.local`. 

Add the following two env variables to your `.env.local` file:
```
VITE_API_URL=<API_URL>
```

You can also modify the `.env.template` file which already contains the name of the necessary variables.

Finally, run the execution command:
```
npm run dev
```

And you will be able to use the application with the browser in `http://localhost:5173/`.