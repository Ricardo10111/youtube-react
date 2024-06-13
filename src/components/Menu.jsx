export default function Menu() {
  // List rendering
  // Cada que se hace un list rendering se debe agregar un key
  const menuItems = [
    { icon: '🏠', title: 'Home' },
    { icon: '🩳', title: 'Shorts' },
    { icon: '🔥', title: 'Subscriptions' },
    { icon: '😎', title: 'Favs' }
  ]

  return (
    <aside className="col-[1/2] row-[2/3] p-4">
      {menuItems
      // .filter((item) => item.title.startsWith('S'))
      .map((item) => {
        return (
          <div key={`menu-iten-${item.title}`} className='p-4 rounded-[20px] flex flex-row gap-2 items-center hover:bg-[#282828] cursor-pointer'>
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </div>
        )
      })}
    </aside>
  )
}
