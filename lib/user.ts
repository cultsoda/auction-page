// 이 파일은 실제 데이터베이스 연동 시 수정이 필요합니다.
// 현재는 더미 데이터를 사용합니다.

// 구매 이력 가져오기
export async function getPurchaseHistory() {
  // 실제 구현에서는 데이터베이스에서 가져오는 로직으로 대체
  return [
    {
      id: "1",
      type: "product",
      name: "결(Kyul) 포토카드 세트",
      price: 25000,
      date: "2025-05-15T10:30:00",
      status: "completed",
    },
    {
      id: "2",
      type: "auction",
      name: "쏘블리 착용 의상",
      price: 350000,
      date: "2025-05-10T14:20:00",
      status: "shipping",
    },
    {
      id: "3",
      type: "product",
      name: "민지 응원봉",
      price: 45000,
      date: "2025-05-05T09:15:00",
      status: "completed",
    },
    {
      id: "4",
      type: "auction",
      name: "하니 폴라로이드 세트",
      price: 180000,
      date: "2025-04-28T16:40:00",
      status: "refunded",
    },
    {
      id: "5",
      type: "product",
      name: "다니엘 키링",
      price: 15000,
      date: "2025-04-20T11:25:00",
      status: "completed",
    },
  ]
}
