import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { modifyCategory } from "../../redux/categorySlice"

function SelectDropdown({ categoryId, currentCategory, onCategoryChange }) {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories)

  const handleCategoryChange = (e) => {
    const selectedCategory = categories.find(category => category.id === parseInt(e.target.value))
    dispatch(modifyCategory({ id: categoryId, name: selectedCategory.name }))
    onCategoryChange(selectedCategory.name)
  }

  return (
    <select value={currentCategory} onChange={handleCategoryChange}>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  )
}

SelectDropdown.propTypes = {
  categoryId: PropTypes.number.isRequired,
  currentCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired
}

export default SelectDropdown
