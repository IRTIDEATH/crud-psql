import { Skeleton } from "./ui/skeleton"

export const TableSkleton = () => {
    return(
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
                    <tr>
                        <td>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </td>
                        <td>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </td>
                        <td>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </td>
                        <td>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </td>
                        <td className="flex justify-center space-x-2">
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </td>
                    </tr>
            </tbody>
        </table>
    )
}