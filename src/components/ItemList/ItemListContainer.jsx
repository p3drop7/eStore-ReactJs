import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getData } from '../../data/getData'
import { Container, Spinner } from 'react-bootstrap'
import ItemList from './ItemList'
import { getFirestore } from '../../data/firebaseService'
import "./Item.css"

function ItemListContainer() {

    const [items, setItems] = useState(false)
    const { categoryId } = useParams()
    
    useEffect(() => {
        
        const dbQuery = getFirestore()
        dbQuery.collection('items').get()
        .then(res => console.log(res.docs))
    }, [])
    
    useEffect(()=>{
        
        setItems(false)
        
        setTimeout(()=>{
            
            if(categoryId === undefined){
                getData()
                    .then(res => {setItems(res)})
                    .catch(err => {console.log("Error: " + err)})
                    .finally(()=> {console.log("Finish")})

            }else{
                getData()
                    .then(res => { setItems(res.filter(it => it.type === categoryId))})
                    .catch(err => {console.log("Error: " + err)})
                    .finally(()=> {console.log("Finish")})
            }
        }, 1000)          
    }, [categoryId])

    return (
        <Container className="itemListContainer" >
            { 
                items ? <ItemList items={items} />
                      : <Spinner animation="border" variant="primary" />
            }
        </Container>
    )
}

export default ItemListContainer