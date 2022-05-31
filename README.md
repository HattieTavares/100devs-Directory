# 100devs-Directory
A worldwide directory for 100devs members

I created this directory so members can voluntarily add themselves through github. I thought it would be fun to see how widespread we are so I also created a map to mark each member's location. The map can only be edited by me, so I will be adding members as I accept pull requests and updating it!

**Note: When creating your pull request, please include your 100devs discord name so I can verify you are a member.

To add yourself to the directory:

**1. Fork the repository:**

Fork this repository by clicking on the fork button on the top of this page.

This will create a copy of this repository in your account.

**2. Clone the repository:**

Clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the clone button and then click the *copy to clipboard* icon.

Open a terminal, navigate to the location you want to clone the repository on your computer and run the following git command:

```
git clone "url you just copied"
```
where "url you just copied" (without the quote marks) is the url to your fork of this project.

**3. Create a branch:**

In the terminal navigate to the repository on your computer:

Now create a branch using the `git checkout` command:
```
git checkout -b <add-your-new-branch-name-without-the-brackets>
```

For example:
```
git checkout -b add-yourFirstName-YourLastName
```
Remember this branch name, you will need it later!

**4. Now you will be adding yourself to the directory.** 

1. In the ```members``` folder there is a file called profileTemplate.html. Please do not edit the original! Make a copy in the same folder and edit the file name to be yourFirstNameYourLastName.html. I have added myself already so you can see it as an example.

2. There is a folder called profilePics, if you would like a profile picture, please add it there. You can also use a logo if you prefer, or leave the default if you don't want to add your picture.

3. Edit your html file with whatever information you want included. If you do not have a twitch for example, just delete that on your file.

4. When you are done editing add your name to the appropriate letter and country files. Mine has again been done for you as an example.

**5. Add, commit, and push your branch to your github.**

1. In your terminal navigate to the repository folder.

2. Check the status of your files
```
git status
``` 
This should show the files you changed

3. Add files
```
git add .
```

4. Commit with a message
```
git commit -m "add yourFirstName yourLastName to directory"
``` 
add your commit message here, it does not have to be this exactly but please include your name

5. Push your files!
```
git push origin <your branch name here>
``` 
that branch name you created earlier goes here, minus the brackets

**5. Compare & Pull Request**
Once you've pushed your changes to your repository, you need to add them to the main directory. 

1. On your github repository page, click 'Compare & pull request' at the top of your repo page.

2. Your pull request will automatically fill with your commit text. You can update this text or leave it as is.

3. In the 'leave a comment' section, add your discord name so I can verify your involvement with 100devs AND also the location that you want added to the global map.

4. Click 'create pull request' to submit your branch to be merged with Main.
