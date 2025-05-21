"use client"

import { useState, useEffect } from "react"

interface Bid {
  bidder: string
  amount: number
  timestamp: string
}

export function BidHistory({ bids, autoRoll = false }: { bids: Bid[]; autoRoll?: boolean }) {
  const [visibleBids, setVisibleBids] = useState<Bid[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!bids || bids.length === 0) return

    if (autoRoll && bids.length > 5) {
      // 초기 표시할 입찰 내역 설정
      setVisibleBids(bids.slice(0, 5))

      // 자동 롤링 효과
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % Math.max(bids.length - 4, 1)
          setVisibleBids(bids.slice(nextIndex, nextIndex + 5))
          return nextIndex
        })
      }, 3000)

      return () => clearInterval(interval)
    } else {
      setVisibleBids(bids)
    }
  }, [bids, autoRoll])

  if (!bids || bids.length === 0) {
    return <div className="text-center py-6 text-gray-400">아직 입찰 내역이 없습니다.</div>
  }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-400">입찰자</th>
            <th className="px-3 py-2 text-center text-xs font-medium text-gray-400">입찰가</th>
            <th className="px-3 py-2 text-right text-xs font-medium text-gray-400">입찰 시간</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {visibleBids.map((bid, index) => (
            <tr key={index} className={index === 0 ? "bg-gray-800/50" : ""}>
              <td className="px-3 py-2 text-sm">{bid.bidder}</td>
              <td className="px-3 py-2 font-medium text-sm text-center">{bid.amount.toLocaleString()}원</td>
              <td className="px-3 py-2 text-xs text-gray-400 text-right">{bid.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {autoRoll && bids.length > 5 && (
        <div className="py-2 px-3 bg-gray-800 text-xs text-gray-400 flex justify-between">
          <span>총 {bids.length}개의 입찰 내역</span>
          <span>
            {currentIndex + 1}-{Math.min(currentIndex + 5, bids.length)}/{bids.length}
          </span>
        </div>
      )}
    </div>
  )
}
