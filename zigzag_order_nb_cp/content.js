// 페이지에서 주문번호를 가져오고 클립보드에 복사하는 함수
function copyOrderNumber(orderNumber) {
    navigator.clipboard.writeText(orderNumber).then(function () {
      alert("주문번호가 클립보드에 복사되었습니다.");
    });
  }
  
  // 주문 정보를 클릭했을 때의 이벤트 핸들러
  function onOrderInfoClick(event) {
    // 이벤트 버블링 방지
    event.stopPropagation();
  
    // 주문번호 요소를 찾습니다. 주문번호를 가져오는 방법은 지그재그 웹사이트의 HTML 구조에 따라 달라질 수 있습니다.
    const orderNumberElement = event.target.closest(".order-number");
  
    if (orderNumberElement) {
      const orderNumber = orderNumberElement.textContent;
      copyOrderNumber(orderNumber);
    }
  }
  
  // 클릭 이벤트 리스너를 등록합니다.
  document.addEventListener("click", onOrderInfoClick);
  