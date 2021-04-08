import "./style.css";

/***
 * 替换图片
 * @param path 新图片的路径
 * @constructor
 */
window.ChangeCompImg = function (path) {
  console.log("img");
  console.log(path);

  document.getElementById("image").src = path;
};

/***
 * 更换组背景
 * @param path 新图片的路劲
 * @constructor
 */
window.ChangeGroupBGImg = function (path) {
  console.log("bg");
  console.log(path);
};

document
  .getElementById("select-image")
  .addEventListener("change", function (event) {
    const files = document.getElementById("select-image").files;
    console.log(files);
  });

document.getElementById("change-image").addEventListener("click", function () {
  if (window.webkit) {
    window.webkit.messageHandlers.ChangeCompImg.postMessage(
      "choose_from_device"
    );
  } else if (window.android) {
    window.android.ChangeCompImg("choose_from_device");
  }
});

document
  .getElementById("change-background")
  .addEventListener("click", function () {
    if (window.webkit) {
      window.webkit.messageHandlers.ChangeCompImg.postMessage("take_a_photo");
    } else if (window.android) {
      window.android.ChangeCompImg("take_a_photo");
    }
  });

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
