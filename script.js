const heartNumber = document.getElementById("heartNumber");
const copyNumber = document.getElementById("copyNumber");
const coinNumber = document.getElementById("coinNumber");
const callHistory = document.getElementById("callHistory");
const clearButton = document.getElementById("clearButton");

const hearts = [
  document.getElementById("nationalHeart"),
  document.getElementById("policeHeart"),
  document.getElementById("fireHeart"),
  document.getElementById("ambulanceHeart"),
  document.getElementById("womenHeart"),
  document.getElementById("corruptionHeart"),
  document.getElementById("bracHeart"),
  document.getElementById("railwayHeart"),
  document.getElementById("electricityHeart"),
];

const hotlineNumber = [
  document.getElementById("nationalHotlineNumber"),
  document.getElementById("policeHotlineNumber"),
  document.getElementById("fireHotlineNumber"),
  document.getElementById("ambulanceHotlineNumber"),
  document.getElementById("womenHotlineNumber"),
  document.getElementById("antiCorruptionHotlineNumber"),
  document.getElementById("bracHotlineNumber"),
  document.getElementById("railwayHotlineNumber"),
  document.getElementById("electricityHotlineNumber"),
];

const serviceName = [
  document.getElementById("nationalServiceName"),
  document.getElementById("policeServiceName"),
  document.getElementById("fireServiceName"),
  document.getElementById("ambulanceServiceName"),
  document.getElementById("womenServiceName"),
  document.getElementById("antiCorruptionServiceName"),
  document.getElementById("bracServiceName"),
  document.getElementById("railwayServiceName"),
  document.getElementById("electricityServiceName"),
];

const callButton = [
  document.getElementById("nationalCallButton"),
  document.getElementById("policeCallButton"),
  document.getElementById("fireCallButton"),
  document.getElementById("ambulanceCallButton"),
  document.getElementById("womenCallButton"),
  document.getElementById("antiCorruptionCallButton"),
  document.getElementById("bracCallButton"),
  document.getElementById("railwayCallButton"),
  document.getElementById("electricityCallButton"),
];

const copy = [
  document.getElementById("nationalCopyButton"),
  document.getElementById("policeCopyButton"),
  document.getElementById("fireCopyButton"),
  document.getElementById("ambulanceCopyButton"),
  document.getElementById("womenCopyButton"),
  document.getElementById("antiCorruptionCopyButton"),
  document.getElementById("bracCopyButton"),
  document.getElementById("railwayCopyButton"),
  document.getElementById("electricityCopyButton"),
];

// heart number increased function

hearts.forEach((heart) => {
  heart.addEventListener(
    "click",
    function () {
      let count = parseInt(heartNumber.innerText);
      heartNumber.innerText = count + 1;
    },
    { once: true }
  );
});

// copy number increased function

copy.forEach((copy) => {
  copy.addEventListener(
    "click",
    function () {
      let count = parseInt(copyNumber.innerText);
      copyNumber.innerText = count + 1;
    },
    { once: true }
  );
});

// call rate and history add remove function

callButton.forEach((callBtn, index) => {
  callBtn.addEventListener("click", function () {
    let balance = parseInt(coinNumber.innerText);
    if (balance < 20) {
      alert("Insufficienct Balance");
      return;
    }
    const name = serviceName[index].innerText;
    const number = hotlineNumber[index].innerText;

    alert(`Calling ${name} ${number}...`);
    balance = balance - 20;
    coinNumber.innerText = balance;

    const date = new Date();
    const time = date.toLocaleTimeString("en-US", { hour12: true });

    const newDiv = document.createElement("div");
    newDiv.classList.add(
      "px-[18px]",
      "py-[16px]",
      "flex",
      "justify-between",
      "items-center"
    );
    newDiv.innerHTML = `<div>
        <h1 class="font-inter font-semibold text-[18px]">${name}</h1>
        <p class="font-hind text-[18px]">${number}</p>
      </div>
      <p class="font-hind text-[18px]">${time}</p>`;
    callHistory.appendChild(newDiv);
  });
});

clearButton.addEventListener("click", () => {
  while (callHistory.children.length > 1) {
    callHistory.removeChild(callHistory.lastChild);
  }
});
