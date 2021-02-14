# Restify REST API with Node.js, MongoDB

> A Basic Node.js project with JWT

## Build Setup

```bash
# install dependencies
npm install

# serve at http://localhost:4000/

npm start
```

## Prerequisites

-   Nodejs
-   MongoDB

**Request:**

```json
POST auth/register

{
    "email": "elon@gmail.com",
    "password": "test@1234"
}

POST api/auth
{
    "email": "elon@gmail.com",
    "password": "test@1234"
}

POST api/debtors

{
    "name": "bill",
    "email": "bill@gmail.com",
    "phone": "9999988888",
    "debt": "5000"
}

GET api/debtors/

GET api/debtors/:id

PUT api/debtors/:id
{
    "name": "bill",
    "email": "bill@gmail.com",
    "phone": "9999988888",
    "debt": "6000"
}

DELETE api/debtors/:id
```
