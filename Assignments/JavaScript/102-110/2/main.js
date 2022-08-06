setTimeout(function () {
  let container = document.createElement('div');
  container.innerHTML =
    '<h3>Welcome</h3> <p>Welcome To Elzero Web School</p> <span>×</span>';
  container.className = 'container';
  container.style.cssText =
    ' position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; width: 24rem; padding: 1rem; background-color: lightgray;';
  container.querySelector('span').style.cssText =
    ' position: absolute; top: 0; right: 0; transform: translate(50%, -50%); width: 2.5rem; height: 2.5rem; border-radius: 50%; line-height: 2.5rem; font-size: 2rem; font-weight: bold; background-color: red; color: white; cursor: pointer;';

  let closePopup = container.querySelector('span');
  closePopup.onclick = function () {
    container.style.display = 'none';
  };
  document.body.append(container);
}, 5000);
