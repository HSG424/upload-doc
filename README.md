# NV assessment

Built using [VITE](https://vitejs.dev/guide/).

Live deployment: [https://nv-assessment-f1d5f.web.app](https://nv-assessment-f1d5f.web.app)

I spent a lot of time early on working on styling because no styling info/details were provided. Even things like fonts and svg graphics had to be tracked down. This delayed development and there are some parts that are unfinished:

- Implement file upload functionality.
- "UploadForm.jsx" needs to be broken down further into more reusable sub-components: select boxes and "testing center" rows.
- "UploadForm.jsx" imports from same dir need to be "rolled up"
- A more robust modal solution must be researched.
- Mobile styling implemntation.

If given more time, I could really polish this and make it shine.

If you open your browser console, you will see details of a form submit when you submit the form. Again, I didn't have much time so the only states working right now are radio buttons and checkboxes.

## Key Files

1. src/App.jsx
2. src/app.scss
3. src/Modal/ModalUpload.jsx
4. src/components/form/UploadFormWrapper.jsx
5. src/components/form/UploadForm.jsx

## Installation & Setup

1. `git clone https://github.com/HSG424/upload-doc.git`

2. `cd upload-doc`

3. `npm install`

4. `npm run dev`

## Author

- **Fred Han** - (https://github.com/HSG424)
