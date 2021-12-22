// // 选中pve竞技场
// document.querySelectorAll('.nav_item')[5].children[0].click();

// // 选择技能
// const list = document.querySelector('.skills_round_wrap').children;
// list.map(item => {
//   item.
// })

// // 点击挑战神兽i
// document.querySelector('#tzss').click();

// 当点击确认后 和bsckjs进行通信，back那边网络请求本地服务，本地服务移动鼠标并点击小狐狸钱包的确认按钮，完成付费
// chrome.runtime.sendMessege(
//     message,
//     function(response) {}
// )





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