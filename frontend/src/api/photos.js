
// gets all photos as JSON
export const getPhotos = async () => {
  const res = await fetch('api/photos')
  return await res.json()
}
