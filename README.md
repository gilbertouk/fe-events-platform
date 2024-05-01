<h1 align="center"> Welcome to Events Platform Front-End👋</h1>

<p> Events Platform Front-End: A platform where a business can share their events with members of the community, and community members can sign up and optionally pay to participate in the events. </p>
<p>
This project is a single page application built using React JS with a responsive mobile-first design, making request to an RESTful API with optimistic rendering and error handling.
</p>

> Please note: The application may take a few minutes to load as it waits for the backend to respond due to the BE hosting service shutting down after periods of inactivity.

### Hosted version

Link to the hosted version of the Front-End below.

<a href='https://events.gilbertosilva.dev' target="_blank">https://events.gilbertosilva.dev</a>

Link to the Back-End project below.

<a href='https://github.com/gilbertouk/be-events-platform' target="_blank">https://github.com/gilbertouk/be-events-platform</a>

Note: If you want to log in with an administrator account on the front-end. With this user you will have access to the form to create new events on the website.

Use this email and password:
email: admin@mail.com
password: 10203040

## How to initialize this project

To run this project you need the following programs:

- Node: v20.9.0

Then follow the steps below:

<ol>
  <li>Clone this repository</li>
  <br>
  <li>Then you need to install the project's dependencies which you can look for in the `package.json` file.

Use your `npm` or `yarn` package managers to install dependencies

```sh
npm install
```

or

```sh
yarn install
```

</li>

<li>
This repository uses the environment variables, to run this project you need to create file .env in the root folder of this project, and inside contain the following environment variable below.
</li>

```env
# COMPANY NAME
VITE_COMPANY_NAME="GS EVENTS" # The name that will appear in the navigation menu, foot wheel and on the About, Terms and Privacy pages

# FIREBASE ENVIRONMENT # The firebase keys, more details here https://firebase.google.com/docs/auth
VITE_API_KEY="xxxxxxxxxxxxxxxxxxx"
VITE_AUTH_DOMAIN="xxxxxxxxxxx"
VITE_PROJECT_ID="xxxxxx"
VITE_STORAGE_BUCKET="xxxxxxxx"
VITE_MESSAGING_SENDER_ID="xxxxxx"
VITE_APP_ID="xxxxxxxx"


# BACKEND API URL
# VITE_API_BASE_URL="http://localhost:5000/api/v1"


# A LINK TO AN IMAGE THAT WILL BE USED AS THE COVER OF THE EVENT ADDED IF WHEN CREATING NEW EVENTS YOU DO NOT WANT TO UPLOAD A SPECIFIC IMAGE
VITE_DEFAULT_IMAGE_PATH="https://res.cloudinary.com/dvrwr83w9/image/upload/c_fill,h_800,w_1200/c_limit,h_800,w_1200/events/psvoapwsvs5mayf0uto1.jpg"

```

<li>
Run the following code in the terminal to begin start the server:

```sh
npm run dev
```

</li>

## Author

👤 **Gilberto Silva**

- Github: [@gilbertouk](https://github.com/gilbertouk)
- LinkedIn: [@gilbertoantonio](https://linkedin.com/in/gilbertoantonio)

## Show your support

Give a ⭐️ if this project helped you!
