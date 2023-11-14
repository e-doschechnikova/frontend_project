fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((comments) => {
    const evenComments = comments.filter((comment) => comment.id % 2 === 0)
    console.log(evenComments, 'comments')
  })

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then((response) => response.json())
  .then((photos) => {
    const aPhotos = photos.filter((photo) => photo.title.startsWith('a'))
    console.log(aPhotos, 'photos')
  })

fetch('https://jsonplaceholder.typicode.com/users/1/albums')
  .then((response) => response.json())
  .then((albums) => {
    const filteredAlbums = albums.filter((album) => album.id > 5)
    console.log(filteredAlbums, 'albums')
  })
