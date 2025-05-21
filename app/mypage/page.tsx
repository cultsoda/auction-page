import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function MyPage() {
  return (
    <div className="pb-6">
      <div className="bg-black py-3 px-4 flex items-center border-b border-gray-800">
        <Link href="/" className="mr-2">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-lg font-bold">마이페이지</h1>
      </div>

      <div className="p-4">
        <Link href="/mypage/purchase-history" className="block bg-gray-900 rounded-lg p-4 mb-3">
          <h2 className="text-lg font-bold">구매 내역</h2>
          <p className="text-sm text-gray-400 mt-1">상품 및 경매 구매 내역을 확인합니다.</p>
        </Link>

        <Link href="/mypage/profile" className="block bg-gray-900 rounded-lg p-4 mb-3">
          <h2 className="text-lg font-bold">프로필 관리</h2>
          <p className="text-sm text-gray-400 mt-1">개인정보 및 배송지를 관리합니다.</p>
        </Link>

        <Link href="/mypage/settings" className="block bg-gray-900 rounded-lg p-4">
          <h2 className="text-lg font-bold">설정</h2>
          <p className="text-sm text-gray-400 mt-1">알림 및 앱 설정을 관리합니다.</p>
        </Link>
      </div>
    </div>
  )
}
