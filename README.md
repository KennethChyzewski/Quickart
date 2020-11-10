# team38 - Quickart

### How to Start up and run the web application
```
1. cd quickart-main/ 
2. npm install  
3. npm start 
```

### How to Use application

1. Click either the login button found on the Welcome Page or Navigation Bar to be redirected to the login form.
2. Enter login credentials for either a regular user or admin user provided below. This will redirect the user to the main page, the posts page.
3. To view more details of an example post, click the 'view' button or feel free to navigate between the different pages found on the top right of the navigation bar. 
4. In the messages page, Double click a message from a user to like that specific message.
5. Click the hush icon to the right of the messages box to enable vanish mode for user conversations. Use the 'enter' key on the keyboard to submit a message.
6. On the Profiles page, you can view submitted user reports by clicking on the 'User Reports' button.
7. To log out, click the 'Log Out' button on the top right of the navigation bar. 

### Quickart Features
1. Welcome page, featuring an about page to introduce to the user Quickart's main goal and purpose. 
2. Registration form.
3. Create new post. 
4. View more details about a specific post. 
5. Report a post.
6. A sticky bar filter on the Posts page for users to specify which items they are specifically looking for. 
7. Private messages between users.
8. Ability to like and unlike messages sent by users in the chat system by double tapping the message.
9. Vanish mode feature in the private message system where messages are not saved to a database, allowing users to talk about anything without feeling their privacy is being invaded. 
10. Edit User profile.
11. View all reports on a user's profile.

***DISCLAIMER: As this web application currently does not have a back-end and database, some functionalities may not work as intended. Please also do not refresh the page.*** 

### Login Credentials 
Regular User: \
username: user \
password: user 

Admin User: \
username: admin \
password: admin 

### Third-Party Libraries Used
1. React Router
2. Redux 
3. Material UI
4. react-scroll


### Keeping up to date & Branching
```
git pull 
git checkout -b master 
cd quickart-main 
npm install 
```
### Creating a new branch
```
git checkout -b [Name]/[Task/BugFix/EmergencyFix/etc]/[NameOfTask]
```
### Once you have finished your Task...
```
git checkout master 
git pull 
git checkout [YourBranchName] 
git add . 
git commit -m '[MeaningfulMessage]' 
git push --set-upstream origin [YourBranchName]
```
Then, on github, create a Pull Request(PR) and request review from everyone.

### Contributors 
Kenneth Chyzewski, William Gan, Wafiqah Raisa, Zi Shuai(Kevin) Gao
