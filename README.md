# salcode Share Description

Stable Tag: 0.1.0  
Requires at least: 6.0.1  
Tested up to: 6.0.1  
Requires PHP: 7.2  
License: apache-2.0  
Contributors: salcode  

## Description

This plugin adds a section called "Social Share" to the Document sidebar in the editor. This "Social Share" section contains a field to populate the `og:description` meta tag when the front-end page is rendered.

This plugin was created to document the steps in creating a plugin that uses the `@wordpress/scripts` JavaScript library and interacts with the WordPress block editor (a.k.a. Gutenberg). Going through each commit and reading the commit message that goes with it is recommended for those wanting to learn more.

## Screenshots

1. The **Social Share** section in the document sidebar<br>![The Social Share section in the document sidebar](https://user-images.githubusercontent.com/5194588/181842122-7efbcae3-9e5b-41e5-b1d3-1c2b3b7ca8e8.png)

## Frequently Asked Questions

### Where is this plugin developed?

Development of this code happens at [github.com/salcode/salcode-share-desc](https://github.com/salcode/salcode-share-desc)

### Why Was this Plugin Created

The author, @salcode, created this as part of a presentation for his local WordPress Meetup Group.

### Should I Use this Plugin

Probably not. This plugin was designed to perform a very singular use as part of a demo in building JavaScript plugins like this for the WordPress block editor.

### How to Build the JavaScript for this plugin

1. Switch to node 12 (Note: a `.nvmrc` file is included for those who use [nvm](https://github.com/nvm-sh/nvm))
2. Run `npm install`
3. Run `npm run build`

### How to Automatically Rebuild the JavaScript During Development

1. Complete the above `How to Build the JavaScript for this plugin` steps
2. Then run `npm run dev`. This will start a process that watches for changes in your JavaScript source and when a change occurs it rebuilds the JavaScript built files. (Note: the browser will not automatically reload on changes, you need to manually reload the page).

## Changelog

### 0.1.0

* Initial release
