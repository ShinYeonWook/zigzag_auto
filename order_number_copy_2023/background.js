// 브라우저 액션 아이콘을 클릭하면 콘텐츠 스크립트를 로드
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  });