import React, { FC, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoritesContext } from "../../App";
import {
  ProductButtonAdd,
  ProductButtonAddText,
  ProductButtonContent,
  ProductButtonFav,
  ProductButtonFavIcon,
  ProductImage,
  ProductImageSkeleton,
  ProductItem,
  ProductItemContent,
  ProductItemSkeleton,
  ProductPrice,
  ProductTitle,
} from "./styled";

interface Props {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const storeData = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("Favorites", jsonValue);
  } catch (e) {
    // saving error
  }
};

const ProductComponent: FC<Props> = ({ id, image, title, price }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [fav, setfav] = useState(false);
  useEffect(() => {
    setfav(favorites.find((item) => item === id) ? true : false);
  }, [favorites]);
  return (
    <ProductItem>
      <ProductItemContent>
        <ProductImage resizeMode="contain" source={{ uri: image }} />
        <ProductTitle numberOfLines={2}>{title}</ProductTitle>
        <ProductPrice>{price}$ MNX</ProductPrice>
      </ProductItemContent>
      <ProductButtonContent>
        <ProductButtonAdd>
          <ProductButtonAddText>Add to Cart</ProductButtonAddText>
        </ProductButtonAdd>
        <ProductButtonFav
          onPress={async () => {
            const NewFavorites = favorites.find((item) => item === id)
              ? favorites.filter((item) => item !== id)
              : [...favorites, id];
            setFavorites(NewFavorites);
            storeData(NewFavorites);
          }}
        >
          {fav ? (
            <ProductButtonFavIcon
              source={require(`../../assets/icons/heart-dark-fill.png`)}
            />
          ) : (
            <ProductButtonFavIcon
              source={require(`../../assets/icons/heart-dark.png`)}
            />
          )}
        </ProductButtonFav>
      </ProductButtonContent>
    </ProductItem>
  );
};

export default ProductComponent;

export const ProductComponentSkeleton: FC = () => {
  return (
    <ProductItemSkeleton>
      <ProductImageSkeleton />
    </ProductItemSkeleton>
  );
};
