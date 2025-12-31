# Internship Task 2 – Strict Tech Stack Implementation

## Objective
This task is completed as part of the internship requirements.  
The objective of this task is to recreate Internship Task 1 using a templating engine
and a bundler, following a strict and mandatory technology stack.

## Technology Stack Used
Templating Engine: Nunjucks  
Bundler: Vite  
HTML5  
CSS3  
Bootstrap 5  

## Project Description
This project is a Tourist Guide website recreated from Internship Task 1.
The same UI, layout, styling, emojis, and links are maintained, but the implementation
is done using Nunjucks templates and the Vite bundler.

## Folder Structure
src/

├─ templates/
│   ├─ layout.njk
│   ├─ navbar.njk
│   ├─ footer.njk
│   ├─ index.njk
│   ├─ about.njk
│   └─ contact.njk
└─ assets/
├─ css/
├─ images/
└─ js/
dist/
└─ index.html

## How to Run the Project
1. Install Node.js on your system.
2. Install dependencies:
npm install
3. Run the development server:
npm run dev
4. Build the final production output:
npm run build
5. Open `dist/index.html` in a browser to view the final output.

## Notes
- Nunjucks is used as the templating engine throughout the project.
- Vite is used for bundling and build management.
- Task 2 is maintained in a separate repository as instructed.
- The final compiled output is available inside the `dist` folder.
