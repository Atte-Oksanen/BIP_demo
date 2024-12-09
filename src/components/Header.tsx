import { useState } from "react"
import { Link } from "react-router"

const Header = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const links = [['APIs', '/'], ['Mapping editor', '/editor']]

  const handleHeaderClick = (event: React.MouseEvent<HTMLElement>) => {
    const index = event.currentTarget.id
    if (index) {
      setActiveIndex(Number(index))
    }
  }
  return (
    <div className="border-b mt-2 px-2">
      {links.map((element, index) => {
        return (
          <Link id={index.toString()} onClick={handleHeaderClick} key={index} className={`${activeIndex === index ? ' border-red-600 bg-gray-100 box-border' : 'border-white hover:border-gray-100'} border-b-2 rounded-t-md  w-fit inline-block mx-1 p-4 duration-150 hover:bg-gray-100 `} to={element[1]}>
            {element[0]}
          </Link>
        )
      })}
    </div>
  )
}

export default Header