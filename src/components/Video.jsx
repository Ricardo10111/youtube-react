import clsx from 'clsx'
// export default function Video(props) {
//   return (
//     <article className='video-card'>
//       <img src={props.image} alt='' />
//       <footer>
//         <p>{props.title}</p>
//         <p>{props.channel}</p>
//       </footer>
//     </article>
//   )
// }
// export default function Video(props) {
//     const {image, title, channel} = props
//   return (
//     <article className='video-card'>
//       <img src={image} alt='' />
//       <footer>
//         <p>{title}</p>
//         <p>{channel}</p>
//       </footer>
//     </article>
//   )
// }
export default function Video({ image, title, channel }) {
  // if (!channel) {
  //   return(
  //     <article>
  //       <p>Incompleto</p>
  //     </article>
  //   )
  // }

  // Esto se usa para agregar una clase especial a un video en particular

  // const articleClassnames =
  //   'video-card' + (channel === 'Barca TV' ? ' special' : '')

  // Esta forma es usando un array para agregar las clases dentro de un array y luego unirlo con un join articleClassnames.join(' ')

  // let articleClassnames = ['video-card']

  // if (channel === 'Barca TV') {
  //   articleClassnames.push('special')
  // }

  // todo esto de arriba se puede hacer con clsx

  return (
    <article className={clsx('flex flex-col gap-2', { 
      //'special': channel === 'Barca TV'
    'bg-green-500 text-black p-4 rounded-3xl': channel === 'Barca TV'})}>
      <img src={image} alt='' className='w-full rounded-xl object-cover aspect-video'/>
      <footer className='grid gap-4 grid-cols-[2rem_1fr]'>
        {/* Esto es lo mismo de abajo pero usando un operador ternario */}

        {/* {
          channel ?  (
            <img
            src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${channel}`}
            alt=''
          />
          ):(
            <img
            src='https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=Bella'
            alt='avatar'
          />
          )
        } */}

        {channel && (
          <img
            src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${channel}`}
            alt=''
            className='grid-cols-1/2 w-8 h-8 rounded-full object-cover'
          />
        )}
        {!channel && (
          <img
            src='https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=Bella'
            alt='avatar'
          />
        )}

        <span className='col-[2/3]'>{title}</span>
        <span className='col-[2/3]'>{channel || 'UNKNOWN'}</span>
      </footer>
    </article>
  )
}
