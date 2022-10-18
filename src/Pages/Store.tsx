import storeItems from "../Data/items.json"
console.log(storeItems)
import {Col, Row} from "react-bootstrap"
import { ShopItem } from "../Components/ShopItem"

export function Store (){
    return(
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map(item =>(
                    <Col key={item.id}>
                        <ShopItem {...item} />
                        </Col> 
                ))}       
              </Row>
        </>
    ) 
}

