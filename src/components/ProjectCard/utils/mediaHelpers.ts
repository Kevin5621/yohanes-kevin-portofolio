// import { Media } from '../types';

// export const preloadMedia = async (media: Media): Promise<void> => {
//   return new Promise((resolve, reject) => {
//     if (media.image) {
//       const img = new Image();
//       img.onload = () => resolve();
//       img.onerror = reject;
//       img.src = media.image;
//     } else if (media.video) {
//       const video = document.createElement('video');
//       video.onloadeddata = () => resolve();
//       video.onerror = reject;
//       video.src = media.video;
//       video.load();
//     } else {
//       resolve();
//     }
//   });
// };

// export const getMediaDimensions = (media: Media): Promise<{width: number, height: number}> => {
//   return new Promise((resolve) => {
//     if (media.image) {
//       const img = new Image();
//       img.onload = () => {
//         resolve({
//           width: img.naturalWidth,
//           height: img.naturalHeight
//         });
//       };
//       img.src = media.image;
//     } else if (media.video) {
//       const video = document.createElement('video');
//       video.onloadedmetadata = () => {
//         resolve({
//           width: video.videoWidth,
//           height: video.videoHeight
//         });
//       };
//       video.src = media.video;
//     } else {
//       resolve({ width: 0, height: 0 });
//     }
//   });
// };