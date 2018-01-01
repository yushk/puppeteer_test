const puppeteer = require('puppeteer')
var {timeout} = require('../tools/tools.js');

// 测试
puppeteer.launch({headless: false}).then(async browser => {
    var page = await browser.newPage()
    page.setViewport({width: 1200, height: 600})


    /** 登录 **/
    try {
        await timeout(1000)
        await page.goto('http://363366a.com/')
        await timeout(1000)

        console.log('点击时时彩')
        
        var shishicai = await page.$('[href=/Home/BET?QU=&tourl=363366a.com/BET2/SSC/LMP?tid=7&gid=10038&mid=10733]')
        console.log('shishicaibtn',shishicai)
        debugger

        await shishicai.click()
        


        var loginPhoneOrEmail = await page.$('[name=username]')
        console.log('loginPhoneOrEmail:', loginPhoneOrEmail);
        await loginPhoneOrEmail.click()
        var username = await page.type('[name=username]','cc0000', {delay: 20})
        console.log('username',username)
        var password = await page.$('[name=passwd]')
        console.log('password:', password);
        await password.click()
        await page.type('[name=passwd]','6r90ueliw', {delay: 20})


        var login = await page.$('[name=Submit]')
        await login.click()
      
    } catch (e) {
        console.log(e)
        return
    }


    /** 随机推荐一篇从sf拿来的文章到掘金 **/
    try {
     

    } catch (e) {
        await page.screenshot({path: './data/sf-juejin/err.png', type: 'png'});
    }

    await page.screenshot({path: './data/sf-juejin/done.png', type: 'png'});
    // await page.close()
    // browser.close()
})
