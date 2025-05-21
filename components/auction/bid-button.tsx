"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { checkBidEligibility } from "@/lib/auction"

export function BidButton({ productId, currentBid }: { productId: string; currentBid: number }) {
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleBidClick = async () => {
    setIsLoading(true)

    try {
      // 입찰 자격 확인
      const { eligible, reason, hasExistingBid } = await checkBidEligibility(productId)

      if (!eligible) {
        toast({
          title: "입찰 불가",
          description: reason,
          variant: "destructive",
        })

        // 조건에 맞는 페이지로 이동 로직
        if (reason.includes("로그인")) {
          router.push("/login")
        }
        return
      }

      // 입찰 페이지로 이동
      router.push(`/goods/auction/${productId}/bid?current=${currentBid}&existing=${hasExistingBid}`)
    } catch (error) {
      toast({
        title: "오류 발생",
        description: "입찰 정보를 확인하는 중 오류가 발생했습니다.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button className="w-full py-5 text-base bg-red-500 hover:bg-red-600" onClick={handleBidClick} disabled={isLoading}>
      {isLoading ? "처리 중..." : "입찰하기"}
    </Button>
  )
}
