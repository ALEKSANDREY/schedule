
![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Lab: Intro to Git and GitHub

## Introduction
> ***Note:*** *This is a pair programming activity.*


Let's apply what we've learned in class to share and update each other's code. With a partner, you're going going to alternate between who "drives" and who "navigates" while following the requirements in the exercise below. Your goal is to create a project, have a partner fork, clone, and edit that project, submit changes as a pull request, and then merge those changes.  

Be sure to look at the previous lesson for notes and helpful hints.

## Exercise

Partners will be referred to as partner1 and partner2.

#### Requirements

- Follow the instructions below.
- At the end of this exercise, you will each have an identical repository you've contributed to from your own computers.

### Part 1

**With partner1 driving:**

- On your desktop, create a folder called `git-and-github-practice`.
- `cd` into `git-and-github-practice`.
- In the terminal application, create the following files within that folder: `index.html` and `style.css`.
- Copy and paste the corresponding [starter code](starter-code) into your own `index.html` and `style.css` files.
- Initialize a Git repository (`git init`).
- Add any files that have been changed (`git add -A`).
- Commit your changes (`git commit -m "Set up for Git Practice Lab"`).
- Add a repository on GitHub using the following steps:
	- Visit [GitHub](https://github.com/) and click the "New Repository" button.
	- Pick a repository name (Example: `github-practice`).
	- Click the "Create Repository" button.
	- Copy the first line under "... or push an existing repository from the command line," paste it in your terminal application, and hit "enter."
		- This action will look something like this: 
			`git remote add origin https://github.com/yourUsernameHere/github-practice.git`
- Push to GitHub (`git push -u origin master`).


**With partner2 driving from his or her computer:**

- Get the link to your partner's GitHub repository and [fork](https://help.github.com/articles/fork-a-repo/) it.
- In terminal, `cd` into your desktop.
- Now, [clone](https://help.github.com/articles/cloning-a-repository/) the repository you forked.
- Open the project and edit the CSS file, changing the `background-color` of the page to "yellow."
- Edit the HTML file, updating the `<h1>` to contain the text "Relaxr — Updated."
- In the terminal application, `cd` into the repository you cloned.
- Add any files that have been changed (`git add -A`).
- Commit your changes (`git commit -m "Set up for Git Practice Lab"`).
- Push to GitHub (`git push -u origin master`).
- On the GitHub site, submit a pull request back to  partner1.


**With partner1 driving:**

- Merge the pull request from the GitHub interface.



### Part 2

**With partner2 driving**:


- `cd` into your desktop, and create a folder called `git-and-github-practice-two`.
- In your terminal application, `cd` into `git-and-github-practice-two`.
- Within that folder, create the following files: `index.html` and `style.css`.
- Copy and paste the code from the merged pull request files (of your partner's `git-and-github-practice` project) to your own.
- Initialize a Git repository in the `git-and-github-practice-two` folder (`git init`).
- Add any files that have been changed (`git add -A`).
- Commit your changes (`git commit -m "Set up for Git Practice Lab, Part 2"`).
- Add a repository on GitHub using the following steps:
	- Visit [GitHub](https://github.com/) and click the "New Repository" button.
	- Pick a repository name (Example: `github-practice-2`).
	- Click the "Create Repository" button.
	- Copy the first line under "...or push an existing repository from the command line," paste it in your terminal application, and hit "enter".
		- This action will look something like this: 
			`git remote add origin https://github.com/yourUsernameHere/github-practice-2.git`
- Push to GitHub (`git push -u origin master`).

> Note: Partner2 should now have the solution from Part 1 in his or her repository.

**With partner1 driving:**

- Get the link to your partner's GitHub repository and [fork](https://help.github.com/articles/fork-a-repo/) it.
- In terminal, `cd` into your desktop.
- Now, [clone](https://help.github.com/articles/cloning-a-repository/) the repository you forked.
- Open the project, and add an additional list item in the benefits section:
	`<li>Lets you enjoy more time with your friends and family.</li>`
- In the terminal application, `cd` into the repository you cloned.
- Add any files that have been changed (`git add -A`).
- Commit your changes (`git commit -m "Added an additional benefit"`).
- Push to GitHub (`git push -u origin master`).
- On the GitHub site, submit a pull request back to partner2.


**With partner2 driving:**

- Merge the pull request from the GitHub interface.

**Bonus**:

- Use the [syncing a fork](https://help.github.com/articles/syncing-a-fork/) documentation to update partner2's local version of `git-and-github-practice` without copying and pasting any code.
- Push the updated local copy to GitHub.


#### Starter Code

We've given you the HTML/CSS you need to get going [here](starter-code).

#### Deliverable

There is no screenshot for this lab. You should deliver two separate GitHub repositories that have merged pull requests. You can peak at the [solution code](solution-code/command-line-answers.md) if you get stuck, but try not to.

#### Bonus

- Have you and your partner both `cd` back to `git-and-github-practice`.
- Each of you can create and check out to a branch, either `css-work` or `html-work`.
- Make a change to the document your branch describes (`style.css` for the `css-work`, etc.).
- Commit on that branch.
- Push your branch to GitHub.
- Create a pull request from your branch to `master`.
- Have your partner merge your pull request!

## Additional Resources

- [Git Documentation](https://git-scm.com/documentation)
- [Forking on GitHub](https://help.github.com/articles/fork-a-repo/)
- [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/)
- [Linus Travalds on Git](https://www.youtube.com/watch?v=4XpnKHJAok8)

### Self Evaluation

Considering the previous exercise, rate your progress on a scale of 1-5 (5 being the highest) for the following criteria:

- **Persistence:** Do you handle frustration well? Do you independently pursue understanding?
- **Organization:** Do you thoughtfully implement best coding patterns and practices?
- **Collaboration:** Do you make an effort to solve problems and share your ideas with others?
- **Communication:** Do you clearly convey your thoughts to others in illustrative and clear ways?
- **Self-Compassion:** Do you try to turn failures into learning opportunities?
- **Resourcefulness:** Do you make an effort to compare and contrast new ideas with ones you already know? 
