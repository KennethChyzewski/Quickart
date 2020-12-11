# team38 - Quickart


## How to Use the application as a regular user

### Creating a New Account
1. Click either the Sign up button found on the Welcome Page or the register button on the Navigation Bar to be redirected to the register form.
2. Enter all required information on the register form.
3. The app will redirect you to an edit profile page, please fill out your biography, niche, and check any relevant food tags.
4. Now you may navigate to the post page by using the navigation bar. The post page button is found on the top right. 

### Using an Existing Account
1. Click either the login button found on the Welcome Page or Navigation Bar to be redirected to the login form.
2. Enter login credentials for a regular user provided below. This will redirect the user to their profiles page.
3. Click on the posts button on the navigation bar to be taken to the post page.
4. To view more details of a post, click the 'view' button. 
5. In the messages page, Double click a message from a user to like that specific message.
6. Click the hush icon to the right of the messages box to enable vanish mode for user conversations. Use the 'enter' key on the keyboard to submit a message.
7. On the Profiles page, you can view submitted user reports by clicking on the 'User Reports' button.
8. You can change your profile settings with the appropriate forms found by clicking the 'Edit Profile' button on the 'Profile' page.
9. Feel free to navigate between the different pages found on the top right of the navigation bar.
10. To log out, click the 'Log Out' button on the top right of the navigation bar. 

## How to Use the application as an Admin
1. Click either the login button found on the Welcome Page or Navigation Bar to be redirected to the login form.
2. Enter login credentials for an admin user provided below. This will redirect the admin to their profiles page.

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

## Login Credentials 
Regular User: \
username: user \
password: user 

Admin User: \
username: admin \
password: admin 

## Third-Party Libraries Used
1. React Router
2. Redux 
3. Material UI
4. react-scroll


### How to Start up and run the web application
```
1. cd quickart-main/ 
2. npm install  
3. npm start 
```


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


### To test API endpoints and database configuration
Open a new terminal
```
cd quickart-main/
npm run server
```

### Contributors 
Kenneth Chyzewski, William Gan, Wafiqah Raisa, Zi Shuai(Kevin) Gao
