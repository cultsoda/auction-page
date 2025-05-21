"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PurchaseHistoryPage() {
  const [activeTab, setActiveTab] = useState("purchase")
  const [purchaseHistory, setPurchaseHistory] = useState<any[]>([
    {
      id: "1",
      date: "2023.05.15 14:30",
      type: "굿즈",
      name: "콜키킴 10장",
      price: 12000,
      originalPrice: 15000,
      status: "결제완",
    },
    {
      id: "2",
      date: "2023.05.10 09:15",
      type: "포토카드",
      name: "S급 최상 포토카드",
      price: 5000,
      originalPrice: 5000,
      status: "배송중",
    },
    {
      id: "3",
      date: "2023.05.05 18:45",
      type: "굿즈",
      name: "콜키킴 30장",
      price: 30000,
      originalPrice: 45000,
      status: "결제완",
    },
    {
      id: "4",
      date: "2023.04.28 11:20",
      type: "포토카드",
      name: "A급 최상 포토카드",
      price: 3000,
      originalPrice: 3000,
      status: "배송완",
    },
    {
      id: "5",
      date: "2023.04.20 16:10",
      type: "굿즈",
      name: "콜키킴 1장",
      price: 1500,
      originalPrice: 1500,
      status: "결제완",
    },
  ])

  return (
    <div className="pb-6">
      <div className="bg-black py-3 px-4 flex items-center border-b border-gray-800">
        <Link href="/mypage" className="mr-2">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-lg font-bold">마이페이지</h1>
      </div>

      <div className="flex border-b border-gray-800">
        <button
          className={`flex-1 py-3 text-center ${activeTab === "purchase" ? "text-red-500 border-b-2 border-red-500" : "text-gray-400"}`}
          onClick={() => setActiveTab("purchase")}
        >
          구매 내역
        </button>
        <button
          className={`flex-1 py-3 text-center ${activeTab === "collection" ? "text-red-500 border-b-2 border-red-500" : "text-gray-400"}`}
          onClick={() => setActiveTab("collection")}
        >
          내 컬렉션
        </button>
      </div>

      <div className="bg-gray-900">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left py-3 px-3 text-sm font-medium text-gray-400">일시</th>
              <th className="text-left py-3 px-3 text-sm font-medium text-gray-400">유형</th>
              <th className="text-left py-3 px-3 text-sm font-medium text-gray-400">상품명</th>
              <th className="text-right py-3 px-3 text-sm font-medium text-gray-400">금액</th>
              <th className="text-right py-3 px-3 text-sm font-medium text-gray-400">상태</th>
            </tr>
          </thead>
          <tbody>
            {purchaseHistory.map((item) => (
              <tr key={item.id} className="border-b border-gray-800">
                <td className="py-3 px-3 text-xs">{item.date}</td>
                <td className="py-3 px-3 text-sm">{item.type}</td>
                <td className="py-3 px-3 text-sm">{item.name}</td>
                <td className="py-3 px-3 text-right">
                  <div className="text-sm font-medium">{item.price.toLocaleString()}원</div>
                  {item.originalPrice > item.price && (
                    <div className="text-xs text-gray-400 line-through">{item.originalPrice.toLocaleString()}원</div>
                  )}
                </td>
                <td className="py-3 px-3 text-right">
                  <span
                    className={`text-xs ${
                      item.status === "결제완" || item.status === "배송완"
                        ? "text-green-500"
                        : item.status === "배송중"
                          ? "text-blue-500"
                          : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
