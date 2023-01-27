import { journey, step } from "@elastic/synthetics";

journey(' test landing page of Google', ({ page }) => {
    step(" visit landing page of google", async() => {
        await page.goto("www.google.com");
    });
}
)