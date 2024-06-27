import { useEffect, useState } from "react";
import { ListCardProps } from "../../constants";
import { ListCardContainer } from "./styled";
import { User } from "../../assets/icons";

export default function ListCard({ name, avatar }: ListCardProps) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(avatar);
  const [loaded, setLoaded] = useState(false); // Inicialmente falso

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const handleImageError = () => {
    setImgSrc(undefined);
    setLoaded(false);
  };

  useEffect(() => {
    if (avatar) {
      setImgSrc(avatar);
      setLoaded(false);
    } else {
      setImgSrc(undefined);
      setLoaded(true);
    }
  }, [avatar]);

  return (
    <ListCardContainer>
      <span>{name}</span>
      {!loaded ? (
        <User data-testid="user-icon" />
      ) : (
        <img
          src={imgSrc}
          alt={`${name} avatar`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </ListCardContainer>
  );
}
