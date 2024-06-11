import AddProduct from "./addProduct"
import DeleteProduct from "./deleteProduct"
import UpdateProduct from "./updateProduct"
import { getProducts, getBrands } from "@/lib/data"

export const dynamic = "force-dynamic";

const Product = async () => {
    // const products = await getProducts()
    // disederhanakan menggunakan promise
    const [products, brands] = await Promise.all([getProducts(), getBrands()])
  return (
    <div className="">
        <div className="mb-2">
            <AddProduct brands={brands}/>
        </div>
        <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Prices</th>
                        <th>Brand</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price && product.price.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR"
                            })}</td>
                            <td>{product.brand.name}</td>
                            <td className="flex justify-center space-x-2">
                                <UpdateProduct brands={brands} product={product}/>
                                <DeleteProduct product={product}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>
    </div>
  )
}

export default Product