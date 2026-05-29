import {Page, expect, Locator} from '@playwright/test';


export class PatchesPage {

    readonly page : Page;
    readonly patchesTab : Locator;
    readonly deviceVulnerability : Locator;
    readonly paginationicon : Locator;
    //readonly selectsize : Locator;
    readonly selectsize: (size: string) => Locator;
    readonly resultsize : Locator;


    //constructor
    constructor(page : Page) {

        this.page = page;
        this.patchesTab = page.getByRole('link', {name : 'Patches'});
        this.deviceVulnerability = page.getByRole('link', {name : 'Device Vulnerability'});
        this.paginationicon = page.locator('.ag-icon-small-down');
        //this.selectsize = page.locator('//span[contains(@class,"ag-select-list-item-text")][text()="500"]');
        // dynamic locator inside constructor
        this.selectsize = (size: string) => page.locator(`//span[contains(@class,"ag-select-list-item-text")][text()="${size}"]`);
        this.resultsize = page.locator('//div[@class="ag-picker-field-display"]');

    }


    //methods
    async navigateToPatchesTab() {

        await this.patchesTab.click();
        await expect(this.deviceVulnerability).toBeVisible({timeout : 10000});
    }

    async changepagination(size : string) {
        await this.paginationicon.first().click();
        //await this.selectsize.click();
        await this.selectsize(size).click();
        const selectedsize : string = await this.resultsize.innerText();
        console.log("selected size is : ", selectedsize);
        expect(selectedsize).toEqual(size);
    }
}