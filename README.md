## NPHC-ESM API

### Welcome

employee salary management webapp to manage employee salaries and information.
Employee details page consists of the user name, ID, login details, salary details with edit and delete functions. Users can view the details in a table and add. edit, delete as necessary. Also, there is a opportunity to pagenate the table sizes in the page. Also, it has a function to sort in ascending and descending order. It also provide chance to upload CSV files to the database.  


### Current Code & Structure

The application is split into two parts, the server and the client.

##### Server

 The server is built using express and mongodb. (https://github.com/sachitha-94/NPHC-EMS-API.git)
    
    Node JS
    Express JS
    Mongodb
    TypeScript


##### Client

The server is built using React. we used React-redux-tool-kit as a starter. (https://github.com/sachitha-94/NPHC-ESM-UI.git) 

    React JS
    React-Redux-tool-kit
    Antd
    Axios
    TypeScript


### Getting up & running

Both the server and client need to be installed and started.

##### Server

1) `git clone https://github.com/sachitha-94/NPHC-EMS-API.git`
2) `npm install`
3) `create .env file from .env.example`
4) `npm start`

##### Client

1) `git clone https://github.com/sachitha-94/NPHC-ESM-UI.git`
2) `npm install`
3) `create .env file from .env.example`
4) `add valid mongo db connection string for MONGO_DB_URL in .env file`
4) `npm start`




