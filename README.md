# kelp
### Kelp - Dive Locations - solo project <br />
An application used to Create/Read/Update/Delete Dive Site Locations by user, built with React, Redux, JavaScript, and CSS <br /><br />

## Project Status <br />
This project is currently in development. Users can add a dive site location: Image, Title, Body of text, and city, state, state, and zip code are optional. Functionality to sort is in progress as wwell as adding comments to a dive site currentlly.

## Screen Shot(s)
<br />
[SCREENSHOT] <br />
[SCREENSHOT] <br /><br />

## Installation and Setup Instructions
1. Clone this repo: <br /><br />
    * `git clone git@github.com:jjtuttle/kelp.git` <br /><br />
2. Install dependecies from the `root` directory <br /><br />
    * `npm install` <br /><br />
3. Create a POSTGRESSQL user with CREATEDB and PASSWORD in PSQL <br /><br />
    * `CREATE USER <user-name> WITH PASSWORD <'your-string-password'> CRETAEDB` <br /><br />
4. Create a `.env` file in the backend directory based off the `.env.example` found in the same directory <br /><br />
5. Enter your user name and password info into the `.env` file with your desired `<database_name>`, a secure combonation of characters for your `JWT_SECRET`, and the desired PORT (perferably 5000). <br /><br />
6. Add the following proxy to your `package.json` file in your frontend directory, replacing or keeping the 5000 pert to match your PORT config that is in your `.env` file <br /><br />
      * `"proxy": "http://localhost:5000"` <br /><br />
7.  Create the *Database, Migrate, and Seed* the models <br /><br />
      * `npx dotenv sequelize db:create`<br />
      * `npx dotenv sequelize db:migrate`<br />
      * `npx dotenv sequelize db:seed:all`<br /><br />
8. Start the services in the backend directory<br /><br />
      * `npm start`<br /><br />
9. Start
