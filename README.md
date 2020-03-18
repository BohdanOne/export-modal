# Export Report - Recruitment Task

Demo App containing modal component for requesting an exported report.
On opening Modal user can specify export settings such as:
 - report name
 - report format
 - email where report will be sent
 - schedule time of sending report

Modal built with create-react-app & SASS based on functional components using hooks to manage local state.

## To run demo
- clone or download this repository
- in repository directory:
  1. `npm install`
  2. `npm start`
  3. open [http://localhost:3000](http://localhost:3000) to view demo in the browser.
  4. run `npm test` to execute provided unit tests

### To use Modal Component in your CRA project
- `npm i node-sass` in your project
- copy **modal** directory from *src/components/* into your project
- `import Modal from 'path/to/modal-directory'` in .jsx file
- use `<Modal />`
- edit components in *modal/components/* to adjust Modal for your own needs