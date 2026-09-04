## Getter Done
For this project I created a todo app that supports adding, deleting and toggling functionality. I used 
FlexBox css positioning throughout the project. To use this app is very straight-forward, just type a task
into the text box field and click add new task (or hit the enter key) and it will add it to the list of tasks.
You can check a task off when you complete it and delete a task if you no longer need to do it. This was a lot
harder than I thought it would be to implement :(

## Technical Achievements
- **Tech Achievement 1**:  I created a single-page app that both provides a form (textbox) for the users to 
submit tasks and always shows the list of tasks on the screen. When the user submits a task, a derived deadline 
field is calculated using the priority level that the user selected. If the user selects high priority, the
calculated deadline is 1 day from the creation date of that task. For medium priority it's 3 days and low is
6 days. This deadline is then displayed next to the task title in the task list.

### Design/Evaluation Achievements
- **Design Achievement 1**:


**Peer Studies:**

Hultgren:

**1) What problems did the user have with your design?**\
Hultgren did not like how the priority for each task is not displayed in the list of tasks. He also thinks that the tasks should be ranked by priority, meaning the high priority tasks jump to the top of the list. He also suggested that tasks should have the ability to add smaller sub-tasks, as to break big tasks into smaller chunks.

**2) What comments did they make that surprised you?**\
Hultgren surprised me when he commented on tasks not having a sub-task feature. That is something I would have never thought of unless someone suggested it. It does make sense though, as chunking larger tasks into smaller ones is often an efficient way of doing things.

**3) What would you change about the interface based on their feedback?**\
I would definitely add the priority type somewhere next to each task and maybe even color code them. I would also add the ranked tasks system so the higher priority tasks go to the top of the list. 


Bundesmann:

**1) What problems did the user have with your design?**\
Bundesmann did not like how the deadline is calculated for the user and thinks that there should be a separate field in the form for the user to add a due date. He also didn't like where the due date was located next to each task item and suggested it be moved more to the right side of the list where the delete button is located. He also wanted a delete all button that deletes all tasks at once to avoid having to click delete on each individual task. 

**2) What comments did they make that surprised you?**\
Bundesmann surprised me when he commented on the delete all button. I never thought about a clear all button and now that he mentioned it, that would be very very convenient for the user.  

**3) What would you change about the interface based on their feedback?**\
I would definitely adjust the location of the due date and add a delete all tasks button. I would also implement a calandar for the user to access, allowing the user to add their own deadline for each task.
