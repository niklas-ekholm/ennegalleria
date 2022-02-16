// exhibitions.json.js
export const get = async () => {
  const allExhibitionFiles = import.meta.glob('../exhibitions/*.md') // imports any files matching *.md in ../exhibitions/
  const iterableExhibitionFiles = Object.entries(allExhibitionFiles) 

  const allExhibitions = await Promise.all( 
    iterableExhibitionFiles.map(async ([path, resolver]) => { // using map to shape the data
      const { metadata } = await resolver()
      const exhibitionPath = path.slice(2, -3) // remove two chars from beginning (..) and three from end (.md)

      return {
        meta: metadata,
        path: exhibitionPath,
      }
    })
  )

  const sortedExhibitions = allExhibitions.sort((a, b) => {
    return new Date(b.meta.start) - new Date(a.meta.start)
  })

  return {
    body: sortedExhibitions
  }
}