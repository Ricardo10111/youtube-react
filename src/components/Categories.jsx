export default function Categories() {
  const categories = [
    'All',
    'Music',
    'Gamming',
    'Code',
    'Programming',
    'Life Style',
    'Sports'
  ]

  return (
    <div className="flex flex-row gap-4 pt-4">
      {categories.map((category) => {
        return (
          <span key={`category-${category}`} className='p-[0.5rem_1rem] rounded-[20px] bg-[#282828] cursor-pointer'>
            {category}
          </span>
        )
      })}
    </div>
  )
}
