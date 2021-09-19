import styled from "@emotion/native";

export const ProductItem = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 10px;
  width: 260px;
  border-radius: 15px;
  background-color: #ffffff;
`;

export const ProductItemContent = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ProductImage = styled.Image`
  width: 150px;
  height: 150px;
  margin: 30px 20px;
`;

export const ProductTitle = styled.Text`
  width: 80%;
  font-size: 20px;
  text-align: center;
  color: #a2aab6;
`;

export const ProductPrice = styled.Text`
  margin: 10px 0px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const ProductButtonContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const ProductButtonAdd = styled.TouchableOpacity`
  margin-top: 10px;
  border-radius: 100px;
  background-color: #000000;
  font-weight: bold;
  text-align: center;
  margin-right: 15px;
`;
export const ProductButtonAddText = styled.Text`
  font-size: 14px;
  margin: 12px 25px;
  color: white;
  text-align: center;
`;

export const ProductButtonFav = styled.TouchableOpacity`
  margin-top: 10px;
  border-radius: 100px;
  font-weight: bold;
  text-align: center;
  margin-left: 15px;
  background-color: transparent;
`;

export const ProductButtonFavIcon = styled.Image`
  width: 40px;
  height: 40px;
`;

///////////////////////////////////////////////////////////////////////////////
export const ProductItemSkeleton = styled.View`
  display: flex;
  align-items: center;
  width: 250px;
  height: 400px;
  margin: 20px 10px;
  border-radius: 15px;
  background-color: #ffffff;
`;

export const ProductImageSkeleton = styled.View`
  width: 200px;
  height: 200px;
  margin: 30px 20px;
  border-radius: 20px;
  background-color: #f5f5f5;
`;
