import {expect,test,Locator} from "@playwright/test";


test("xpathlocators", async ({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");


    //relative xpath locator

    const xpathlogo:Locator = page.locator("xpath=//img[@alt='Tricentis Demo Web Shop']");

    await expect(xpathlogo).toBeVisible();


    //contains

    const computersLocator :Locator =  page.locator("//h2/a[contains(@href,'computer')]");

    const computersCount : number = await computersLocator.count();

    console.log("number of computer products in the page are : ", computersCount);

    expect(computersCount).toBeGreaterThanOrEqual(4);

    console.log("First text content ",await computersLocator.first().textContent());

    console.log("Last text content ",await computersLocator.last().textContent());

    console.log("nth text content ",await computersLocator.nth(2).textContent());       // nth index starts from 0


    let computersList:string[] = await computersLocator.allTextContents();

    for(let computer of computersList) {
        console.log("product", computer);
    }

    //last

    const lastItem:Locator = page.locator("//div[@class='column follow-us']//ul/li[last()]");

    console.log("last titem text is : ",await lastItem.textContent());

    expect(lastItem).toHaveText("Google+");


    //position

    const position = page.locator("//div[@class='column follow-us']//ul/li[position()=4]");  //index starts from 1

    const positionItem = await position.textContent();

    expect(positionItem).toBe("YouTube");


    //if we want to try same with getByRole

    const googleLink:Locator = page.getByRole("link", {name: 'Google+'});

    await expect(googleLink).toBeVisible();

    //xpath axes

    //self

    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    const self : Locator = page.locator("//td[text()='Germany']/self::td");

    await expect(self).toHaveText('Germany');


    //parent

    const parent: Locator = page.locator("//td[text()='Germany']/parent::tr");

    console.log(await parent.textContent());


    /*
    await expect(parent).toContainText("Alfreds Futterkiste");

    await expect(parent).toContainText("Maria Anders");

    await expect(parent).toContainText("Germany");
    */

    await expect(parent).toContainText("Alfreds Futterkiste Maria Anders Germany");


    //child

    const child:Locator = page.locator("//table[@id='customers']//tr[2]/child::td");

    await expect(child).toHaveCount(3);

    //ancestor

    const ancestor:Locator = page.locator("//td[text()='Germany']/ancestor::table");

    await expect(ancestor).toHaveAttribute('id','customers');

    //descendant
    const descendant:Locator = page.locator("//table[@id='customers']/descendant::td");

    await expect(descendant).toHaveCount(18);

    //following

    const following:Locator = page.locator("//td[text()='Germany']/following::td[1]");

    await expect(following).toHaveText("Centro comercial Moctezuma");

    //following-sibling

    const followingsibling:Locator = page.locator("//td[text()='Germany']/following-sibling::td");

    await expect(followingsibling).toHaveCount(0);

    
    const followingsibling1:Locator = page.locator("//td[text()='Maria Anders']/following-sibling::td");

    await expect(followingsibling1).toHaveCount(1);

    await expect(followingsibling1).toHaveText("Germany");


    //preceeding

    const preceeding:Locator = page.locator("//td[text()='Germany']/preceding::td[1]");

    await expect(preceeding).toHaveCount(1);

    await expect(preceeding).toHaveText("Maria Anders");


    //preceeding-sibling

    const preceedingsibling:Locator = page.locator("//td[text()='Germany']/preceding-sibling::td");

    await expect(preceedingsibling).toHaveCount(2);

    await expect(preceedingsibling.nth(0)).toHaveText("Alfreds Futterkiste");

    await expect(preceedingsibling.nth(1)).toHaveText("Maria Anders");
})


