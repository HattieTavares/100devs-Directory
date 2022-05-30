# 100devs-Directory
A worldwide directory for 100devs members

I created this directory so members can voluntarily add themselves through github. I thought it would be fun to see how widespread we are so I also created a map to mark each member's location. The map can only be edited by me, so I will be adding members as I accept pull requests and updating it!

**Note: When creating your pull request, please include your 100devs discord name so I can verify you are a member.

To add yourself to the directory:

**1. Fork the repository:**

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account

**2. Clone the repository:**

Clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the clone button and then click the *copy to clipboard* icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```
where "url you just copied" (without the quote marks) is the url to your fork of this project.

**3. Create a branch:**

Navigate to the repository on your computer:

Now create a branch using the `git checkout` command:
```
git checkout -b <add-your-new-branch-name-without-the-brackets>
```

For example:
```
git checkout -b add-yourFirstName-YourLastName
```
Remember this branch name, you will need it later!

**Now you will be adding yourself to the directory.** 

1. In the ```members``` folder there is a file called profileTemplate.html. Please do not edit the original! Make a copy in the same folder and edit the file name to be yourFirstNameYourLastName.html. I have added myself already so you can see it as an example.

2. There is a folder called profilePics, if you would like a profile picture, please add it there. You can also use a logo if you prefer, or leave the default if you don't want to add your picture.

3. Edit your html file with whatever information you want included. If you do not have a twitch for example, just delete that on your file.

4. When you are done editing add your name to the appropriate letter and country files. Mine has again been done for you as an example.

**4. Add, commit, and push your branch to your github.**

In your terminal, run the following commands to push all of your updates to your github repository:

1. Add all files to staging area:
```
git add .
```

2. Commit files
```
git commit -m 'adding <your-name-here-without-brackets> to member directory'
```

For example:
```
git commit -m 'adding Katie Brown to member directory'
```

3. Push files to github along with your new branch:
```
git push --set-upstream origin <name-of-your-branch-without-brackets>
```

For example:
```
git push --set-upstream origin add-Katie-Brown
```

**5. Compare & Pull Request**
Once you've pushed your changes to your repository, you need to add them to the main directory. 

1. On your repository page, click 'Compare & pull request' at the top of your repo page.

2. Your pull request will automatically fill with your commit text. You can update this text or leave it as is.

3. In the 'leave a comment' section, add your discord name so Hattie can verify your involvement with 100Devs.

4. Click 'create pull request' to submit your branch to merged with Main.
