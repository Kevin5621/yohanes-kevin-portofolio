import { ProjectMedia } from './types';

export const getImagePath = (mediaItem: ProjectMedia, theme: string): string | null => {
  if (mediaItem.video) return null;
  if (mediaItem.bannerLight && mediaItem.bannerDark) {
    return theme === 'dark' ? mediaItem.bannerDark : mediaItem.bannerLight;
  }
  return mediaItem.image || null;
};

export const getBannerImage = (
  currentMedia: ProjectMedia,
  theme: string
): string => {
  if (currentMedia.bannerLight && currentMedia.bannerDark) {
    return theme === 'dark' ? currentMedia.bannerDark : currentMedia.bannerLight;
  }
  return currentMedia.image || '';
};