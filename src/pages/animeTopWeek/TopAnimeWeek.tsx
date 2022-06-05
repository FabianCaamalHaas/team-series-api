import { useEffect, useState } from 'react';

// Services
import ApiServiceAnime from '../../services/ApiServiceAnime';

// Interfaces
import { AnimeTops } from '../../models/anime';

// Components
import { Layout } from '../../components/layout/Layout';
import { CardAnime } from './CardAnime';
import { CircularProgress } from '@mui/material';

export const TopAnimeWeek = () => {

  const [topAnimes, setTopAnimes] = useState<AnimeTops>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    ApiServiceAnime.getAnimeTops()
      .then(res => setTopAnimes(res))
      .then(res =>  setIsLoading(false))
      .catch(error => console.error(error));

  }, []);

  const loadingPage = (
    <div className='absolute w-full h-1/2 flex justify-center items-center' >
      <CircularProgress />
    </div>
  )

  return (
    <Layout tittle='Dashboard' >

      <h1 className='m-5 text-center sm:text-5xl text-4xl' >
        Week Anime tops 
      </h1>

      <div className='flex justify-center gap-6 flex-wrap'>

        {
          isLoading
            ? loadingPage
            : topAnimes?.data?.map(e => (
                <CardAnime 
                  key={e.mal_id} 
                  title={e.title} 
                  urlImage={e.images.jpg.large_image_url}
                  favorites={e.favorites}
                  ranking={e.rank}
                />
              ))
        }
      </div>
    </Layout>
  )
}
