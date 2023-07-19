1. What is the purpose of the Feature Branch Workflow in Git?

   > Handle each new feature or task in a dedicated branch.

2. How do you set up a new Git repository for your project?

   > ```shell
   > git init
   > git remote add origin <repository_url>
   > ```

3. What is the main branch in the Feature Branch Workflow?

   > The `main` or `develop` branch.

4. How do you create a new branch for a specific feature or task?

   > ```shell
   > git checkout -b feature/<branch_name>
   > ```

5. How do you switch to a different branch in Git?

   > ```shell
   > git checkout <branch_name>
   > ```

6. How do you make changes and track your progress in the feature branch?

   > ```shell
   > git add .
   > git commit -m "<message>"
   > git push -u origin feature/<branch_name>
   > ```

7. How do you merge a feature branch into the main branch?

   > ```shell
   > git checkout <main_branch_name>
   > git merge feature/<branch_name>
   > ```

8. What should you do if there are merge conflicts during the merge process?

   > - Identify the conflicting files.
   > - Resolve the conflict, keeping or removing the conflicting code.
   > - Save and commit the changes.

9. Why is it important to test the merged codebase after completing the merge?

   > To avoid conflicts that the merger process could not detect.

10. What are some additional challenges you can undertake to enhance your understanding of the Feature Branch Workflow?

    > Work with this specific workflow. Personally, I only work with centralized workflow and pull request workflow.

11. How do you delete a feature branch after merging it into the main branch?

    > ```shell
    > git branch -d <branch_name>
    > git push origin -d <branch_name>
    > ```

12. What is the purpose of code reviews in the Feature Branch Workflow?

    > Discuss the reason for some changes, or receive suggestions for improvement.

13. How do you push your feature branch to a remote repository?

    > ```shell
    > git push -u origin feature/<branch_name>
    > ```

14. What is the recommended approach for naming feature branches in the Feature Branch Workflow?

    > feature/\<branch-name>

    > feature/\<task>

    etc.

15. How can you keep your feature branch up to date with the latest changes from the main branch?
    > ```shell
    > git checkout <main_branch>
    > git pull
    > git checkout feature/<branch_name>\
    > git rebase main
    > ```
