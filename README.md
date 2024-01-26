# NV assessment

Built using [VITE](https://vitejs.dev/guide/).

Live deployment: [https://nv-assessment-f1d5f.web.app](https://nv-assessment-f1d5f.web.app)

Parts that are unfinished or could be improved:

- Implement React.Context - over the current prop drilling - to make components like UploadForm.jsx more lean. Not really needed because the prop chain is only 1 component long and its not like React.Context offers any optimization benefits over prop drilling.

- The styling of uploaded files needs a little more work.

- A more robust modal solution must be researched.

- Mobile styling implementation. I was not provided with an img of what the mobile version should look like on smaller screen sizes.

**If you open your browser console, you will see details of a form submit when you submit the form. All form states are being tracked and output in the console.** Please see how robust the multiple testing centers part is!

**The extra credit part making the drag & drop work to where the user can drag a file on the page and the filename pops up is complete.**

If more resources could be directed towards this, unit testing, typescript, and documentation could be implemented. It's nice to adhere to best practices when the time frame allows for it.

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
