# HTML Notes

## What is HTML?

**HTML (HyperText Markup Language)** is the standard markup language used to create and structure web pages.

- **HyperText** → text containing links to other pages.
- **Markup Language** → uses tags to describe content.

---

## HTML5 (2014)

Introduced:

- Semantic tags
- Audio & Video support
- Canvas
- Local Storage & Session Storage support

---

## HTML Boilerplate

A boilerplate is the basic template or starting structure of a program or file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Website</title>
  </head>

  <body></body>
</html>
```

---

## How a Webpage Loads (Flow)

```
User enters URL
      ↓
DNS converts URL into an IP address
      ↓
Browser sends an HTTP Request
      ↓
Request reaches the Web Server
      ↓
Server generates HTML
      ↓
Browser downloads HTML
      ↓
Browser parses HTML
      ↓
Browser finds CSS
      ↓
Browser finds JS
      ↓
Final Page appears
```

---

## HTML5 Features

### 1. Semantic Elements (Meaningful Tags)

#### Structural / Sectioning Elements

| Tag         | Description                                         |
| ----------- | --------------------------------------------------- |
| `<header>`  | Introductory content or navigation aids             |
| `<footer>`  | Footer for its nearest sectioning content           |
| `<nav>`     | Navigation links                                    |
| `<main>`    | Dominant content of the document                    |
| `<section>` | Thematic grouping of content                        |
| `<article>` | Self-contained, independently distributable content |
| `<aside>`   | Content tangentially related to the main content    |

#### Text-level / Content Elements

| Tag            | Description                                                 |
| -------------- | ----------------------------------------------------------- |
| `<mark>`       | Highlighted/marked text                                     |
| `<time>`       | Dates and times (machine-readable via `datetime` attribute) |
| `<figure>`     | Self-contained content like images, diagrams, code          |
| `<figcaption>` | Caption for a `<figure>`                                    |
| `<data>`       | Links content with a machine-readable value                 |
| `<output>`     | Result of a calculation (often used with forms)             |
| `<progress>`   | Progress of a task                                          |
| `<meter>`      | Scalar value within a known range (e.g., disk usage)        |
| `<wbr>`        | Word break opportunity                                      |
| `<summary>`    | Summary/heading for a `<details>` element                   |
| `<details>`    | Collapsible/disclosure widget                               |

#### Media Elements

| Tag        | Description                                                |
| ---------- | ---------------------------------------------------------- |
| `<audio>`  | Embed sound content                                        |
| `<video>`  | Embed video content                                        |
| `<source>` | Multiple media sources for `<audio>`/`<video>`/`<picture>` |
| `<track>`  | Text tracks (subtitles, captions) for media                |
| `<embed>`  | Embed external content/plugins                             |
| `<canvas>` | Draw graphics via JavaScript                               |

#### Form-related Elements

| Tag          | Description                                             |
| ------------ | ------------------------------------------------------- |
| `<datalist>` | Predefined options for input controls                   |
| `<keygen>`   | Key-pair generator (deprecated/removed in modern specs) |
| `<output>`   | Result of a calculation (ties to forms)                 |

#### Other Elements

| Tag          | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| `<template>` | Client-side content template, not rendered until activated by JS |
| `<dialog>`   | Dialog box or modal window                                       |
| `<picture>`  | Responsive images with multiple sources                          |
| `<slot>`     | Part of Web Components (Custom Elements spec)                    |

---

### 2. Forms — New Input Types

| Type    | Purpose                               |
| ------- | ------------------------------------- |
| `email` | Validates email format automatically  |
| `date`  | Shows a date picker                   |
| `url`   | Validates website link format         |
| `range` | Shows a slider between min/max values |
| `color` | Shows a color picker                  |

---

### 3. Storage APIs

#### Local Storage

A way to store data in the browser that stays saved **permanently**, even after closing the browser. Data is stored in key-value pairs and remains until the user manually clears it.

> **Example:** Saving theme preference (dark/light mode).

#### Session Storage

Similar to local storage, but data is deleted **as soon as the tab is closed**. It only lasts for the current session — refreshing keeps the data, but closing the tab removes it.

> **Example:** Multi-step form data (temporary, until submission).

---

### 4. Browser APIs

#### Geolocation API

Gets the user's current location (latitude and longitude). Requires user permission first (a popup asking to allow location access).

> **Used in:** Maps apps, Weather apps.

#### Drag and Drop API

Allows elements to be dragged from one place and dropped into another. Enabled using the `draggable="true"` attribute.

> **Used in:** "Drag your file here" upload boxes.

#### Web Workers (concept)

JavaScript normally runs on a single thread, so heavy tasks can freeze the page. Web Workers let code run in a **background thread**, keeping the main page responsive.

> **Used for:** Heavy processing like image manipulation or large calculations.

#### WebSocket (concept)

Enables **real-time, two-way communication** between client and server, unlike normal HTTP request-response. Once a connection is established, both sides can continuously exchange data without repeated requests.

> **Used in:** Chat apps, live notifications, live score updates.

---

# Day 3 — HTML Forms (2-Year React Developer Level)

---

## 1. `<form>` Tag

### What is a form?

A form is used to **collect user input** and send it to a server for processing.

**Real-world examples:**

- Login
- Signup
- Registration

**Basic structure:**

```html
<form>
  <!-- inputs, labels, buttons go here -->
