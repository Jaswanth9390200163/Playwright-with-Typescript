# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pageObjectModel.spec.ts >> Page Object Model Implementation
- Location: tests\pageObjectModel.spec.ts:10:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]:
        - img [ref=e16]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e23]
  - search [ref=e31]:
    - generic [ref=e33]:
      - generic [ref=e35]:
        - button "Add files and tools" [ref=e38] [cursor=pointer]:
          - img [ref=e40]
        - combobox "Search" [active] [ref=e43]
        - generic [ref=e44]:
          - generic [ref=e45]:
            - button "Search by voice" [ref=e46] [cursor=pointer]:
              - img [ref=e47]
            - button "Search by image" [ref=e49] [cursor=pointer]:
              - img [ref=e50]
          - link "AI Mode" [ref=e52] [cursor=pointer]:
            - generic [ref=e54]:
              - img [ref=e56]
              - generic [ref=e63]: AI Mode
      - generic [ref=e65]:
        - button "Google Search" [ref=e66] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e67] [cursor=pointer]
  - generic [ref=e68]:
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - dialog "Choose Chrome, the browser built by Google":
                      - generic [ref=e77]:
                        - generic [ref=e78]:
                          - generic [ref=e79]: Choose Chrome, the browser built by Google
                          - generic [ref=e80]: Try a fast, secure browser with automatic updates
                          - generic [ref=e81]:
                            - text: By downloading Chrome, you agree to the
                            - link "Google Terms of Service" [ref=e82] [cursor=pointer]:
                              - /url: https://policies.google.com/terms
                            - text: and
                            - link "Chrome and ChromeOS Additional Terms of Service" [ref=e83] [cursor=pointer]:
                              - /url: https://www.google.com/chrome/terms/
                            - text: .
                          - checkbox "Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. Learn more." [ref=e85]:
                            - checkbox "Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. Learn more." [checked] [ref=e86]
                            - generic [ref=e87]:
                              - text: Help make Google Chrome better by automatically sending usage statistics and crash reports to Google.
                              - link "Learn more" [ref=e88] [cursor=pointer]:
                                - /url: https://support.google.com/chrome/answer/96817
                              - text: .
                        - generic [ref=e89]:
                          - button "Do not use Chrome" [ref=e90] [cursor=pointer]:
                            - generic [ref=e92]: Do not use Chrome
                          - button "Download Chrome" [ref=e93] [cursor=pointer]:
                            - generic [ref=e95]: Download Chrome
    - generic [ref=e97]:
      - text: "Google offered in:"
      - link "हिन्दी" [ref=e98] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_WdY8baP5zm1sfOoFMet1hMYtwQE%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwj9l_HI5dSUAxX8jK8BHbjdMQgQ2ZgBCCY
      - link "বাংলা" [ref=e99] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_WdY8baP5zm1sfOoFMet1hMYtwQE%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwj9l_HI5dSUAxX8jK8BHbjdMQgQ2ZgBCCc
      - link "తెలుగు" [ref=e100] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_WdY8baP5zm1sfOoFMet1hMYtwQE%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwj9l_HI5dSUAxX8jK8BHbjdMQgQ2ZgBCCg
      - link "मराठी" [ref=e101] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_WdY8baP5zm1sfOoFMet1hMYtwQE%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwj9l_HI5dSUAxX8jK8BHbjdMQgQ2ZgBCCk
      - link "தமிழ்" [ref=e102] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_WdY8baP5zm1sfOoFMet1hMYtwQE%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwj9l_HI5dSUAxX8jK8BHbjdMQgQ2ZgBCCo
      - link "ગુજરાતી" [ref=e103] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_WdY8baP5zm1sfOoFMet1hMYtwQE%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwj9l_HI5dSUAxX8jK8BHbjdMQgQ2ZgBCCs
      - link "ಕನ್ನಡ" [ref=e104] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_WdY8baP5zm1sfOoFMet1hMYtwQE%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwj9l_HI5dSUAxX8jK8BHbjdMQgQ2ZgBCCw
      - link "മലയാളം" [ref=e105] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_WdY8baP5zm1sfOoFMet1hMYtwQE%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwj9l_HI5dSUAxX8jK8BHbjdMQgQ2ZgBCC0
      - link "ਪੰਜਾਬੀ" [ref=e106] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_WdY8baP5zm1sfOoFMet1hMYtwQE%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwj9l_HI5dSUAxX8jK8BHbjdMQgQ2ZgBCC4
  - contentinfo [ref=e108]:
    - generic [ref=e109]: India
    - generic [ref=e110]:
      - generic [ref=e111]:
        - link "Advertising" [ref=e112] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e113] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e114] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e115]:
        - link "Privacy" [ref=e116] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e117] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e121] [cursor=pointer]:
          - generic [ref=e122]: Settings
```

# Test source

```ts
  1  | import { expect, test, Locator, Page } from "@playwright/test";
  2  | 
  3  | import { HomePage } from "../src/pages/Homepage";
  4  | 
  5  | import { ResultPage } from "../src/pages/Resultpage";
  6  | 
  7  | import { ProfilePage } from "../src/pages/ProfilePage";
  8  | 
  9  | 
  10 | test("Page Object Model Implementation", async({page})=> {
  11 | 
  12 | 
  13 |     //create an object for all pages
  14 |     const homepage = new HomePage(page)
  15 |     const resultpage = new ResultPage(page);
  16 |     const profilepage = new ProfilePage(page);
  17 | 
  18 |     //call respective methods from each  page
  19 |     homepage.gotoURL();
  20 |     
> 21 |     await page.waitForTimeout(30000);
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  22 | 
  23 |     homepage.searchWithKeywords('Jaswanth Alapati');
  24 | 
  25 |     resultpage.clickElement();
  26 | 
  27 |     await page.waitForTimeout(3000);
  28 | 
  29 |     profilepage.validateProfileName('Jaswanth Alapati');
  30 | 
  31 |     await page.waitForTimeout(3000);
  32 | 
  33 | 
  34 | })
```