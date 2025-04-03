import React from 'react'


const Cart = (props) => {
	console.log(props)
const arr=	Object.keys(props)
	console.log(arr)
	console.log(props.arr)

		let sum=0;
		for(let val of props.arr){
			sum=sum+val.price
		}


	const handledec=(obj,i)=>{
		if(obj.quantity<=1){
			handledelete(obj,i)
			return
		}
		let copyobj={
			...obj,
			quantity:obj.quantity-1,
			price:obj.price+(obj.price/obj.quantity)
		
		}
		let copyarr=[...props.arr]
		copyarr[i]=copyobj
		props.setarr(copyarr)
		
		console.log(copyobj)
	}

const handleinc=(obj,i)=>{

let copyobj={
	...obj,
	quantity:obj.quantity+1,
	price:obj.price+(obj.price/obj.quantity)

}
let copyarr=[...props.arr]
copyarr[i]=copyobj
props.setarr(copyarr)

console.log(copyobj)
}
	const handledelete=(obj,i)=>{
	console.log(obj)
	let copyarr=[...props.arr]
	copyarr.splice(i,1)
	props.setarr(copyarr)

	}
	
  return (
	<div>

	  
	{props.arr.length>0 && <table className='border border-solid border-black w-1/2 m-auto text-center ' >
		<thead>
	  <tr className='border-b-4'>
		<th className='p-2'>
			S.No
		</th>
        <th scope="col" className="px-6 py-3">
          Product 
        </th>
        <th scope="col" className="px-6 py-3">
          title
        </th>
        <th scope="col" className="px-6 py-3">
          price
        </th>
        <th scope="col" className="px-6 py-3">
          quantity
        </th>
		<th>

		</th>
      </tr></thead>
	  <tbody>
		{
			props.arr.map((ele,i)=>{
				return <tr className='border-b-2'>
					<td className='p-2'>{i+1}</td>
					<td><img src={ele.thumbnail} className='w-32 m-auto' alt="" /></td>
					<td>{ele.title}</td>
					<td>&{ele.price}</td>
					<td>
						<button onClick={()=>handleinc(ele,i)} className='bg-green-600 p-1 w-8'>+</button>
						{ele.quantity}
						<button onClick={()=>handledec(ele,i)}  className='bg-green-600 p-1 w-8'>-</button>
					</td>

					<td><button onClick={()=>handledelete(ele,i)} className='bg-red-500 rounded-md px-2 py-2'>delete</button></td>
				</tr>
			})
		}
	  </tbody>
	  </table>}
{props.arr.length>0 && <h1 className='text-center my-4 font-bold text-xl border rounded w-[50%] m-auto'>total=${sum.toFixed(2)}</h1>}
{
		props.arr.length<=0 && <h1 className='text-center '>cart is empty</h1>
	}
	</div>
	
  )
}

export default Cart
