
console.log('content');


const message = 'click';
chrome.runtime.sendMessage(
    {
      a: 'contentJS'
    },
    function(response) {
      if (response) {
        console.log(response);
      } else {
        console.log('没有接收到消息');
      }
    }
)