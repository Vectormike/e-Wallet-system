# E-Wallet System 

## Getting started

This project will run on **NodeJs** using **MongoDB** as database.

## Features

- Basic Authentication (Register/Login with hashed password)
-  JWT Tokens, make requests with a token after login with `Authorization` header with value `Bearer thisisasamplesecret` where `thisisasamplesecret` will be returned in Login response.
- Deposit API
- Transfer API
- View transactions API

## Software Requirements
- Node.js **8+**
- MongoDB **3.6+** (Recommended **4+**)

## How to install

### Using Git (recommended)

1.  Clone the project from github.


```bash
git clone https://github.com/Vectormike/e-Wallet-system ewallet
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd ewallet
npm install
```

### Setting up environments

1. You will find a file named `.env.example` on root directory of project.
2. Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```bash
    cp .env.example .env
    ```
3. The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment. Helpful comments added to `.env.example` file to understand the constants.
## Project  structure

## How to run

### Running  API server locally

```bash
npm run dev
```

You will know server is running by checking the output of the command `npm run dev`

```bash
Connected to mongodb:YOUR_DB_CONNECTION_STRING
App is running ...

Press CTRL + C to stop the process.
```
**Note:**  `MONGODB_URL` will be your MongoDB connection string.