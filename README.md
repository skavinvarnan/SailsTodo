# SailsTodo

A sample application built with SailsJS which sits on top of NodeJS and Express. It also uses AngularJS, Angular Material for the UI and MySQL for the Database.

This application so only for presentation purpose and not production ready.

#### Demo ####
[Click here](http://sailstodo.herokuapp.com/) for the application demo.

### Prerequisites ###
[NodeJS](https://nodejs.org/en/download/)

[Bower](http://bower.io/#install-bower)

### Compile Instruction ###
1) Clone the complete repo into your computer 
```shell
git clone https://github.com/skavinvarnan/SailsTodo.git
```

2) cd to the project directory
```shell
cd SailsTodo
```

3) Install all project dependency
```shell
npm install
```

4) Install Javascript and Css dependency
```shell
bower install
```

5) Point MySQL connection [here](https://github.com/skavinvarnan/SailsTodo/blob/master/config/connections.js#L43)
```javascript
mySQL: {
    adapter: 'sails-mysql',
    host: 'HOST_NAME',
    user: 'USERNAME',
    password: 'PASSWORD',
    database: 'DATABASE_NAME'
  }
```

6) Run the app
```shell
sails lift
```

7) Navigate to [http://127.0.0.1:1337/](http://127.0.0.1:1337/) on your browser

### Development environment ###

| Tools         | Version       |
| ------------- |:-------------:|
| NodeJS        | 4.2.4         |
| npm           | 2.14.12       |
| bower         | 1.7.2         |
| MySQL         | 5.7           |
| Google Chrome | 47            |
| OS(Ubuntu)    | 15.10         |

This was the environment i developed the application. Any newer version should work fine

#### Bugs
This app is just a sample project if you find any bugs in it please open and [new issue](https://github.com/skavinvarnan/SailsTodo/issues)!. I'll be happy to fix it.
