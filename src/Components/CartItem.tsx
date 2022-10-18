import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../Context/ShoppingCartContext"
import storeItems from "../Data/items.json"
import { formatCurrency } from "../Utilities/FormatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}


export function CartItem({id, quantity}: CartItemProps){
    
    const {removeFromCart, decreaseCartQuantity, increaseCartQuantity} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
    
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{width: "125px", height: "75px", objectFit: "cover"}}/>
            <div className="me-auto">
                <div>
                    {item.name} {" "} {quantity > 1 && ( 
                    <span className="text-muted" style={{fontSize: "1rem"}}>
                        x{quantity}
                        </span>)}
                </div>
                <div className="text-muted" style={{fontSize: "0.9rem"}}>{formatCurrency(item.price)}
                </div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <div className=" d-flex flex-row align-items-center justify-content-center" style={{gap: ".5rem"}}>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart (item.id)}>&times;</Button>
            <Button size="sm" onClick={() => decreaseCartQuantity(id)}>-</Button>
            <Button size="sm" onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
        </Stack>
    ) 
}