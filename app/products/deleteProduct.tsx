"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

type Product = {
    id: number;
    title: string;
    price: number;
    brandId: number;
}

const DeleteProduct = ({product}: {product: Product}) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleDelete = async (productId: Number) => {
        setIsLoading(true)
        await axios.delete(`/api/products/${productId}`)
        router.refresh()
        setIsOpen(false)
    }

    const [isOpen, setIsOpen] = useState(false)

    const handleModal = () => {
        setIsOpen(!isOpen)
    }
    
  return (
    <div> 
        <button className="btn btn-error btn-sm" onClick={handleModal}>Delete</button>

        <div className={isOpen ? 'modal modal-open': 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are you sure to delete {product.title}?</h3>            
                <div className="modal-action">
                    <button type="button" className="btn" onClick={handleModal}>No</button>
                    <button type="button" onClick={() => handleDelete(product.id)} className="btn btn-primary">{isLoading ? 'Loading...' : 'Yes'}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteProduct