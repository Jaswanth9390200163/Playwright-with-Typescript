# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filedownload.spec.ts >> file upload
- Location: tests\filedownload.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "download"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - link "Logout":
    - /url: "#"
  - text:    
  - generic [ref=e2]:
    - generic [ref=e3]: Welcome to Testers Talk!
    - generic [ref=e4]:
      - generic [ref=e5]:
        - button "Practice Page" [ref=e6] [cursor=pointer]
        - button "Playwright TypeScript Course" [ref=e7] [cursor=pointer]
        - button "Playwright JavaScript Course" [ref=e8] [cursor=pointer]
        - button "Cypress Course" [ref=e9] [cursor=pointer]
        - button "JavaScript Course" [ref=e10] [cursor=pointer]
        - button "Postman Course" [ref=e11] [cursor=pointer]
        - button "Rest Assured Course" [ref=e12] [cursor=pointer]
      - generic [ref=e13]:
        - generic [ref=e14]:
          - generic [ref=e15]:
            - generic [ref=e16]: "Name: *"
            - 'textbox "Name: *" [ref=e17]':
              - /placeholder: Employee Name
          - generic [ref=e18]:
            - generic [ref=e19]: "Department: *"
            - 'textbox "Department: *" [ref=e20]':
              - /placeholder: Department
          - generic [ref=e21]:
            - generic [ref=e22]: "Date of Birth: *"
            - 'textbox "Date of Birth: *" [ref=e23]'
          - generic [ref=e24]:
            - generic [ref=e25]: "Gender: *"
            - 'combobox "Gender: *" [ref=e26]':
              - option "Male" [selected]
              - option "Female"
        - generic [ref=e27]:
          - generic [ref=e28]:
            - generic [ref=e29]:
              - generic [ref=e30]: "Checkboxes:"
              - generic [ref=e31]:
                - generic [ref=e32] [cursor=pointer]:
                  - checkbox "Playwright" [ref=e33]
                  - text: Playwright
                - generic [ref=e34] [cursor=pointer]:
                  - checkbox "Cypress" [ref=e35]
                  - text: Cypress
                - generic [ref=e36] [cursor=pointer]:
                  - checkbox "Selenium" [ref=e37]
                  - text: Selenium
                - generic [ref=e38] [cursor=pointer]:
                  - checkbox "JavaScript" [ref=e39]
                  - text: JavaScript
                - generic [ref=e40] [cursor=pointer]:
                  - checkbox "Postman" [ref=e41]
                  - text: Postman
                - generic [ref=e42] [cursor=pointer]:
                  - checkbox "Rest Assured" [ref=e43]
                  - text: Rest Assured
                - generic [ref=e44] [cursor=pointer]:
                  - checkbox "API Testing" [ref=e45]
                  - text: API Testing
            - generic [ref=e46]:
              - generic [ref=e47]: "Radio Buttons:"
              - generic [ref=e48]:
                - generic [ref=e49] [cursor=pointer]:
                  - radio "India" [checked] [ref=e50]
                  - text: India
                - generic [ref=e51] [cursor=pointer]:
                  - radio "United States" [ref=e52]
                  - text: United States
                - generic [ref=e53] [cursor=pointer]:
                  - radio "Japan" [ref=e54]
                  - text: Japan
                - generic [ref=e55] [cursor=pointer]:
                  - radio "Russia" [ref=e56]
                  - text: Russia
            - generic [ref=e57]:
              - generic [ref=e58]: "Links:"
              - generic [ref=e59]:
                - link " Visit Testers Talk YouTube Channel" [ref=e60] [cursor=pointer]:
                  - /url: https://www.youtube.com/@testerstalk
                  - generic [ref=e61]: 
                  - text: Visit Testers Talk YouTube Channel
                - link " Join LinkedIn Group" [ref=e62] [cursor=pointer]:
                  - /url: https://www.linkedin.com/groups/10393547/
                  - generic [ref=e63]: 
                  - text: Join LinkedIn Group
                - link " Join Facebook Group" [ref=e64] [cursor=pointer]:
                  - /url: https://www.facebook.com/groups/247868358996762
                  - generic [ref=e65]: 
                  - text: Join Facebook Group
                - link " Connect on LinkedIn" [ref=e66] [cursor=pointer]:
                  - /url: https://www.linkedin.com/in/bakkappa-n
                  - generic [ref=e67]: 
                  - text: Connect on LinkedIn
            - generic [ref=e68]:
              - generic [ref=e69]: "Alerts Popups:"
              - generic [ref=e70]:
                - button "Simple" [ref=e71] [cursor=pointer]
                - button "Confirm" [ref=e72] [cursor=pointer]
                - button "Prompt" [ref=e73] [cursor=pointer]
            - generic [ref=e74]:
              - generic [ref=e75]: "Iframe:"
              - iframe [ref=e77]:
                - generic [ref=f2e2]:
                  - button "Playwright TypeScript Full Course" [ref=f2e3] [cursor=pointer]
                  - button "Playwright JavaScript Full Course" [ref=f2e4] [cursor=pointer]
                  - button "Cypress Full Course" [ref=f2e5] [cursor=pointer]
                  - button "JavaScript For Beginners" [ref=f2e6] [cursor=pointer]
                  - button "API Testing Full Course" [ref=f2e7] [cursor=pointer]
          - generic [ref=e78]:
            - generic [ref=e79]:
              - generic [ref=e80]: "Upload & Download File:"
              - generic [ref=e81]: "Select file:"
              - button "Select file:" [ref=e82]
              - paragraph [ref=e83]: No file selected
            - generic [ref=e84]:
              - generic [ref=e85]: "Downloads:"
              - generic [ref=e86]:
                - link "Download Excel" [active] [ref=e87] [cursor=pointer]:
                  - /url: Downloads/TestersTalk_Excel.xlsx
                - link "Download Word" [ref=e88] [cursor=pointer]:
                  - /url: Downloads/TestersTalk_WordDoc.docx
                - link "Download XML" [ref=e89] [cursor=pointer]:
                  - /url: Downloads/TestersTalk_XML.xml
                - link "Download PDF" [ref=e90] [cursor=pointer]:
                  - /url: Downloads/TestersTalk_PDF.pdf
            - generic [ref=e91]:
              - generic [ref=e92]: "Drag and Drop:"
              - generic [ref=e93]:
                - generic [ref=e94]: Drag me
                - generic [ref=e95]: Drop here
            - generic [ref=e96]:
              - generic [ref=e97]: "Mouse Hover:"
              - link "Hover this link" [ref=e99] [cursor=pointer]:
                - /url: "#"
            - generic [ref=e100]:
              - generic [ref=e101]: "Auto Suggestions:"
              - textbox "Search courses..." [ref=e103]
        - button "Save" [ref=e105] [cursor=pointer]
        - generic [ref=e106]:
          - heading "Latest 10 Records" [level=3] [ref=e107]
          - button "Clear All Rows" [ref=e108] [cursor=pointer]
        - table [ref=e109]:
          - rowgroup [ref=e110]:
            - row "Name Department DOB Gender Technologies Country" [ref=e111]:
              - columnheader "Name" [ref=e112]
              - columnheader "Department" [ref=e113]
              - columnheader "DOB" [ref=e114]
              - columnheader "Gender" [ref=e115]
              - columnheader "Technologies" [ref=e116]
              - columnheader "Country" [ref=e117]
          - rowgroup
    - generic [ref=e118]:
      - heading "Scrolling - Horizontal & Vertical" [level=2] [ref=e119]
      - table [ref=e120]:
        - rowgroup [ref=e121]:
          - row "Course Title Preview Watch on YouTube" [ref=e122]:
            - columnheader "Course Title" [ref=e123]
            - columnheader "Preview" [ref=e124]
            - columnheader "Watch on YouTube" [ref=e125]
        - rowgroup [ref=e126]:
          - row "Playwright TypeScript Course Playwright TypeScript Course Watch" [ref=e127]:
            - cell "Playwright TypeScript Course" [ref=e128]
            - cell "Playwright TypeScript Course" [ref=e129]:
              - iframe [ref=e130]:
                - generic "YouTube Video Player" [ref=f9e3]:
                  - generic [ref=f9e6]:
                    - generic:
                      - link "figma.com This link opens in new tab" [ref=f9e7] [cursor=pointer]:
                        - generic [ref=f9e8]: figma.com
                      - generic [ref=f9e9]:
                        - generic [ref=f9e11]: Sponsored 1 of 2 ·
                        - generic [ref=f9e13]: 0:06
                        - button "My Ad Center" [ref=f9e15] [cursor=pointer]:
                          - generic [ref=f9e16]:
                            - img
                      - button "Skip" [ref=f9e18] [cursor=pointer]:
                        - generic [ref=f9e19]: Skip
                        - generic [ref=f9e20]:
                          - img
            - cell "Watch" [ref=e131]:
              - link "Watch":
                - /url: https://youtu.be/788GvvcfwTY?feature=shared
          - row "Playwright JavaScript Course Playwright JavaScript Course Watch" [ref=e132]:
            - cell "Playwright JavaScript Course" [ref=e133]
            - cell "Playwright JavaScript Course" [ref=e134]:
              - iframe [ref=e135]:
                - generic "YouTube Video Player" [ref=f10e3]:
                  - generic [ref=f10e6]:
                    - generic:
                      - link "figma.com This link opens in new tab" [ref=f10e7] [cursor=pointer]:
                        - generic [ref=f10e8]: figma.com
                      - generic [ref=f10e9]:
                        - generic [ref=f10e11]: Sponsored 1 of 2 ·
                        - generic [ref=f10e13]: 0:06
                        - button "My Ad Center" [ref=f10e15] [cursor=pointer]:
                          - generic [ref=f10e16]:
                            - img
                      - button "Skip" [ref=f10e18] [cursor=pointer]:
                        - generic [ref=f10e19]: Skip
                        - generic [ref=f10e20]:
                          - img
            - cell "Watch" [ref=e136]:
              - link "Watch":
                - /url: https://youtu.be/2poXBtifpzA?feature=shared
          - row "Cypress Course Cypress Course Watch" [ref=e137]:
            - cell "Cypress Course" [ref=e138]
            - cell "Cypress Course" [ref=e139]:
              - iframe [ref=e140]:
                - generic [active] [ref=f11e1]:
                  - generic "YouTube Video Player" [ref=f11e3]
                  - generic [ref=f11e6]:
                    - generic:
                      - generic:
                        - button "Show player controls" [ref=f11e7] [cursor=pointer]
                        - generic [ref=f11e12]:
                          - generic: Testers Talk
                          - generic: 29.9K subscribers
            - cell "Watch" [ref=e141]:
              - link "Watch":
                - /url: https://youtu.be/oJV5whmzfZI?feature=shared
          - row "JavaScript For Beginners JavaScript For Beginners Watch" [ref=e142]:
            - cell "JavaScript For Beginners" [ref=e143]
            - cell "JavaScript For Beginners" [ref=e144]:
              - iframe [ref=e145]:
                - generic [active] [ref=f12e1]:
                  - generic "YouTube Video Player" [ref=f12e3]
                  - generic [ref=f12e6]:
                    - generic:
                      - generic:
                        - button "Show player controls" [ref=f12e7] [cursor=pointer]
                        - generic [ref=f12e12]:
                          - generic: Testers Talk
                          - generic: 29.9K subscribers
            - cell "Watch" [ref=e146]:
              - link "Watch":
                - /url: https://youtu.be/ACUMZ3OkExQ?feature=shared
          - row "Postman Course Postman Course Watch" [ref=e147]:
            - cell "Postman Course" [ref=e148]
            - cell "Postman Course" [ref=e149]:
              - iframe [ref=e150]:
                - generic [active] [ref=f13e1]:
                  - generic "YouTube Video Player" [ref=f13e3]
                  - generic [ref=f13e6]:
                    - generic:
                      - generic:
                        - button "Show player controls" [ref=f13e7] [cursor=pointer]
                        - generic [ref=f13e12]:
                          - generic: Testers Talk
                          - generic: 29.9K subscribers
            - cell "Watch" [ref=e151]:
              - link "Watch":
                - /url: https://youtu.be/QKBa8lt5Wfo?feature=shared
          - row "Rest Assured Course Rest Assured Course Watch" [ref=e152]:
            - cell "Rest Assured Course" [ref=e153]
            - cell "Rest Assured Course" [ref=e154]:
              - iframe [ref=e155]:
                - generic [active] [ref=f14e1]:
                  - generic "YouTube Video Player" [ref=f14e3]
                  - generic [ref=f14e6]:
                    - generic:
                      - generic:
                        - button "Show player controls" [ref=f14e7] [cursor=pointer]
                        - generic [ref=f14e12]:
                          - generic: Testers Talk
                          - generic: 29.9K subscribers
            - cell "Watch" [ref=e156]:
              - link "Watch":
                - /url: https://youtu.be/o9KJhGHl49M?feature=shared
          - row "Specflow with Selenium Course Specflow with Selenium Course Watch" [ref=e157]:
            - cell "Specflow with Selenium Course" [ref=e158]
            - cell "Specflow with Selenium Course" [ref=e159]:
              - iframe [ref=e160]:
                - generic [active] [ref=f15e1]:
                  - generic "YouTube Video Player" [ref=f15e3]
                  - generic [ref=f15e6]:
                    - generic:
                      - generic:
                        - button "Show player controls" [ref=f15e7] [cursor=pointer]
                        - generic [ref=f15e12]:
                          - generic: Testers Talk
                          - generic: 29.9K subscribers
            - cell "Watch" [ref=e161]:
              - link "Watch":
                - /url: https://youtu.be/7xPcalwU76c?feature=shared
  - generic [ref=e162]:
    - link "Donate Now" [ref=e163] [cursor=pointer]:
      - /url: Donate-Now.html
    - text: "|"
    - link "Test API's" [ref=e164] [cursor=pointer]:
      - /url: API-Test-Playground.html
    - text: "|"
    - link "Medium Articles" [ref=e165] [cursor=pointer]:
      - /url: Testers-Talk-Medium-Articles.html
```

# Test source

```ts
  1  | import { expect, test, Locator } from "@playwright/test";
  2  | import path from "node:path";
  3  | 
  4  | 
  5  | test("file upload", async({page})=> {
  6  | 
  7  | 
  8  |     await page.goto("https://bakkappan.github.io/Testers-Talk-Practice-Site");
  9  | 
  10 |     await page.getByPlaceholder('Username').fill('TestersTalk');
  11 | 
  12 |     await page.getByPlaceholder('Password').fill('TestersTalk');
  13 | 
  14 |     await page.getByRole('button', {name : 'Login'}).click();
  15 | 
  16 |     await page.waitForTimeout(3000);
  17 | 
  18 |     //single file download
  19 | 
  20 |     const[download] = await Promise.all([
  21 | 
> 22 |         await page.waitForEvent('download'),
     |                    ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
  23 |         page.getByRole('link', {name : 'Download Excel' }).click()
  24 | 
  25 |     ])
  26 | 
  27 |     console.log("downloaded file name is ", +download.suggestedFilename());
  28 | 
  29 |     await download.saveAs("./downloads/Jaswanth.xlsx");
  30 |     
  31 |     await page.waitForTimeout(3000);
  32 | })
```