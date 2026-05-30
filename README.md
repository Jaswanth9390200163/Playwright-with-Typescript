# 🎭 Playwright with TypeScript - Automation Framework

A comprehensive end-to-end testing framework built with **Playwright** and **TypeScript**, covering UI testing, API testing, and various automation concepts.

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📋 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running Tests](#-running-tests)
- [Reporting](#-reporting)
- [Key Concepts Covered](#-key-concepts-covered)

---

## ✨ Features

- ✅ **Page Object Model (POM)** architecture
- ✅ **UI Testing** with multiple locator strategies
- ✅ **API Testing** (GET, POST, PUT, PATCH, DELETE)
- ✅ **API Mocking** & Network Interception
- ✅ **Data-Driven Testing** (JSON, CSV, Excel)
- ✅ **Cross-Browser Testing** (Chromium, Firefox, WebKit)
- ✅ **Parallel Test Execution**
- ✅ **Allure Reporting** integration
- ✅ **CI/CD** with GitHub Actions
- ✅ **Environment Variables** support

---

## 📁 Project Structure

```
├── src/
│   ├── pages/              # Page Object Model classes
│   │   ├── HomePage.ts
│   │   ├── LoginPage.ts
│   │   ├── ProfilePage.ts
│   │   ├── ResultPage.ts
│   │   └── PatchesPage.ts
│   └── utils/
│       └── API_Helper.ts   # API utility functions
├── tests/
│   ├── api/                # API test specifications
│   │   ├── get_api_request.spec.ts
│   │   ├── post_request_static.spec.ts
│   │   ├── post_request_dynamic.spec.ts
│   │   ├── put_api_request.spec.ts
│   │   ├── delete_api_request.spec.ts
│   │   ├── mock_api_request.spec.ts
│   │   ├── mock_api_response.spec.ts
│   │   └── mock_from_har.spec.ts
│   └── *.spec.ts           # UI test specifications
├── test-data/
│   ├── api_requests/       # API request payloads (JSON)
│   ├── data.json           # Test data (JSON)
│   ├── data.csv            # Test data (CSV)
│   └── data.xlsx           # Test data (Excel)
├── playwright.config.ts    # Playwright configuration
├── .env                    # Environment variables
└── .github/workflows/      # CI/CD pipeline
```

---

## 🔧 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jaswanth9390200163/Playwright-with-Typescript.git
   cd Playwright-with-Typescript
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   GOOGLE_URL=https://www.google.com
   BASE_API_URL=https://restful-booker.herokuapp.com
   ```

---

## ▶️ Running Tests

### Run all tests
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test tests/firstTest.spec.ts
```

### Run tests in headed mode
```bash
npx playwright test --headed
```

### Run tests on specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests with specific tag
```bash
npx playwright test --grep "@sanity"
npx playwright test --grep "@regression"
```

### Run tests in UI mode
```bash
npx playwright test --ui
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Generate test code
```bash
npx playwright codegen https://example.com
```

---

## 📊 Reporting

### Playwright HTML Report
```bash
npx playwright show-report
```

### Allure Report
```bash
# Generate report
npx allure generate allure-results --clean

# Open report
npx allure open
```

---

## 📚 Key Concepts Covered

| Category | Topics |
|----------|--------|
| **Locators** | CSS selectors, XPath, Role-based, Text-based, Test ID |
| **Actions** | Click, Fill, Select, Hover, Drag & Drop, Keyboard actions |
| **Assertions** | Auto-retrying assertions, Soft assertions |
| **Page Objects** | POM architecture with TypeScript classes |
| **Test Organization** | Hooks, Grouping, Tags, Annotations |
| **Data-Driven** | JSON, CSV, Excel parameterization |
| **Special Elements** | Dialogs, iFrames, Tabs, Popups, Date pickers |
| **File Handling** | Upload, Download |
| **API Testing** | REST API testing with request fixture |
| **Mocking** | Mock requests, responses, HAR files |
| **Debugging** | Screenshots, Traces, Videos |
| **Parallel Execution** | Workers, Serial/Parallel modes |

---

## 🔗 Useful Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author

**Jaswanth Alapati**

- GitHub: [@Jaswanth9390200163](https://github.com/Jaswanth9390200163)

---

⭐ If you found this helpful, please give it a star!
