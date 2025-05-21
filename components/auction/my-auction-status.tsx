"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getUserBids } from "@/lib/auction"

export function MyAuctionStatus() {
  const [isOpen, setIsOpen] = useState(false)
  const [userBids, setUserBids] = useState<any[]>([])
  const [sortOption, setSortOption] = useState("recent")
  const [page, setPage] = useState(1)
  const [totalBids, setTotalBids] = useState(0)
  const [topBids, setTopBids] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenDialog = async () => {
    if (userBids.length === 0) {
      setIsLoading(true)
      try {
        const { bids, total, topBidsCount } = await getUserBids()
        setUserBids(bids)
        setTotalBids(total)
        setTopBids(topBidsCount)
      } catch (error) {
        console.error("Failed to fetch user bids:", error)
      } finally {
        setIsLoading(false)
      }
    }
    setIsOpen(true)
  }

  const handleSort = (value: string) => {
    setSortOption(value)
    // 정렬 로직 구현
  }

  return (
    <>
      <Button
        variant="outline"
        className="w-full bg-gray-800 hover:bg-gray-700 border-gray-700 text-white"
        onClick={handleOpenDialog}
        disabled={isLoading}
      >
        {isLoading ? "로딩 중..." : "내 입찰 현황 보기"}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-800 max-w-[95vw] sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl">내 입찰 현황</DialogTitle>
          </DialogHeader>

          <div className="text-center mb-4">
            <p className="text-sm mb-1">현재까지 입찰한 상품 개수</p>
            <p className="text-2xl font-bold">
              {totalBids} {topBids > 0 && <span className="text-red-500">({topBids})</span>}
            </p>
            <p className="text-xs text-gray-400 mt-1">괄호 안은 내가 최고 입찰가인 상품 수</p>
          </div>

          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="text-xs text-gray-400">총 {totalBids}개의 입찰 내역</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs">정렬:</span>
              <Select value={sortOption} onValueChange={handleSort}>
                <SelectTrigger className="w-[120px] h-8 text-xs bg-gray-800 border-gray-700">
                  <SelectValue placeholder="정렬 방식 선택" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="recent">최근순</SelectItem>
                  <SelectItem value="oldest">오래된순</SelectItem>
                  <SelectItem value="high-price">높은 입찰가순</SelectItem>
                  <SelectItem value="low-price">낮은 입찰가순</SelectItem>
                  <SelectItem value="influencer">인플루언서별</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-400">인플루언서</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-400">입찰가</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-400">최고가</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-400">추가 입찰</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {userBids.length > 0 ? (
                  userBids.map((bid, index) => (
                    <tr key={index}>
                      <td className="px-2 py-2 text-xs">{bid.influencer}</td>
                      <td className="px-2 py-2 text-xs font-medium">{bid.amount.toLocaleString()}원</td>
                      <td className="px-2 py-2 text-xs">{bid.currentHighestBid.toLocaleString()}원</td>
                      <td className="px-2 py-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 text-xs bg-transparent border-gray-700 hover:bg-gray-800"
                          onClick={() => (window.location.href = `/goods/auction/${bid.productId}`)}
                        >
                          입찰하기
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-4 py-4 text-center text-gray-400">
                      입찰 내역이 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {totalBids > 10 && (
            <div className="flex justify-center mt-3">
              <div className="flex space-x-1">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="h-7 text-xs bg-gray-800 border-gray-700 hover:bg-gray-700"
                >
                  이전
                </Button>
                <Button variant="outline" size="sm" className="h-7 text-xs bg-red-500 border-red-500 text-white">
                  {page}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page * 10 >= totalBids}
                  onClick={() => setPage(page + 1)}
                  className="h-7 text-xs bg-gray-800 border-gray-700 hover:bg-gray-700"
                >
                  다음
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
