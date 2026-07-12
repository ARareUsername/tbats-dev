import { test, expect } from '@playwright/test';

test.describe('TBATS Landing Page and Sandbox E2E Tests', () => {
  test('Landing page loads and theme toggle works', async ({ page }) => {
    await page.goto('/');

    // Check main title
    await expect(page.locator('h1')).toContainText(/Crafting Digital Experiences/i);

    // Test theme toggle persistence
    const themeBtn = page.locator('button[aria-label*="theme"]');
    await expect(themeBtn.first()).toBeVisible();

    // Toggle theme
    await themeBtn.first().click();
    await page.waitForTimeout(500); // Wait for transition

    // Reload page to verify persistence via cookies
    await page.reload();
    const htmlElement = page.locator('html');
    await expect(htmlElement).toHaveClass(/theme-light/);
  });

  test('Anchor navigation links function', async ({ page }) => {
    await page.goto('/');

    // Click on Services link
    const servicesLink = page.locator('a[href="#services"]').first();
    await servicesLink.click();

    // URL hash should update
    await expect(page).toHaveURL(/#services/);
  });

  test('Contact form submits and triggers honeypot/success state', async ({ page }) => {
    await page.goto('/');

    // Fill out form fields
    await page.fill('#user_name', 'Jane Doe');
    await page.fill('#user_email', 'jane@example.com');
    await page.selectOption('#project_budget', { value: '₱49,000 (Growth)' });
    await page.fill('#project_desc', 'E-Commerce storefront custom rebuild.');

    // Submit form
    await page.click('button[type="submit"]:has-text("Start a Project")');

    // Verify success overlay appears
    await expect(page.locator('h3:has-text("Request Sent")')).toBeVisible();
  });

  test('Demo sandbox workflow with presets and cart checkout', async ({ page }) => {
    // Go directly to demo sandbox for e-commerce
    await page.goto('/demo/e-commerce');

    // Check loading/ready state
    await expect(page.locator('h1')).toContainText(/E-Commerce Store/i);

    // Add product to cart
    const addBtn = page.locator('button.p-card-add-btn:has-text("Add to Bag")').first();
    await expect(addBtn).toBeVisible();
    await addBtn.click();

    // Cart drawer should open
    await expect(page.locator('.p-cart-drawer-container')).toHaveClass(/active/);

    // Proceed to checkout
    await page.click('button.p-cart-checkout-btn:has-text("Proceed to Checkout")');

    // Checkout modal should open and trap focus
    const checkoutModal = page.locator('[role="dialog"][aria-labelledby="checkout-modal-title"]');
    await expect(checkoutModal).toBeVisible();

    // Step 1: Shipping
    await page.fill('input[name="name"]', 'John Smith');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('input[name="address"]', '123 Main St');
    await page.fill('input[name="city"]', 'Cityville');
    await page.fill('input[name="zip"]', '12345');
    await page.fill('input[name="phone"]', '+639123456789');
    await page.click('button:has-text("Next")');

    // Step 2: Payment
    await page.fill('input[name="number"]', '1234567812345678');
    await page.fill('input[name="expiry"]', '12/28');
    await page.fill('input[name="cvc"]', '123');
    await page.click('button:has-text("Next")');

    // Step 3: Review / Confirm
    await page.click('button:has-text("Place Order")');

    // Step 4: Success
    await expect(page.locator('h3:has-text("Order Confirmed")')).toBeVisible();
  });

  test('Mobile menu navigation works', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Mobile menu button should be visible
    const menuToggle = page.locator('button[aria-label="Open menu"]');
    await expect(menuToggle).toBeVisible();

    // Open menu
    await menuToggle.click();
    await expect(page.locator('#mobile-nav-menu')).toBeVisible();

    // Close menu
    const closeToggle = page.locator('button[aria-label="Close menu"]');
    await closeToggle.click();
    await expect(page.locator('#mobile-nav-menu')).not.toBeVisible();
  });
});
