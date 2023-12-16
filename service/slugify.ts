export const slugify = (input: string): string => {
    return input
      .toLowerCase()
      .replace(/\s+/g, '-')    // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove non-word characters except -
      .replace(/--+/g, '-')    // Replace multiple - with a single -
      .replace(/^-+/, '')      // Trim - from start of text
      .replace(/-+$/, '');     // Trim - from end of text
  }