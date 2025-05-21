"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { getAuctionProducts } from "@/lib/auction"

export function AuctionProductList() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const auctionProducts = await getAuctionProducts()
      setProducts(auctionProducts)
    }

    fetchProducts()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link href={`/goods/auction/${product.id}`} key={product.id}>
          <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-square">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{product.shortDescription}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <span className="text-sm">현재 입찰가</span>
              <span className="font-bold">{product.currentBid.toLocaleString()}원</span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
