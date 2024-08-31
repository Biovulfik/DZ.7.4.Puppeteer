let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitFor(3000); // Ожидание загрузки страницы после клика
    await page.waitForSelector("h1");
    const title2 = await page.title();
    const expected = "GitHub: Where the world builds software · GitHub";
    expect(title2).toEqual(expected);
  }, 5000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    const expected = "#start-of-content";
    expect(actual).toEqual(expected);
  }, 5000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    const expected = "Sign up for free";
    expect(actual).toContain(expected);
  }, 5000);
});



test("Title Explore GitHub Actions", async () => {
  await page.goto("https://github.com/marketplace?type=actions");
  const title = await page.title();
  const expected = "Marketplace · GitHub";
  expect(title).toEqual(expected);
}, 5000);

test("Сhecking the header DevOps", async () => {
  await page.goto("https://github.com/resources/articles/devops");
  const title = await page.title();
  const expected = "DevOps · GitHub";
  expect(title).toEqual(expected);
}, 5000);

test("Сhecking the header GitHub", async () => {
  await page.goto("https://github.com");
  const title = await page.title();
  const expected = "GitHub: Let’s build from here · GitHub";
  expect(title).toEqual(expected);
}, 5000);