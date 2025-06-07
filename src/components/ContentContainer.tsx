import { PictureContainer } from "./PictureContainer"

export const ContentContainer = (): JSX.Element => {
  return (
    <section className='w-full h-auto'>
        <PictureContainer/>
        <PictureContainer/>
        <PictureContainer/>
    </section>
  )
}
