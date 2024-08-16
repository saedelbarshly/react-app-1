import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'
import ProductCart from './components/ProductCart'
import Model from './components/ui/Model'
import { colors, fromInputList, productList, categories } from './data'
import Button from './components/ui/Button'
import Input from './components/ui/Input'
import { IProduct } from './interfaces'
import { productValidtion } from './vaildation'
import ErrorMessage from './components/ErrorMessage'
import CircelColor from './components/CircelColor'
import { v4 as uuid } from 'uuid'
import Select from './components/ui/Select'
import { TProductName } from './types'

const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    }
  };
  /*__________ State _____________*/
  const [products, setProducts] = useState<IProduct[]>(productList)
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [editProduct, setEditProduct] = useState<IProduct>(defaultProductObj);
  const [editProductIdx, setEditProductIdx] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [errors, setErrors] = useState({ title: "", description: "", imageURL: "", price: "", });
  const [tempColors, setTempColors] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  /*__________ Handerl _____________*/
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  /*edit mode */
  const openEdit = () => setIsOpenEdit(true);
  const closeEdit = () => setIsOpenEdit(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = productValidtion({
      title: product.title,
      description: product.description,
      price: product.price,
      imageURL: product.imageURL,
    });

    const hasErrorMsg =
      Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value === '');
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProducts(prev => [{ ...product, id: uuid(), colors: tempColors, category: selectedCategory }, ...prev])
    setProduct(defaultProductObj);
    setTempColors([]);
    close();
    // add product

  }


  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setEditProduct({ ...editProduct, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = productValidtion({
      title: editProduct.title,
      description: editProduct.description,
      price: editProduct.price,
      imageURL: editProduct.imageURL,
    });

    const hasErrorMsg =
      Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value === '');
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    const updatedProducts = [ ...products]
    updatedProducts[editProductIdx] = { ...editProduct, colors: tempColors.concat(editProduct.colors)};
    setProducts(updatedProducts);

    setEditProduct(defaultProductObj);
    setTempColors([]);
    closeEdit();

  }

  const cancelHandler = () => {
    setProduct(defaultProductObj);
    close();
  }


  /*__________ Render _____________*/
  const renderProductList = products.map((product, idx) => (
    <ProductCart key={product.id} 
    product={product} 
    setEditProduct={setEditProduct} 
    openEdit={openEdit}
    setEditProductIdx={setEditProductIdx}
    idx={idx}
     />
  ));
  const renderFormInputList = fromInputList.map(input => (
    <div className='flex flex-col' key={input.id}>
      <label htmlFor={input.id} className='mb-2 text-sm font-medium text-gray-700'>{input.label}</label>
      <Input type="text" id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler} />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = colors.map(color => <CircelColor key={color} color={color}
    onClick={() => {
      if (tempColors.includes(color)) {
        setTempColors(prev => prev.filter(item => item !== color))
        return;
      }
      if (editProduct.colors.includes(color)) {
        setTempColors(prev => prev.filter(item => item !== color))
        return;
      }
      setTempColors((prev) => [...prev, color])
    }} />);

  const renderEditProductWithErrorMsg = (id: string, label: string, name: TProductName) => {
    return (
      <div className='flex flex-col'>
      <label htmlFor={id} className='mb-2 text-sm font-medium text-gray-700'>{label}</label>
      <Input type="text"
        id={id}
        name={name}
        value={editProduct[name]}
        onChange={onChangeEditHandler} />
      <ErrorMessage msg={errors[name]} />
    </div>
    );
  };

  return (
    <main className='container'>
      <Button
        onClick={open}
        className="rounded-md bg-green-700 py-2 px-4 text-sm font-medium text-white"
      >
        Open
      </Button>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5 p-2'>
        {renderProductList}
      </div>
      {/* Add product model */}
      <Model isOpen={isOpen} close={close} title='Creat Product'>
        <form className='space-y-3' onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex flex-wrap items-center my-4 space-x-2">
            {renderProductColors}
          </div>
          <div className="flex flex-wrap items-center my-4 space-x-2">
            {tempColors.map(color => <span key={color}
              className='p-1 mr-1 text-sm rounded-md text-white'
              style={{ backgroundColor: color }}>{color}</span>)}
          </div>
          <Select selected={selectedCategory} setSelected={setSelectedCategory} />
          <div className='flex items-center justify-between space-x-2 my-5'>
            <Button className="bg-indigo-700">Submit</Button>
            <Button className="bg-red-700" onClick={cancelHandler}>Cancel ❌</Button>
          </div>
        </form>
      </Model>

      {/* Edit product model */}
      <Model isOpen={isOpenEdit} close={closeEdit} title='Update Product'>
        <form className='space-y-3' onSubmit={submitEditHandler}>

          {renderEditProductWithErrorMsg('title','Product Title','title')}
          {renderEditProductWithErrorMsg('description','Product Description','description')}
          {renderEditProductWithErrorMsg('imageURL','Product Image URL','imageURL')}
          {renderEditProductWithErrorMsg('price','Product Price','price')}

          <div className="flex flex-wrap items-center my-4 space-x-2">
            {renderProductColors}
          </div>
          <div className="flex flex-wrap items-center my-4 space-x-2">
            {tempColors.concat(editProduct.colors).map(color => <span key={color}
              className='p-1 mr-1 text-sm rounded-md text-white'
              style={{ backgroundColor: color }}>{color}</span>)}
          </div>

          <Select selected={editProduct.category} setSelected={value => setEditProduct({ ...editProduct, category: value})}/> 

          <div className='flex items-center justify-between space-x-2 my-5'>
            <Button className="bg-indigo-700">Submit</Button>
            <Button className="bg-red-700" onClick={closeEdit}>Cancel ❌</Button>
          </div>
        </form>
      </Model>
    </main>
  )
}

export default App

/**
 * sm
 * md
 * lg
 * xl
 * 
 */