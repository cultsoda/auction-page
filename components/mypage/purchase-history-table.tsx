import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

interface PurchaseItem {
  id: string
  type: "product" | "auction"
  name: string
  price: number
  date: string
  status: "completed" | "shipping" | "cancelled" | "refunded"
}

export function PurchaseHistoryTable({ items }: { items: PurchaseItem[] }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">주문일</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">구분</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">상품명</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">가격</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">상태</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {items.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-3 text-sm">{formatDate(item.date)}</td>
              <td className="px-4 py-3">
                <Badge variant={item.type === "auction" ? "outline" : "default"}>
                  {item.type === "auction" ? "경매" : "상품"}
                </Badge>
              </td>
              <td className="px-4 py-3">{item.name}</td>
              <td className="px-4 py-3 font-medium">{item.price.toLocaleString()}원</td>
              <td className="px-4 py-3">
                <Badge
                  variant={
                    item.status === "completed" ? "default" : item.status === "shipping" ? "outline" : "destructive"
                  }
                >
                  {item.status === "completed"
                    ? "구매완료"
                    : item.status === "shipping"
                      ? "배송중"
                      : item.status === "cancelled"
                        ? "취소"
                        : "환불"}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
