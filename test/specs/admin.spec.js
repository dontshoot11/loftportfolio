const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
    return client.init().url('http://localhost:8080/admin#');
});

test('на странице есть кнопка "открыть"', () => {
    return client
        .isExisting('.button-login-submit')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .screenshot()
        .then(browsers => {
            for (const browserName in browsers) {
                fs.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
            }
        });
});