chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request, sender);
  sendResponse({ a: 'back' });
});

// import { axios } from './axios';
// const url = 'http://localhost:3001/api/makeClick';
// function makeClick() {
//   axios.get(url);
// }
// 获取鼠标坐标
// function mouseMove(ev) {
//   Ev = ev || window.event;
//   var mousePos = mouseCoords(ev);
//   console.log(mousePos.x, mousePos.y);
// }
// function mouseCoords(ev) {
//   if (ev.pageX || ev.pageY) {
//     return { x: ev.pageX, y: ev.pageY };
//   }
//   return {
//     x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
//     y: ev.clientY + document.body.scrollTop - document.body.clientTop,
//   };
// }
// document.onmousemove = mouseMove;
