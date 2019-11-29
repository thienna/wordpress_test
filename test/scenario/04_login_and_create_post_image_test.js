Feature('login and create post includes image WordPress');
let faker = require('faker');  //Thư viện sinh dữ liệu giả ngẫu nhiên

// Scenario('Home page and Search', (I) => {
//     I.amOnPage('/');
//     I.click("button.toggle.search-toggle");
//     I.fillField("input#search-form-1.search-field", "Hello");
//     I.waitForInvisible('div.search-modal-inner modal-inner');
//     I.pressKey("Enter");
//     I.see("We found 1 result for your search.");
// });

Scenario('Login', (I) => {
    I.amOnPage('/wp-login.php');
    I.fillField('input#user_login', "user");
    I.fillField('input#user_pass', 'bitnami');
    I.click('input#wp-submit');
    I.seeInCurrentUrl('/wp-admin/');

    I.amOnPage('/wp-admin/post-new.php'); //Tạo một post mới
    I.fillField('textarea#post-title-0', faker.lorem.sentence());
    I.pressKey('Enter');
    I.click('button.components-button.components-icon-button.editor-inserter__toggle.block-editor-inserter__toggle');
    // I.seeElement('div.editor-inserter__menu.block-editor-inserter__menu');
    // I.click('button.editor-block-types-list__item.block-editor-block-types-list__item.editor-block-list-item-paragraph');
    // I.fillField('p.rich-text.editor-rich-text__editable.block-editor-rich-text__editable.wp-block-paragraph',
    //     faker.lorem.paragraphs(10));
    // I.click('button.components-button.components-icon-button.editor-inserter__toggle.block-editor-inserter__toggle');
    I.wait(1);
    I.seeElement('div.editor-inserter__menu.block-editor-inserter__menu');
    I.click('button.editor-block-types-list__item.block-editor-block-types-list__item.editor-block-list-item-image');
    // I.click('button.components-button.components-icon-button.block-editor-media-placeholder__button.editor-media-placeholder__button.block-editor-media-placeholder__upload-button.has-text.is-button.is-default.is-large');
    I.attachFile('div.components-form-file-upload input', 'image.jpg');

    I.wait(1);
    I.click('button.components-button.editor-post-publish-panel__toggle.is-button.is-primary');
    I.click('button.components-button.editor-post-publish-button.is-button.is-primary');
    I.click('div.post-publish-panel__postpublish-buttons a.components-button.is-button.is-default');
    I.wait(3)
    I.scrollTo('div.entry-content .wp-block-image.size-large');
    I.wait(3)

    // I.click('a.components-button.editor-post-preview');  //mở cửa sổ mới
    // I.wait(3); //Chớ load một chút
    // I.switchToNextTab();  //Chuyển sang cửa sổ mới
    // I.closeCurrentTab(); // Rồi lại đóng cửa sổ này
    // I.click('button.components-button.editor-post-publish-panel__toggle');
    // I.see('Are you ready to publish?');
    // I.click('button.components-button.editor-post-publish-panel__toggle');
    // I.waitForInvisible('View Posted');
    // I.wait(10); // Phải chờ khoảng 10 giây để notification ẩn đi
    // I.click('View Post');
    // I.wait(3);
});

