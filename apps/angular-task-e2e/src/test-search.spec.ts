import { test, expect } from '@playwright/test';

test('has details page route', async ({ page }) => {

    await page.goto('/');
    const inputSearch = page.locator('.search-container input');
    await inputSearch.scrollIntoViewIfNeeded();
    await inputSearch.type("glenna reichert");
    const detailsSelector = page.locator('.users-list crx-user-card .card');
    await detailsSelector.click();
    
    // Expect details page
    expect (document.location.pathname).toContain('users/9');
    
});
