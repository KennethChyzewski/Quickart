# team38 - Quickart

## URL to Quickart:
https://quickart2.herokuapp.com/

### Note this was in place wayyy before 10pm check commits I killed it by accident when moving stuff in the readme

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
5. Now the user may navigate to the post page by using the navigation bar. The post page button is found on the top right. 
6. Users may use the sticky bar found to the left of the All Post box to filter for specific posts. Users may filter by the title, category, maximum price of a post. Additionally, they may filter by the poster creator's location. 
5. To view more details of a post, click the 'view' button. 
6. Feel free to navigate between the different pages found on the top right of the navigation bar.
7. To log out, click the 'Log Out' button on the top right of the navigation bar. 

## How to Use the application as an Admin
1. Click either the login button found on the Welcome Page or Navigation Bar to be redirected to the login form.
2. Enter login credentials for an admin user provided below. This will redirect the admin to their profiles page.
3. On the Admin profile page, navigate to the user reports page by clicking the User Reports button.
4. In the user reports page, admins can view all reported posts in detail by clicking on the View Reported Posting.
5. After an admin has made a decision by viewing a report in detail, they may choose to delete that post by clicking on the delete post button on the View Reported Posting page.
6. An Admin may also navigate to the posts page and delete any post that violate the user conduct rules. 


## Login Credentials 
Regular User: \
username: user@user.com \
password: user 

username: user2@user2.com \
password: user2

Admin User: \
username: admin@admin.com \
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
11. Delete your own Account (Not possible as Admin)
12. View all reports on a user's profile as an admin.
13. Delete A Post as an Admin 

### Disclaimer(Changes from Phase 1):
1. The messaging system is not functional due to time constraints. 
2. The delete button was removed on the post page.
3. The edit profile page is slightly different from phase 1.
4. The contact seller form is not functional due to time contraints. 

### Express Routes:
### Disclaimer: 
They all require jwbTokens in order to operate. 
This allows us access to the database. 
So I won't be going over it again and again. 

### Format Below:
Purpose: Purpose
Expects: variables expected to be provided 
Return: the results of the routes on SUCESSS, FAILURE = msg being sent to route. 

(String)
(Object)
(ID)
### app.get('/auth')
  Purpose:
  Check if the current user is authorized access
  
  Expects:
  user id : id of the user being checked out(ID)
  
  Return:
  User Object of the requested person. (Object)

### app.post('/auth')
  Purpose:
  Login in a user to the website 
  
  Expects:
  email: email of the user to login(String)
  password: password of the user (String)
  
  Return
  JwbToken and User Id (ID)(ID)

### app.get('/posts')
  Purpose:
  Get all the postings on the site 
  
  Expects:
  Nothing besides jwbtoken 
  
  Return
  Array of Post Objects (Array of Object)

### app.get('/posts/:id')
  Purpose:
  Find a post by its ID
  
  Expects:
  post id: id of the post that was requested to find (ID)
  
  Return
  Post Object of the requested post (Object)

### app.delete('/posts/:id')
  Purpose:
  Let's an admin delete a post they beleive to be frauds
  
  Expects:
  post id: id of the post that was reported as frauds (ID)
  
  Return:
  msg, whether it was deleted 
  

### app.post('/posts')
  Purpose:
  Creates a sale posting to store in the database
  
  Expects:
      postedBy: id of the user who created it(ID)
      title: title of the post (String)
      price: price associated with the sale (Float)
      category: type of food they're selling (String)
      postEndDate: end date for submitting a bid to the post (Date Object)
      description: more information, mainly misc informaiton on the items for sale (String)
      pickUpOptions: the type of pickup or delivery offered to the winnier of the bid (String)
      name: name of the seller (String)
      avatar: default reference to the avatar of the seller (String)
      location: location of the seller (String)
      biography: background information on the seller (String)
      niche: types of things the seller sells or finds niche. (String)
      tags: type of food the seller claims to idenitfy with. (Array of String)
      
  Return
  Post Object of the new posting.(Object)

### app.put('/posts/like/:id')
  Purpose:
  Like a post 
  
  Expects:
  post.id : id of the post the current user wants to Like(ID)
  user.id : id of the disliker so they can't like more than once(ID)
  
  Return:
  updated number of likes in the Post Object. (Object Attribute) 
  
### app.put('/posts/dislike/:id')
  Purpose:
  Dislike a post 
  
  Expects:
  post.id : id of the post the current user wants to dislike(ID)
  user.id : id of the disliker so they can't dislike bomb(ID)
  
  Return:
  updated number of dislikes in the Post Object. (Object Attribute)

### app.get('/profile/me')
  Purpose: 
  Get the current profile of the user.
  
  Expects:
  user.id: id of the user requesting it(ID)
  
  Return
  Profile Object of the requesting User (Object)


### app.post('/profile/me')
  Purpose:
  Creation of an empty profile to be populated soon. 
  
  Expects:
  name: name of the user (String)
  user.id: id of the created user (ID)
  location: empty text (String)
  biography: empty text (String)
  niche: empty text  (String)
  tags: empty list  (String)
  postings: empty list (String)
  
  Return:
  Profile Object of an empty User ready for updating. (Object)

### app.post('/profile')
  Purpose: 
  Updates a profile of an existing user
  
  Expects:
  name: name of the user (String)
  location: location of the user (String)
  biography: some description about the user  (String)
  niche: some text on what they harvest.(String)
  tags: an array of text on their specific interests.(String)
  
  Return:
  Profile Object of the user (Object)


### app.get('/profile/user/:user_id')
  Purpose:
  grab the profile of a single user using their id
  
  Expects:
  user.id: id of the user who is asking for their profile(ID)
  
  Returns:
  Profile Object containing their profile information (Object)
  

### app.delete('/profile')
  Purpose:
  When an user wishes to delete their profile out of existence
  
  Expects:
  user.id : id of the user who requested the deletion(ID)
  
  Returns:
  msg: string returned for deletion acknowledgement.  

### app.post('/users') 
  Purpose:
  Creates a user with the provided parameter and pushes it to the database
  
  Expects:
  name: name of the new user(String)
  email: email of the new user(String)
  avatar: default reference to an avatar picture(String)
  password: password of the new user(String)
  
  Return:
  jwbToken:  assigned to this user
  user.id :  id assigned to them. (ID)

### app.get('/reports')
  Purpose: 
  get all the user reports from the database for the admin.
  
  Expects: 
  Nothing but JwbToken
  
  Return:
  an array of Report Objects.( Array of Object)
  

### app.post('/reports')
  Purpose:
  Used to push a user report about a post that is possible a fraud. 
  
  Expects: 
  ReportedBy: user id of person who reported(ID)
  name: name of user who reported(String)
  reportDescription: the details of the issues the user finds(String)
  avatar: default reference to avatar of the user(String)
  reason: short string of the type of fraud (String)
  linkToPost: id of the post in question.(ID)
  
  Return:
  Report Object Saved to DataBase (Object)
           

what they are used for in your app, what data they expect to be sent, and what they would return. 

### BELOW IS MEANT FOR DEVELOPERS: 

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
