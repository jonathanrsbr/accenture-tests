# Cypress Accenture

Automated UI and API testing project using Cypress, Cucumber (BDD), and Page Object Model to validate features on [demoqa.com](https://demoqa.com/).

---

## 🧠 About the Project

This repository demonstrates modern test automation practices, including:

- Writing scenarios in Gherkin (Cucumber)
- Structuring tests with the Page Object Model (POM)
- UI and REST API testing
- Custom Cypress commands for maintainability
- Automated flows for forms, tables, file uploads, and more

---

## 📋 Covered Scenarios

- Validation of forms and dynamic data tables
- Interaction testing (drag & drop, progress bars, modal windows)
- File upload handling and DOM element manipulation
- API request interception and response validation
- Comprehensive flow coverage including edge cases and user interactions

---

## ✅ Prerequisites

- [Node.js](https://nodejs.org/) (recommended v18+)
- npm

---

## ⚙️ Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-user/cypress-accenture.git
   cd cypress-accenture
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## 🧪 Running the Tests

### Headless mode (CLI):
```bash
npm run cypress:run
```

### Interactive mode (Cypress UI):
```bash
npm run cypress:open
```

---

## 📁 Project Structure

```
cypress/
├── e2e/                 # Feature files and test scenarios (Gherkin)
│   ├── features/
│   │   ├── api/
│   │   └── ui/
├── fixtures/            # Test data and mocks
├── support/
│   ├── page_objects/    # Page Object Model implementations
│   ├── step_definitions/# Step definitions for BDD scenarios
│   └── front_commands.js# Custom Cypress commands
```

---

## 🛠️ Technologies & Tools

- **Cypress** for E2E and API automation
- **Cucumber** for BDD scenario writing
- **@badeball/cypress-cucumber-preprocessor** for Cypress + Cucumber integration
- **Page Object Model** for test organization

---

## 🙋‍♂️ Author

Made with dedication by [Jonathan Sales](https://www.linkedin.com/in/jonathan-sales-44580b1b3/).

---
