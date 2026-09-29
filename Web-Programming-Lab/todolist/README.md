# Web Programming Laboratory (HTML5, CSS & JavaScript)

This repository contains clean, standard-compliant implementations for academic Web Programming Laboratory exercises (Lab 1 through Lab 5), developed in pure HTML5, CSS3, and vanilla JavaScript.

---

## 📂 Repository Structure

```text
d:\wb\
│
├── index.html                    # Central dashboard linking all lab exercises
├── lab_1-3.pdf                   # Lab assignment manual/syllabus
├── README.md                     # Documentation and project overview
│
├── lab1/                         # Lab 1: Multi-Page Book Information Website
│   ├── index.html                # Home page with book list & visual previews
│   ├── killing_floor.html        # Book detail page (Killing Floor)
│   ├── die_trying.html           # Book detail page (Die Trying)
│   └── tripwire.html             # Book detail page (Tripwire)
│
├── lab2/                         # Lab 2: Product Catalog with Table Tag
│   └── index.html                # Product specifications & pricing table
│
├── lab3a/                        # Lab 3 (A): Cultural Festival Registration Form
│   └── index.html                # Form with textboxes, radios, checkboxes, dropdown, etc.
│
├── lab3b/                        # Lab 3 (B): Book Information using Frames
│   ├── index.html                # Classic HTML Frameset (cols="30%, 70%")
│   ├── iframe_version.html       # Modern HTML5 iframe equivalent
│   ├── book_list.html            # Left frame navigation menu
│   ├── default_info.html         # Initial right frame placeholder
│   ├── it_ends_with_us.html      # Book detail view
│   ├── it_starts_with_us.html    # Book detail view
│   ├── ugly_love.html            # Book detail view
│   └── verity.html               # Book detail view
│
├── lab4/                         # Lab 4: Country & Capital Selector with CSS
│   └── index.html                # Dropdown selection with custom CSS font properties
│
└── lab5/                         # Lab 5: College Portal Webpage
    ├── index.html                # College portal with background, typography & marquee
    └── campus_bg.svg             # Scalable campus illustration background
```

---

## 📋 Lab Exercises Overview

### 🔹 Lab 1: Book Information Website (Hyperlinks & Multi-Page Navigation)
* **Objective:** Design a website for book information. The home page contains a book list; clicking a specific book opens its detailed information on a subsequent page with navigation to return home.
* **Key Concepts:** Hyperlinks (`<a>`), unordered lists (`<ul>`, `<li>`), layout tables, semantic navigation.
* **Location:** `lab1/index.html`

---

### 🔹 Lab 2: Product Information Using HTML `<table>` Tag
* **Objective:** Display detailed product information (Product image/photo, name, brand, category, price, and technical specifications) neatly structured using HTML tables.
* **Key Concepts:** `<table>`, `<tr>`, `<th>`, `<td>`, `colspan`, `cellpadding`, `cellspacing`, `border`.
* **Location:** `lab2/index.html`

---

### 🔹 Lab 3 (A): Cultural Festival Registration Form
* **Objective:** Create a creative registration form for participants from various institutions for college cultural festival events.
* **Key Concepts:**
  * **Text boxes:** Participant Name, Institute Name, Email, Contact Number
  * **Option buttons (Radio):** Gender, Participation category (Solo / Team)
  * **Check boxes:** Event choices (Dance, Music, Drama, Quiz, Photography, etc.)
  * **Drop-down list (`<select>`):** Year of Study, State/Region
  * **Text area (`<textarea>`):** Address, special requests/remarks
  * **Action buttons:** Submit (`<input type="submit">`) and Reset (`<input type="reset">`)
* **Location:** `lab3a/index.html`

---

### 🔹 Lab 3 (B): Book Information Website Using Frames
* **Objective:** Divide the screen into two parts using frames: the left part contains the book list, and the right part dynamically displays book details upon clicking a title.
* **Key Concepts:** `<frameset>`, `<frame>`, `target` attribute targeting named frames, and `<noframes>`.
* **Bonus:** A modern `iframe_version.html` is provided for 100% compatibility in HTML5 browsers that deprecate `<frameset>`.
* **Location:** `lab3b/index.html`

---

### 🔹 Lab 4: Country & Capital Selector with CSS
* **Objective:** Create a selection box listing 5 countries. When a user selects a country, its capital is printed next to the list. CSS is used to customize the capital's font properties (**color**, **bold**, and **font size**).
* **Key Concepts:** `<select>`, `onchange` event handler, DOM manipulation (`innerHTML`), CSS font styling (`color`, `font-weight: bold`, `font-size: 22px`).
* **Location:** `lab4/index.html`

---

### 🔹 Lab 5: College Webpage
* **Objective:** Build an institutional webpage adhering to specific design constraints:
  * **(a)** Page title reflects the college name.
  * **(b)** Background image spanning the campus.
  * **(c)** College name placed prominently at the top in large text, followed by the address in a smaller font size.
  * **(d)** List of courses offered, each styled in a **different color**, **style** (italic, oblique, bold, underline), and **typeface** (`Trebuchet MS`, `Georgia`, `Courier New`, `Arial Black`, `Verdana`, `Palatino`).
  * **(e)** Continuous scrolling text (`<marquee>`) displaying upcoming exam schedules, deadlines, and festival dates.
* **Location:** `lab5/index.html`

---

## 🚀 How to Run and Test

1. Clone or download this repository to your local drive.
2. Open [index.html](index.html) in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).
3. Use the interactive launch links in the table to test any individual lab exercise.

---

## 🛠️ Technologies Used
* **HTML5** (Structure, forms, tables, frames, semantic markup)
* **CSS3** (Typography, layouts, color palettes, responsive cards, background images)
* **JavaScript (ES6)** (Event handling and DOM updates)
* **Scalable Vector Graphics (SVG)** (Self-contained vector graphics for book covers, products, and campus illustrations)

---
*Created for Web Programming Laboratory Coursework.*