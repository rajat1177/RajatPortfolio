import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid className="w-full py-20">
            {gridItems
            .map(({id,title,description,className,img,imgClassName,titleClassName,spareImg})=>(
            <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            img={img}
            titleClassName={titleClassName}
            spareImg={spareImg}
            imgClassName={imgClassName}
            className={className}
            />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid