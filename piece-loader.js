'use strict';

const pieceLoader = source => {
  const pieceManifest = JSON.parse(source);
  const output = `import image from '${pieceManifest.image}';
  import makePiece from '${pieceManifest.makePiece}';
  export default {
    image,
    makePiece,
    title: '${pieceManifest.title}',
    id: '${pieceManifest.artistId}-${pieceManifest.id}',
    artist: '${pieceManifest.artistId}',
    isRecordable: ${typeof pieceManifest.isRecordable !== 'boolean' ||
      pieceManifest.isRecordable},
    tags: [${pieceManifest.tags.map(tag => `"${tag}"`)}],
    releaseDate: new Date('${pieceManifest.releaseDate}'),
  }`;

  return output;
};

module.exports = pieceLoader;
