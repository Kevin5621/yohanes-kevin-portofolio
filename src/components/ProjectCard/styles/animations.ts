export const cardAnimations = {
    entrance: 'card-entrance',
    hover: 'card-hover',
    contentExpand: {
      maxHeight: (height: string) => ({
        maxHeight: height,
        transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden'
      }),
      opacity: (isExpanded: boolean) => ({
        opacity: isExpanded ? 1 : 0,
        transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      })
    },
    section: (isExpanded: boolean, index: number) => ({
      transform: `translateY(${isExpanded ? '0' : '10px'})`,
      opacity: isExpanded ? 1 : 0,
      transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
    }),
    item: (isExpanded: boolean, sectionIndex: number, itemIndex: number) => ({
      transform: `translateY(${isExpanded ? '0' : '5px'})`,
      opacity: isExpanded ? 1 : 0,
      transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${(sectionIndex * 0.1 + itemIndex * 0.05)}s`
    })
  };