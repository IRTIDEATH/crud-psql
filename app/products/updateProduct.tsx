"use client"

import { useState, SyntheticEvent } from "react"
import type {Brand} from "@prisma/client"
import { useRouter } from "next/navigation"
import axios from "axios"

type Product = {
    id: number;
    title: string;
    price: number;
    brandId: number;
}

const UpdateProduct = ({brands, product}: {brands: Brand[]; product: Product}) => {
    const [title, setTitle] = useState(product.title)
    const [price, setPrice] = useState(product.price)
    const [brand, setBrand] = useState(product.brandId)

    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // '/api/products' itu dari folder api/products yang dimana si const POST ngirim res, res nya itu create, lalu di consume sama axios dan berfungsi
        await axios.patch(`/api/products/${product.id}`, {
            title: title,
            price: Number(price),
            brandId: Number(brand)
        })
        router.refresh()
        setIsOpen(false)
    }

    const [isOpen, setIsOpen] = useState(false)

    const handleModal = () => {
        setIsOpen(!isOpen)
    }
    
  return (
    <div> 
        <button className="btn btn-info btn-sm" onClick={handleModal}>Edit</button>

        <div className={isOpen ? 'modal modal-open': 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Update {product.title}</h3>
                <form onSubmit={handleUpdate}>
                    <div className="form-control w-full">
                        <label className="label font-bold">Product Name</label>
                        <input type="text" className="input input-bordered"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Price</label>
                        <input type="text" className="input input-bordered"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Brand</label>
                        <select className="select select-bordered"
                            value={brand}
                            onChange={(e) => setBrand(Number(e.target.value))}
                        >
                            {brands.map((brand) => (
                                <option value={brand.id} key={brand.id}>{brand.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleModal}>Close</button>
                        <button type="submit" className="btn btn-primary">{isLoading ? 'Loading...' : 'Update'}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateProduct