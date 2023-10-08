export function parsePathId(url: string) {
  const pathId = url.split('/').pop();

  if (!pathId || !Number.parseInt(pathId)) return undefined;

  return Number.parseInt(pathId);
}
