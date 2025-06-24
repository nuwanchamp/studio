// Utility function to get the correct path for images
// This ensures images work both in development and when deployed to GitHub Pages

/**
 * Get the correct path for an image, taking into account the basePath in production
 * @param imagePath - The path to the image, starting with "/"
 * @returns The correct path with the basePath prefix if needed
 */
export function getImagePath(imagePath: string): string {
  // In development, use the path as is
  // In production (GitHub Pages), prefix with the repository name
  const isProd = process.env.NODE_ENV === 'production';
  const repoName = 'studio'; // Should match the value in next.config.ts
  
  // If the path already includes the repo name or is an external URL, return it as is
  if (imagePath.startsWith('http') || (isProd && imagePath.startsWith(`/${repoName}`))) {
    return imagePath;
  }
  
  // Add the basePath in production
  return isProd ? `/${repoName}${imagePath}` : imagePath;
}