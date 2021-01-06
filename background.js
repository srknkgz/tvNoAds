// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.webRequest.onBeforeRequest.addListener(
  function(){ return {cancel: true}; },
  {
  	urls:["https://imasdk.googleapis.com/js/sdkloader/ima3.js"]
  },
  ["blocking"]
);