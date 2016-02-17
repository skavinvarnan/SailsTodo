#### What is Nodejs
1. Its a just a backend server build with C. JavaScript code can also run on the server.
2. Which makes it as a bundle like ASP + IIS
3. In simple terms it can be said as a Web Browser on a Server without a window object and has access to all stuffs on the computer like USB port, accessing the file system etc
4. NodeJS is built on top of [Chromium V8](https://developers.google.com/v8/). Thats the same JavaScript engine which powers Google Chrome Browser and Opera Browser. So now you know why it is called as a Web Browser on a server
5. Used by big companies like Microsoft, IBM, LinkedIn, PayPal. So NodeJS can be trusted
6. Its OpenSource with a huge community working on it. I'm also a contributor.

#### Uses
1. Best suitable for REST API
2. Used for Analytics where huge number of IO can be processed
3. Web Sockets for real time applications like gaming
4. NodeJS can handle easily 10x times higher than PHP, Java, ASP etc.

#### Pros
1. Its Extremely fast
2. Non Blocking IO. Like traditional JAVA IO it will not wait till the thread pool is free
3. The complete application is single threaded. No problem in dealing with multi threads
4. Same code can be used in Server and Brower. Code duplication can be avoided.
5. NPM is huge. I will tell what is npm in the demo
6. All the code are straight forward. So easy to learn

#### Cons
1. Uses a hell lot of CPU for doing a simple task. So complex operations like rendering are not recommended.
2. Single threaded so large time consuming concurrent operations cannot be done
3. Lots of computers now a days has multiple core like dual code, quad code, octa core. Since the complete application is single threaded, it uses only one core of the CPU.
4. Its is not as robust as JAVA. So very sensitive data like bank transaction, airways ticketing is not recommended.
5. NodeJS has reached its 1.0 version just 4 months ago so there are still lots of frameworks in BETA version

#### Single threaded
Explain with the diagram

#### Sailjs
1. Sailsjs is MVC framework build for Nodejs
2. Boiler plate code already created for a new project 
3. Comments are written all over the boiler plate code so easy to customize
4. Best HTTP framework for nodejs 'Express' is used and it also uses Grunt a JavaScript task runner
5. Moving to production is so easy. Sails take cares of all the work for us.
6. Multiple database like MySQL, Postgresql, MongoDB, Redis are supported.

#### Simple TODO app
Explain from the slide

