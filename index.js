const share_btn_before = document.getElementById("share-btn-initial");
const share_btn_after = document.getElementById("share-btn-after");
const inactive = document.getElementById("inactive");
const active = document.getElementById("active");
const ath_container = document.getElementById("ath");

active.style.display = "none";

share_btn_before.addEventListener("click", (e) => {
  active.style.display = "flex";
  inactive.style.display = "none";
});

share_btn_after.addEventListener("click", (e) => {
  inactive.style.display = "flex";
  active.style.display = "none";
});
