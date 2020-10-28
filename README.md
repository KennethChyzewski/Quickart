# team38 - Quickart

### How to Run
1. cd quickart-main/ 
2. npm install  
3. npm start 


### Keeping up to date & Branching
git checkout -b master \
git pull \
cd quickart-main \
npm install 
### Onto your own Branch
git checkout -b [Name]/[Task/BugFix/EmergencyFix/etc]/[NameOfTask]
### Once you have finished your Task...
git checkout master \
git pull \
git checkout [YourBranchName] \
git add . \
git commit -m '[MeaningfulMessage]' \
git push --set-upstream origin [YourBranchName] \
### Create Pull Request and inform everyone!!!!!
