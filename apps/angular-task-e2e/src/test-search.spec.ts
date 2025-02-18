import { test, expect } from '@playwright/test';
import { User } from 'models/user.model';

test('has details page route', async ({ page }) => {

//Add test user to the response
    await page.route('**/*jsonplaceholder.typicode.com/users', async route => {
        const response = await page.request.fetch(route.request());
        const responseBody = await response.json();

        // Extract and modify the response
        let modifiedResponse = responseBody.map((user: User) => user.name);
        modifiedResponse.push({
            id: 0,
            name: 'test user',
            username: 'test_user',
            email: 'test@user.com',
            address: '123 nowhere ave',
            phone: '1111111111',
            website: 'www.crexic.om',
            company: {
                name: 'Crexi',
                catchPhrase: 'Your next deal starts here',
                bs: '',
            }
        });
        await route.fulfill({
            contentType: 'application/json',
            body: JSON.stringify(modifiedResponse),
        });
    });

    //check test user population
    await page.goto('/');
    const inputSearch = page.locator('.search-container input');
    await inputSearch.scrollIntoViewIfNeeded();
    await inputSearch.type("glenna reichert");
    const detailsSelector = page.locator('.users-list crx-user-card .card');
    await detailsSelector.click();

    // Expect test user details page to contain user suffix
    expect(document.location.pathname).toContain('users/0');

});
