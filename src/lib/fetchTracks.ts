const apiToken: string =
  'BQA8ksh4xm5jXF9mBlH9Kaf9waZ_WX7lCw1LwO27sHVsF_Zuoq0uzsR1FS1XeYopWFm7gGrwCe03KrGNO4LiGwYgjvyxXRISVNALnkyz_D8A1Q7vYh4B9ZdJJgXWsoz9D2CunsHR1uid5c6Qt7go1Vu-A6oUEHfH4O-o1B0fujeU0EcLynh3M-6IbvitVCZeFiMif7618va5bxlHs-k8PZE';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};
