#### Basic
1. Explain NPM the package manager for node.
2. Show npmjs.com
3. Show how to install sails on the computer. sudo npm install -g sails
4. Create a HelloWorld application with sails. Run it and show.
5. Open and show the boiler plate code what was created along with the project creation. Also explain the dependency in the node_modules. Delete the node_moduels filder and try to added again and show with npm install.
6. Start the SailsTodo application by moving the code to Initial Commit

#### SailTodo app
1. Explaing how to add the connection string for the DB
2. Explain what is a Model and how it is linked with DB
3. Adding an API. Try adding a sample API with sails (sails generate api Test) and show. 
4. Remove the newly added Test.js and TestController.js
5. Add the API User api from git.
6. Now we have added the MySQL connection and Model. But we dont have a library for NodeJS to understand how to talk to MySQL. 
7. Open config/connections.js and show the comment on how to add MySQL with npm.
8. Do the same operations with the HelloWorld project and show how the node_modules are added and how it gets updated in the package.json file. 
9. Add the MySQL Dependency from git
10. Run sails lift
11. Explain the error and add the migrate alter
12. Now run and show the error has gone
13. Add atrributes to User model
14. Explain each attributes 
15. Run and show how sails created a table for that model
16. Explain about routes works and how controller works and get the code from git.
17. Run sails lift and navigate to that location in browser
18. Create a router to add a user and also write the controller for it. Explain the Syntax.
19. Run sails lift
20. Open Dev Http Client and try to add a user
21. Open the DB and show thats its added
22. Explain the frontend ejs how the home page is loaded. Show the page source
23. Add a custom home page and show how it works.
24. Explain about the layout injection and false it
25. Added AngularJS code and bower. This is a long process to explain. Ask them are the willing to hear it. 
26. Todo CRUD operation backend
27. Adding dummy list UI with sample JSON
28. UI for adding task
29. Add task HTTP request
30. Fetch all task and display in list
31. Update task status on checkbox click
32. Fetch only the tasks which are incomplete
33. Make the newer task first
34. Automatically get all the tasks when a new task is added
35. Remove annoying dialog and add toast
36. Add a validation check when nothing is entered and pressed enter
37. Show how to move the project to production with sails lift --prod
38. Explain how it fails
39. Explain the fix for the same
40. Important topic. Moving to production. 
41. Show how the code looks in with and without --prod in view source
42. Bonus adding a responsive design
