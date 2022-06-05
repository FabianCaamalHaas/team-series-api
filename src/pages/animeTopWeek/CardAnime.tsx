import { useState } from "react";
import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
import { Favorite } from "@mui/icons-material"

interface Props {
  urlImage: string,
  title: string,
  favorites?: number,
  ranking?: number
}

export const CardAnime = ({ title, urlImage, favorites = 0, ranking }: Props) => {

  const [isFavorite, setIsFavorite] = useState(false);
  const [favorite, setFavorite] = useState(favorites);

  const addAnimeFavorite = () => {
    setIsFavorite(!isFavorite);
    !isFavorite ? setFavorite(favorite + 1) : setFavorite(favorite - 1);
  }

  return (
    <Card className="w-60 relative overflow-hidden cursor-pointer hover:shadow-2xl">

      <CardMedia>
        <img 
          className="w-full h-72"
          src={urlImage} 
          alt={title}
        />
      </CardMedia>

      <CardContent className="absolute w-full h-full bottom-0 hover:bottom-10 hover:h-4/6 duration-100" >

        <div className="absolute bg-slate-100 z-0 w-full left-0 -top-14 px-2 flex items-center justify-between">
          # { ranking }
          <IconButton
            style={{  padding: '5px' }}
            aria-label="anime-favorite" 
            onClick={addAnimeFavorite}
          >
            <Favorite color={isFavorite ? "error" : "inherit"} />
            <span>{favorite}</span>
          </IconButton>
        </div>

        <Typography align="center" noWrap={true} className="absolute -bottom-10 w-full left-0 p-2 bg-slate-100" >
          {title}
        </Typography>
      </CardContent>
            
    </Card>
  )
}
