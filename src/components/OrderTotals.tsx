import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import { useMemo } from "react"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number
    total: number
}

export default function OrderTotals({order,tip,total} : OrderTotalsProps) {

  const subTotalAmount = useMemo(() => order.reduce((total,item)=> total + (item.price * item.quantity),0),[order] )
  const tipAmount = useMemo (()=> subTotalAmount * tip,[tip, order])
  const totalAmount = useMemo(()=> subTotalAmount + tipAmount,[tip, order])
  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xlk">Totales y Propina:</h2>
            <p>Subtotal
                <span className="font-bold">{' '}{formatCurrency(subTotalAmount)}</span>
            </p>
            <p>Propina
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>
            <p>Total A Pagar
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>
        <button></button>
    </>
  )
}
