import CategoryItem from "../category-item/category-item.component.jsx";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className = "directory-container">
      {categories.map(({title, id, imageUrl}) => (
        <CategoryItem key = {id} category = {{title, id, imageUrl}} />
      ))}
    </div>
  )
}

export default Directory
