# ccp_react_d01_q15

# Dynamic SPA with React

## Problem Statement

Design a React-based Single Page Application (SPA) that meets the following requirements:

### Navbar

- Contains links to **Home**, **About**, and **Contact**.
- Clicking a link updates the displayed page content **without a full page reload**.

### Dynamic Content

- Each page displays unique content:
  - Home: "Welcome to Home"
  - About: "About Us"
  - Contact: "Contact Us"

### State Management

- Use React `useState` to keep track of the **currently active page**.

### Styling

- Apply **inline styles** or **CSS** to visually differentiate each page.

### Hint

- Use **conditional rendering** to dynamically swap the content based on the active page state.

---

```Folder Structure

dynamic-spa-react/
├── public/
│ ├── index.html
├── src/
│ ├── App.js
│ ├── index.js
│ ├── App.css
│ └── ...
├── package.json
└── README.md