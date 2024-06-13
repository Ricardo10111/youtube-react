import Categories from './Categories'
import Video from './Video'
export default function Content() {
  const videos = [
    {
      image:
        'https://i.ytimg.com/vi/2GzVYzYj6FY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjwEI5HQnMz95IaHBYDLbpK_j3Gg',
      title: 'Como hacer un video',
      channel: 'Nate Live',
    },
    {
      image:
        'https://i.ytimg.com/vi/Bp1P7GDHDdE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4jwvSbjpiGYhRDF6vmhl0f2aGtA',
      title: 'Applicacion de video',
      channel: 'No se',
    },
    {
      image:
        'https://i.ytimg.com/vi/BpY3QPBt5HE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHV4CRVJBZJlDDiTnoGL5-cKruMw',
      title: 'Donde comprar camaras',
      channel: 'Barca TV',
    },
    {
      image:
        'https://i.ytimg.com/vi/Ogx3o0bi_Rs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEAYD78L0xNs5q8ngfFd9iY3YCsw',
      title: 'Puedo hacer un video',
    },
  ]

  return (
    <section className='cols-[2/3] row-[2/3]'>
      <Categories />
      <section className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 pt-4'>
        {videos.map((video) => {
          return (
            <Video
              key={`video-${video.title}`}
              image={video.image}
              title={video.title}
              channel={video.channel}
            />
          )
        })}
      </section>
    </section>
  )
}
