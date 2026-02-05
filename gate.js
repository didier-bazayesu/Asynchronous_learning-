

async function getPowerCreators() {
    const [users, albums, photos] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
        fetch("https://jsonplaceholder.typicode.com/albums").then(res => res.json()),
        fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json()),
    ]);

    // Count photos per album
    const photosPerAlbum = {};
    photos.forEach(photo => {
        photosPerAlbum[photo.albumId] = (photosPerAlbum[photo.albumId] || 0) + 1;
    });

    const powerCreators = users
        .map(user => {
            const userAlbums = albums.filter(album => album.userId === user.id);
            const albumCount = userAlbums.length;

            if (albumCount <= 9) return null;

            let totalPhotos = 0;
            userAlbums.forEach(album => {
                totalPhotos += photosPerAlbum[album.id] || 0;
            });
             
            //album average
            const avgPhotosPerAlbum = totalPhotos / albumCount;
            
            // remove album that are under 45
            if (avgPhotosPerAlbum < 45) return null;

            return {
                id: user.id,
                name: user.name,
                email: user.email,
                albumCount,
                totalPhotos,
                avgPhotosPerAlbum
            };
        })
        .filter(Boolean) 
        .sort((a, b) => b.totalPhotos - a.totalPhotos);

    return powerCreators;
}

getPowerCreators().then(console.log).catch(console.log)