</form>
```

---

## 2. Form Attributes

### `action`

Defines **where** the form data is sent when submitted (a URL or server endpoint).

```html
<form action="/login"></form>
```

If `action` is left empty, the form submits to the **current page** itself.

### `method`

Defines **how** the data is sent. Two main values:

```html
GET POST
```

#### GET vs POST

**Interview one-liner:**

> "GET **sends data via the URL** and is best for retrieving data (like search), while POST **sends data in the request body** and is used for submitting sensitive or large data like login credentials — because it's more secure and not limited by URL length."

---

## 3. Input Types ⭐⭐⭐⭐⭐

| Type       | Purpose                                      | Browser Validation                              | UseReal-world Use Case                      |
| ---------- | -------------------------------------------- | ----------------------------------------------- | ------------------------------------------- |
| `text`     | Single-line free text                        | None                                            | Name, username                              |
| `password` | Hides typed characters                       | None                                            | Login password field                        |
| `email`    | Email address                                | Checks for valid email format (`@`, domain)     | Signup, login forms                         |
| `number`   | Numeric input only                           | Rejects non-numeric characters                  | Age, quantity                               |
| `date`     | Date picker                                  | Ensures valid date format                       | Date of birth, booking date                 |
| `tel`      | Phone number                                 | No strict validation (pattern can be added)     | Contact number field                        |
| `url`      | Website link                                 | Checks for valid URL format                     | Portfolio link, website field               |
| `search`   | Search box                                   | None (adds a clear "X" button in some browsers) | Search bars                                 |
| `checkbox` | Multiple selection (on/off)                  | None                                            | Terms & conditions, multi-select options    |
| `radio`    | Single selection from a group                | None                                            | Gender selection, single choice questions   |
| `file`     | File upload                                  | None (can restrict type via `accept`)           | Resume upload, profile picture              |
| `range`    | Slider between min/max                       | None                                            | Volume control, price range filter          |
| `color`    | Color picker                                 | None                                            | Theme customization                         |
| `hidden`   | Invisible field, not shown to user           | None                                            | Storing IDs, tokens sent with form silently |
| `submit`   | Submits the form                             | —                                               | Login button, submit form                   |
| `reset`    | Clears all form fields                       | —                                               | Reset form button                           |
| `button`   | Generic clickable button (no default action) | —                                               | Custom JS-triggered actions                 |

```html
<input type="email" placeholder="Enter email" />
<input type="password" placeholder="Enter password" />
<input type="range" min="0" max="100" />
<input type="hidden" name="userId" value="123" />
```

---

## 4. Label ⭐⭐⭐⭐⭐

Always associate a `<label>` with its `<input>` using matching `for` and `id`.

```html
<label for="email">Email</label>
<input id="email" type="email" />
```


```html
<label for="terms">Accept Terms</label>
<input type="checkbox" id="terms" />
```

---

## 5. Placeholder vs Label ⭐ Interview Favorite

### Placeholder

```html
<input placeholder="Enter Email" />
```

- Grey hint text **inside** the input box
- **Disappears** once user starts typing


### Label

```html
<label>Email</label> <input type="email" />
```

- Persistent text **outside/beside** the input
- Always visible, even after typing


---

## 6. Select (Dropdown)

```html
<select>
  <option>India</option>
  <option>USA</option>
</select>
```

### Key attributes

**`selected`** — Pre-selects an option by default.

```html
<select>
  <option selected>India</option>
  <option>USA</option>
</select>
```

**`disabled`** — Makes an option (or the whole select) unselectable.

```html
<select>
  <option disabled>India (Out of Stock)</option>
  <option>USA</option>
</select>
```

**`multiple`** — Allows selecting more than one option (usually shown as a list box, user can Ctrl+Click to select multiple).

```html
<select multiple>
  <option>India</option>
  <option>USA</option>
  <option>UK</option>
</select>
```

---

## 7. Radio Button

```html
<input type="radio" name="gender" value="male" /> Male
<input type="radio" name="gender" value="female" /> Female
```

### Important Rule

**All radio buttons in the same group MUST share the same `name`** — this is what tells the browser they're mutually exclusive (selecting one deselects the others in that group).

```html
<!-- Correct: same name = grouped together, only one selectable -->
<input type="radio" name="gender" value="male" /> Male
<input type="radio" name="gender" value="female" /> Female

