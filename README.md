# My First API REST with Node.js

This is a simple project using Express, that was created a API REST for management PROJECTS and TASKS.
## Routes:
- POST /projects: A route should take id and title in the body and register a new project within an array in the following format: {id: "1", title: 'New Project', tasks: [ ]}; Keep submitting both project ID and project title in double quoted string format.

- GET /projects: Route that list all projects and their tasks;

- PUT /projects/:id : The route should only change the project title with the id present in the route parameters;

- DELETE /projects/: id: The route should delete the project with the id present in thre route parameters;

- POST /projects/:id/tasks: The route should receive a title field and store a new task in the task array of a specific project chosen through the id present in the route parameters;

## Middlewares 
- checkProjectInArray: Local middleware used with routes that receive project ID in the URL params. Verify if the project with that id exists.

- countReqNumber: Global middleware used to count the requests number.
