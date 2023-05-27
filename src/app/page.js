import Card from '@/components/Card'
export const metadata ={
  title : "HomePage",
  description: "This is homepage",
}

// get data frm API 
export async function getData(){
  const res = await fetch('https://api.escuelajs.co/api/v1/products?limit=20&offset=1');
  const data = await res.json()
  return data
}

export default async function Home() {
  const products = await getData()
  // console.log(products)

  return (




    <main className=" min-h-screen grid grid-cols-4 items-center justify-between p-2">
     {products.map((products) => (
     <Card
     key={products.id}
     id={products.id}
     title={products.title}
     price={products.price}
     image={products.images[0]}/>))}
    </main>
  )
}
