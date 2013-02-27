"use strict";

var errors = require('./errors')
  , deviceCommon = require('./device')
  , NotImplementedError = errors.NotImplementedError
  , UnknownError = errors.UnknownError;

var Android = function(opts) {
  this.rest = opts.rest;
  this.apkPath = opts.apkPath;
  this.appPackage = opts.appPackage;
  this.appActivity = opts.appActivity;
  this.verbose = opts.verbose;
  this.queue = [];
  this.progress = 0;
  this.onStop = function() {};
  this.implicitWaitMs = 0;
  this.adb = null;
  this.capabilities = {
    platform: 'LINUX'
    , browserName: 'Android'
    , version: '4.1'
    , webStorageEnabled: false
    , takesScreenshots: true
    , javascriptEnabled: true
    , databaseEnabled: false
  };
};

Android.prototype.start = function(cb, onDie) {
};

Android.prototype.stop = function(cb) {
};

Android.prototype.proxy = deviceCommon.proxy;
Android.prototype.respond = deviceCommon.respond;

Android.prototype.setCommandTimeout = function(secs, cb) {
};

Android.prototype.resetCommandTimeout = function(cb) {
};

Android.prototype.getCommandTimeout = function(cb) {
};

Android.prototype.findElement = function(strategy, selector, cb) {
};

Android.prototype.findElements = function(strategy, selector, cb) {
};

Android.prototype.findElementFromElement = function(element, strategy, selector, cb) {
};

Android.prototype.findElementsFromElement = function(element, strategy, selector, cb) {
};

Android.prototype.setValueImmediate = function(elementId, value, cb) {
};

Android.prototype.setValue = function(elementId, value, cb) {
};

Android.prototype.click = function(elementId, cb) {
};

Android.prototype.complexTap = function(tapCount, touchCount, duration, x, y, elementId, cb) {
};

Android.prototype.clear = function(elementId, cb) {
};

Android.prototype.getText = function(elementId, cb) {
};

Android.prototype.getAttribute = function(elementId, attributeName, cb) {
};

Android.prototype.getLocation = function(elementId, cb) {
};

Android.prototype.getSize = function(elementId, cb) {
};

Android.prototype.getWindowSize = function(windowHandle, cb) {
};

Android.prototype.getPageIndex = function(elementId, cb) {
};

Android.prototype.keys = function(elementId, keys, cb) {
};

Android.prototype.frame = function(frame, cb) {
};

Android.prototype.implicitWait = function(ms, cb) {
};

Android.prototype.elementDisplayed = function(elementId, cb) {
};

Android.prototype.elementEnabled = function(elementId, cb) {
};

Android.prototype.getPageSource = function(cb) {
};

Android.prototype.getAlertText = function(cb) {
};

Android.prototype.postAcceptAlert = function(cb) {
};

Android.prototype.postDismissAlert = function(cb) {
};

Android.prototype.getOrientation = function(cb) {
};

Android.prototype.setOrientation = function(orientation, cb) {
};

Android.prototype.getScreenshot = function(cb) {
};

Android.prototype.fakeFlick = function(xSpeed, ySpeed, swipe, cb) {
};

Android.prototype.fakeFlickElement = function(elementId, xoffset, yoffset, speed, cb) {
};

Android.prototype.swipe = function(startX, startY, endX, endY, duration, touchCount, elId, cb) {
};

Android.prototype.flick = function(startX, startY, endX, endY, touchCount, elId, cb) {
};

Android.prototype.hideKeyboard = function(keyName, cb) {
};

Android.prototype.url = function(url, cb) {
};

Android.prototype.active = function(cb) {
};

Android.prototype.getWindowHandle = function(cb) {
};

Android.prototype.getWindowHandles = function(cb) {
};

Android.prototype.setWindow = function(name, cb) {
};

Android.prototype.clearWebView = function(cb) {
};

Android.prototype.execute = function(script, args, cb) {
};

Android.prototype.title = function(cb) {
};

module.exports = function(opts) {
  return new Android(opts);
};
