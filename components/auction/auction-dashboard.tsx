"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { getAllBids } from "@/lib/auction"
import { formatDate } from "@/lib/utils"

export function AuctionDashboard() {
  const router = useRouter()
  const [bids, setBids] = useState<any[]>([])
  const [visibleBids, setVisibleBids] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchBids = async () => {
      const allBids = await getAllBids()
      setBids(allBids)
      setVisibleBids(allBids.slice(0, 3))
    }

    fetchBids()

    // 실시간 업데이트를 위한 인터벌 설정
    const interval = setInterval(fetchBids, 30000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (bids.length <= 3) return

    // 자동 롤링 효과
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % Math.max(bids.length - 2, 1)
        setVisibleBids(bids.slice(nextIndex, nextIndex + 3))
        return nextIndex
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [bids])

  const handleRowClick = (productId: string) => {
    router.push(`/goods/auction/${productId}`)
  }

  return (
    <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
      <div className="h-[150px] overflow-y-auto" ref={scrollRef}>
        <table className="w-full">
          <thead className="sticky top-0 bg-gray-900">
            <tr className="border-b border-gray-800">
              <th className="text-left py-2 px-2 text-xs text-gray-400">시간</th>
              <th className="text-left py-2 px-2 text-xs text-gray-400">상품</th>
              <th className="text-right py-2 px-2 text-xs text-gray-400">입찰가</th>
            </tr>
          </thead>
          <tbody>
            {visibleBids.map((bid, index) => (
              <tr
                key={index}
                className="border-b border-gray-800 hover:bg-gray-800 cursor-pointer"
                onClick={() => handleRowClick(bid.productId)}
              >
                <td className="py-2 px-2 text-xs">{formatDate(bid.timestamp)}</td>
                <td className="py-2 px-2 text-sm truncate max-w-[120px]">{bid.productName}</td>
                <td className="py-2 px-2 text-right text-sm font-medium">{bid.amount.toLocaleString()}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="py-2 px-3 bg-gray-900 text-xs text-gray-400 flex justify-between">
        <span>총 {bids.length}개의 입찰 내역</span>
        <span>
          {currentIndex + 1}-{Math.min(currentIndex + 3, bids.length)}/{bids.length}
        </span>
      </div>
    </div>
  )
}
