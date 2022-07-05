const inputEl = document.getElementById("input");
const list = document.getElementById("word-list");
const addBtn = document.getElementById();

const handleAdd = () => {
  const val = inputEl.value;
  const newWord = document.createElement("li");
  newWord.innerText = val;
  list.append(newWord);
};

addBtn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: handleAdd,
  });
});
