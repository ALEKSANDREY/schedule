
## Part 1 Solution

> Note: Use the solution from Part 1 to help you with the solution to Part 2 (The steps to complete each part are nearly identical, aside from the JavaScript needed).

- With partner1 driving:
  1. Create a folder called `git-and-github-practice`.
  2. Within that folder, create the following files `index.html`, `style.css`, and `script.js`.
  3. Copy and paste the corresponding [starter-code](starter-code) from `index.html` and `style.css` into your own files.
  4. Add `// javascript to be added` to your `scripts.js` file.
  5. Initiate a Git repository, commit your changes, and push to GitHub.

```bash
mkdir git-and-github-practice
cd git-and-github-practice
touch index.html style.css script.js
# add '// javascript to be added' in your text editor to script.js
git init
git add .
git commit -m 'my first commit'
# create a repo on GitHub
git remote add origin YOUR-URL
git push -r origin master
```
![](https://i.imgur.com/LRzl2UD.png)

![](https://i.imgur.com/x4dQjWo.png)

- With partner2 driving from his or her computer:

  1. Get the link to your partner's GitHub repository, fork it, and clone it.
  2. Open the project and make the "Join Our Mailing List" button prompt the user to submit an email address.
  3. Commit your changes and submit a pull request back to partner1.




In your terminal:
```bash
git clone YOUR-COPIED-URL
cd git-and-github-practice
subl .
```


In your terminal:
```bash
git add .
git commit -m 'YOUR COMMIT MESSAGE'
gitp push origin master
```
![](https://i.imgur.com/w0V904t.png)

![](https://i.imgur.com/lOGl5cg.png)

- With partner1 driving:
  - Merge the pull request from the GitHub interface.

![](https://i.imgur.com/Xv40XIk.png)