<!-- Wrong: different names = not grouped, both can be selected -->
<input type="radio" name="gender1" /> Male
<input type="radio" name="gender2" /> Female
```

---

## 8. Checkbox

```html
<input type="checkbox" /> I agree to terms
```

### Checkbox vs Radio


**Interview one-liner:**

> "Checkbox allows multiple selections independently, while radio buttons allow only one selection within a group — enforced by sharing the same `name` attribute."

---

## 9. Textarea

```html
<textarea rows="4" cols="30"></textarea>
```

**Used for multi-line text input**, such as:

- Feedback / reviews
- Address
- Description / comments

**Common attributes:** `rows`, `cols`, `placeholder`, `maxlength`, `required`

```html
<label for="feedback">Feedback</label>
<textarea
  id="feedback"
  rows="5"
  placeholder="Tell us your thoughts..."
></textarea>
```

---

## 10. Button Types

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Click Me</button>
```

| Type     | Behavior                                                                        |
| -------- | ------------------------------------------------------------------------------- |
| `submit` | Submits the form data to the `action` URL                                       |
| `reset`  | Clears all fields back to their default values                                  |
| `button` | Does nothing by default — used purely for custom JavaScript actions (`onclick`) |

 
---

## HTML Validation ⭐⭐⭐⭐⭐

| Attribute      | Example                       | Explanation                                                                 |
| -------------- | ----------------------------- | --------------------------------------------------------------------------- |
| `required`     | `<input required>`            | Field must be filled before the form can submit                             |
| `minlength`    | `<input minlength="6">`       | Minimum number of characters allowed                                        |
| `maxlength`    | `<input maxlength="20">`      | Maximum number of characters allowed                                        |
| `pattern`      | `<input pattern="[A-Za-z]+">` | Custom regex — only letters allowed in this example                         |
| `min`          | `<input min="1">`             | Minimum numeric/date value allowed                                          |
| `max`          | `<input max="100">`           | Maximum numeric/date value allowed                                          |
| `readonly`     | `<input readonly>`            | Field is visible and focusable, but value **cannot be changed**             |
| `disabled`     | `<input disabled>`            | Field is greyed out, **not focusable**, and **not submitted** with the form |
| `autocomplete` | `<input autocomplete="off">`  | Turns off browser's auto-suggestions for that field                         |



---


## Interview Questions & Answers

### 1. Difference between GET and POST?

> GET sends data via the URL as query parameters and is used for retrieving data (like search/filter) — it's visible, cacheable, and has size limits. POST sends data in the request body, making it more secure and suitable for sensitive operations like login, signup, or payments, with no significant size restriction.

### 2. Why use `label`?

> Labels improve accessibility (screen readers announce them), improve UX by clearly describing each field, and clicking a label focuses/activates its linked input — especially helpful for small elements like checkboxes and radio buttons.

### 3. Difference between checkbox and radio?

> Checkboxes allow multiple selections independently, while radio buttons allow only one selection within a group — enforced by giving all related radios the same `name` attribute.

### 4. Why use `required`?

> It's a built-in HTML5 validation attribute that prevents form submission until the field is filled, giving instant feedback to the user without needing JavaScript.

### 5. Placeholder vs Label?

> Placeholder is temporary hint text inside the input that disappears once typing starts, while label is a persistent, accessible description of the field that remains visible. Placeholder should never replace a label because it hurts accessibility and users lose context once they start typing.

### 6. Difference between readonly and disabled?

> `readonly` fields can still be focused and their value is submitted with the form, just not editable. `disabled` fields can't be focused at all, and their data is excluded from form submission entirely.

### 7. Why use the `name` attribute?

> The `name` attribute is the key used to identify each field's data when the form is submitted — without it, the input's value won't be sent to the server at all, since the server/backend reads form data as name-value pairs.

### 8. Difference between submit and button?

> `type="submit"` triggers the form's default submission behavior (sends data to the `action` URL), while `type="button"` has no default behavior and only does something when JavaScript is explicitly attached to it (like an `onclick` handler).

### 9. What happens when a form submits?

> The browser collects all the input values (using their `name` attributes as keys), then sends that data to the URL specified in `action`, using the HTTP method specified in `method` (GET or POST). If using GET, data is appended to the URL; if POST, it's sent in the request body. The page then either reloads with the server's response or, in modern apps (like React), the default submission is prevented via JavaScript (`e.preventDefault()`) and handled asynchronously instead (e.g., via an API call).

### 10. Client-side vs Server-side validation?

> Client-side validation happens in the browser (HTML attributes like `required`, `pattern`, or JavaScript) — it's fast and gives immediate feedback, but it can be bypassed by disabling JavaScript or using tools like Postman. Server-side validation happens on the backend before processing/storing data — it's essential for security since it cannot be bypassed by the user, and should always be implemented even if client-side validation already exists.

---
