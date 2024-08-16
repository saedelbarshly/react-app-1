import { IProduct } from "../interfaces"
import { txtSlicer } from "../utils/functions";
import CircelColor from "./CircelColor";
import Image from "./Image"
import Button from "./ui/Button"
interface IProps {
    product: IProduct;
    setEditProduct: (product: IProduct) => void;
    setEditProductIdx: (value: number) => void;
    openEdit: () => void;
    idx: number;
}

const ProductCart = ( { product, setEditProduct, openEdit, setEditProductIdx, idx }: IProps) => {
    const {title,description, imageURL, price,colors,category} = product;
    /**________________Render____________________ */
    const renderProductColors = colors.map(color => <CircelColor key={color} color={color}/>);
    /**___________________Handler_________________ */
    const onEdit = () => {
        setEditProduct(product);
        openEdit();
        setEditProductIdx(idx);
    }
    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex-col">
            <Image imageURL={imageURL} alt={"Product Name"} className="rounded-md"/>
            <h3>{title}</h3>
            <p> {txtSlicer(description)}</p>

            <div className="flex flex-wrap items-center my-4 space-x-2">
            {renderProductColors}
          </div>

            <div className="flex items-center justify-between">
                <span>{price}</span>
                <Image imageURL={category.imageURL} alt={category.name} className="w-10 h-10 rounded-full object-bottom"/>
            </div>
            <div className="flex items-center justify-between space-x-2 my-5">
                <Button className="bg-indigo-700" onClick={onEdit}>Edit</Button>
                <Button className="bg-red-700">Delete ❌</Button>
            </div>
        </div>
    )
}

export default ProductCart