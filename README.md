# team38 - Quickart


## How to Use the application as a regular user

### Creating a New User Account
1. Click either the Sign up button found on the Welcome Page or the register button on the Navigation Bar to be redirected to the register form.
2. Enter all required information on the register form.
3. The app will redirect you to an initial setup page, please fill out your biography, niche, and check off any relevant food tags.
4. After clicking submit on the edit profile page with all relevant fields filled out, the web application will redirect the user to their profiles page.
5. Now the user may navigate to the post page by using the navigation bar. The post page button is found on the top right. 

### Using an Existing User Account
1. Click either the login button found on the Welcome Page or Navigation Bar to be redirected to the login form.
2. Enter login credentials for a regular user provided below. This will redirect the user to their profiles page.
3. Click on the posts button on the navigation bar to be taken to the post page.
4. You can change your profile settings with the appropriate forms found by clicking the 'Edit Profile' button on the 'Profile' page.
5. To view more details of a post, click the 'view' button. 
6. Feel free to navigate between the different pages found on the top right of the navigation bar.
7. To log out, click the 'Log Out' button on the top right of the navigation bar. 

## How to Use the application as an Admin
1. Click either the login button found on the Welcome Page or Navigation Bar to be redirected to the login form.
2. Enter login credentials for an admin user provided below. This will redirect the admin to their profiles page.


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

## Quickart Features
1. Welcome page, featuring an about page to introduce to the user Quickart's main goal and purpose. 
2. Registration form.
3. Create new post. 
4. View more details about a specific post. 
5. Report a post.
6. A sticky bar filter on the Posts page for users to specify which items they are specifically looking for. 
10. Edit User profile.
11. View all reports on a user's profile as an admin.



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
