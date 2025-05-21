// 이 파일은 실제 데이터베이스 연동 시 수정이 필요합니다.
// 현재는 더미 데이터를 사용합니다.

// 모든 경매 상품 가져오기
export async function getAuctionProducts() {
  // 실제 구현에서는 데이터베이스에서 가져오는 로직으로 대체
  return [
    {
      id: "1",
      name: "결(Kyul) 사인 포토카드",
      shortDescription: "결(Kyul)의 한정판 사인 포토카드입니다.",
      currentBid: 150000,
      image: "/placeholder.svg?height=400&width=400",
      endTime: "2025-06-30T23:59:59",
      bidCount: 5,
    },
    {
      id: "2",
      name: "쏘블리 착용 의상",
      shortDescription: "쏘블리가 뮤직비디오에서 착용한 의상입니다.",
      currentBid: 350000,
      image: "/placeholder.svg?height=400&width=400",
      endTime: "2025-06-25T23:59:59",
      bidCount: 3,
    },
    {
      id: "3",
      name: "민지 사인 앨범",
      shortDescription: "민지의 사인이 담긴 한정판 앨범입니다.",
      currentBid: 120000,
      image: "/placeholder.svg?height=400&width=400",
      endTime: "2025-07-05T23:59:59",
      bidCount: 0,
    },
    {
      id: "4",
      name: "하니 폴라로이드 세트",
      shortDescription: "하니의 미공개 폴라로이드 5장 세트입니다.",
      currentBid: 200000,
      image: "/placeholder.svg?height=400&width=400",
      endTime: "2025-06-28T23:59:59",
      bidCount: 4,
    },
  ]
}

// 특정 경매 상품 가져오기
export async function getAuctionProduct(id: string) {
  // 실제 구현에서는 데이터베이스에서 가져오는 로직으로 대체
  const products = await getAuctionProducts()
  const product = products.find((p) => p.id === id)

  if (!product) return null

  return {
    ...product,
    description:
      "이 상품은 인플루언서의 실제 착용 의상으로, 한정판으로 제작되었습니다. 경매 수익금의 일부는 자선단체에 기부됩니다. 이 특별한 기회를 놓치지 마세요!",
    additionalImages: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    bids: [
      { bidder: "user123", amount: 150000, timestamp: "2025-05-20 14:30:25" },
      { bidder: "fan456", amount: 140000, timestamp: "2025-05-20 12:15:10" },
      { bidder: "collector789", amount: 130000, timestamp: "2025-05-19 18:45:33" },
      { bidder: "bidder321", amount: 120000, timestamp: "2025-05-19 10:20:45" },
      { bidder: "newuser555", amount: 110000, timestamp: "2025-05-18 21:05:12" },
    ],
  }
}

// 모든 입찰 내역 가져오기
export async function getAllBids() {
  // 실제 구현에서는 데이터베이스에서 가져오는 로직으로 대체
  return [
    {
      productId: "1",
      productName: "결(Kyul) 사인 포토카드",
      bidder: "user123",
      amount: 150000,
      timestamp: "2025-05-20 14:30:25",
    },
    {
      productId: "2",
      productName: "쏘블리 착용 의상",
      bidder: "collector789",
      amount: 350000,
      timestamp: "2025-05-20 13:45:18",
    },
    {
      productId: "1",
      productName: "결(Kyul) 사인 포토카드",
      bidder: "fan456",
      amount: 140000,
      timestamp: "2025-05-20 12:15:10",
    },
    {
      productId: "3",
      productName: "민지 사인 앨범",
      bidder: "newuser555",
      amount: 120000,
      timestamp: "2025-05-20 11:30:42",
    },
    {
      productId: "4",
      productName: "하니 폴라로이드 세트",
      bidder: "bidder321",
      amount: 200000,
      timestamp: "2025-05-20 10:55:37",
    },
    {
      productId: "1",
      productName: "결(Kyul) 사인 포토카드",
      bidder: "collector789",
      amount: 130000,
      timestamp: "2025-05-19 18:45:33",
    },
    {
      productId: "5",
      productName: "다니엘 착용 액세서리",
      bidder: "fan456",
      amount: 180000,
      timestamp: "2025-05-19 16:20:15",
    },
    {
      productId: "1",
      productName: "결(Kyul) 사인 포토카드",
      bidder: "bidder321",
      amount: 120000,
      timestamp: "2025-05-19 10:20:45",
    },
    {
      productId: "6",
      productName: "혜인 친필 메시지 카드",
      bidder: "user123",
      amount: 90000,
      timestamp: "2025-05-19 09:15:30",
    },
    {
      productId: "1",
      productName: "결(Kyul) 사인 포토카드",
      bidder: "newuser555",
      amount: 110000,
      timestamp: "2025-05-18 21:05:12",
    },
  ]
}

// 사용자 입찰 내역 가져오기
export async function getUserBids() {
  // 실제 구현에서는 데이터베이스에서 가져오는 로직으로 대체
  const bids = [
    {
      productId: "1",
      influencer: "결(Kyul)",
      amount: 100000,
      timestamp: "2025-05-01 11:11:11",
      currentHighestBid: 150000,
      maxPossibleBid: 2000000,
    },
    {
      productId: "2",
      influencer: "쏘블리",
      amount: 150000,
      timestamp: "2025-05-01 10:10:10",
      currentHighestBid: 350000,
      maxPossibleBid: 2000000,
    },
  ]

  return {
    bids,
    total: bids.length,
    topBidsCount: 0, // 현재 최고 입찰가인 상품 수
  }
}

// 사용자 정보 가져오기
export async function getUserInfo() {
  // 실제 구현에서는 데이터베이스에서 가져오는 로직으로 대체
  return {
    name: "홍길동",
    phone: "01012345678",
    address: "서울시 강남구 테헤란로 123",
    paymentMethod: "card",
  }
}

// 입찰 자격 확인
export async function checkBidEligibility(productId: string) {
  // 실제 구현에서는 사용자 인증 및 자격 확인 로직으로 대체
  const isLoggedIn = true // 로그인 여부
  const hasCompletedProfile = true // 프로필 완성 여부

  if (!isLoggedIn) {
    return {
      eligible: false,
      reason: "로그인이 필요합니다.",
      hasExistingBid: false,
    }
  }

  if (!hasCompletedProfile) {
    return {
      eligible: false,
      reason: "프로필 정보를 완성해주세요.",
      hasExistingBid: false,
    }
  }

  // 이미 입찰한 내역이 있는지 확인
  const userBids = await getUserBids()
  const hasExistingBid = userBids.bids.some((bid) => bid.productId === productId)

  const userInfo = await getUserInfo()

  return {
    eligible: true,
    hasExistingBid,
    userInfo,
  }
}

// 입찰하기
export async function placeBid(bidData: {
  productId: string
  amount: number
  paymentMethod: string
  name: string
  phone: string
  address: string
}) {
  // 실제 구현에서는 데이터베이스에 입찰 정보 저장 로직으로 대체
  console.log("입찰 정보:", bidData)

  // 성공적으로 입찰했다고 가정
  return { success: true }
}
