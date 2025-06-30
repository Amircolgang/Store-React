const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Hats",
    },
    {
      id: 3,
      title: "Hats",
    },
    {
      id: 4,
      title: "Hats",
    },
  ]
  return (
    <>
      <div className="categories-contianer">

        {/* img */}
        {
          categories.map((category) => (
            <div className="category-container">
              <div className="category-body-container">
                <h2>{category.title}</h2>
                <p>Shop Now</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App;