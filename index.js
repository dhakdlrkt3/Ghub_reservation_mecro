const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.gcon.or.kr/visitorInfo');
  page.waitForNavigation()
  // page.click("a.btnPopupWinodwClose");
  // page.click("div.layerPop_area > p.close > a:nth-child(2)");
  // console.log(await page.content())
  // await page.waitForNavigation({waitUntil: 'load'});
  page.click("div#main > div.container > ul.tabmenu > li:nth-child(3) > a");
  await page.waitForNavigation();
  // await page.waitForNavigation({waitUntil: 'load'});
  page.click("div#main > div.container > ul.tabmenu > li:nth-child(2) > a");
  await page.waitForNavigation();
  // page.click("div#main > div.container > ul.tabmenu > li:nth-child(2) > a");
  // await page.waitForNavigation({waitUntil: 'load'});
  // page.waitForNavigation()
  page.click("a.checkin")
  await page.waitForNavigation();
  // page.click( "div#main > div.container > ul.tabmenu > li:nth-child(2) > a");
  // page.click( "div.wrap > div.container > div.NM_INT_RIGHT > div.column_fix_wrap > div.account > a" );

  // await page.goto('https://ofcourse.kr/html-course/HTML-%EC%9E%85%EB%AC%B8');
  // page.waitForNavigation( ),
  // // console.log
  // page.click( "nav > ul > a:nth-child(2)" );
  // // page.click( "div.wrap > div.container > div.NM_INT_RIGHT > div.column_fix_wrap > div.account > a" );
})();