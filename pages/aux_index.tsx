import Head from 'next/head'
import Image from 'next/image'
import { Technology } from '../components/Technology'
import { ITEMS_TECHNOLOGIES } from '../utils/CONSTANTS'

export default function Home() {
  return (
    <>
      <Head>
        <title>Porfolio - Jesús Martín</title>
      </Head>
      <div className='flex flex-col justify-between items-center md:flex-row'>
        <section className="pr-10 mt-10 order-2 md:order-1 md:mt-0">
          <header className="mb-5">
            <h1 className="text-2xl font-bold">Jesús Martín Zorrilla</h1>
            <p className="my-1">Desarrollador de aplicaciones iOS y web</p>
          </header>
          <p>¡Bienvenidos a mi pequeño espacio de internet!</p>
          <p>Soy Jesús, ingeniero informático. Me considero una persona responsable, organizada e implicada en todo lo que hago.</p>
          <p>He trabajado como React developer y ahora trabajo como iOS developer. Gracias a mi curiosidad y a mi experiencia profesional siento que puedo conseguir todo lo que me proponga.</p>
        </section>
        <Image
          className='rounded-full order-1 md:order-2 w-48'
          src="/profile.webp"
          alt="Picture of the author"
          width={300}
          height={300}
          priority
        />
      </div>
      <section className="my-10">
        <h2 className="text-xl font-bold">Experiencia profesional</h2>
        <p>Mi experiencia profesional empezó en febrero de 2022 como React developer. </p>
        <p></p>
        <p></p>
      </section>
      <section className="">
        <h2 className="text-xl font-bold">Tecnologías favoritas</h2>
        <p className="my-5">Me encanta conocer nuevas librerías, frameworks o lenguajes. Aquí muestro una lista de mis tecnologías favoritas. He trabajado con ellas en proyectos propios y en el trabajo.</p>
        <ul className="grid grid-cols-1 gap-6 xs:grid-cols-2 xs:gap-3 md:grid-cols-3 md:gap-6">
          {
            ITEMS_TECHNOLOGIES.map( technology => {
              return <Technology key={technology.name} technology={technology}/>
            })
          }
        </ul>
      </section>
    </>
  )
}
