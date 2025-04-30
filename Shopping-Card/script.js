// تحديث السعر الإجمالي
function updateTotal() {
    let total = 0;
    document.querySelectorAll(".card").forEach((card) => {
      let price = +card.querySelector(".unit-price").textContent.replace(" $", "");
      let quantity = +card.querySelector(".quantity").textContent;
      total += price * quantity;
    });
    document.querySelector(".total").textContent = total + " $";
  }
  
  // التعامل مع أزرار العربة
  document.querySelectorAll(".card").forEach((card) => {
    const plus = card.querySelector(".fa-plus-circle");
    const minus = card.querySelector(".fa-minus-circle");
    const del = card.querySelector(".fa-trash-alt");
    const heart = card.querySelector(".fa-heart");
    const quantity = card.querySelector(".quantity");
  
    plus.onclick = () => {
      quantity.textContent++;
      updateTotal();
    };
  
    minus.onclick = () => {
      if (quantity.textContent > 0) quantity.textContent--;
      updateTotal();
    };
  
    del.onclick = () => {
      card.parentElement.remove();
      updateTotal();
    };
  
    heart.onclick = () => heart.classList.toggle("active-heart");
  });
  