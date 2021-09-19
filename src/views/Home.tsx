import React, { useEffect, useState } from "react";
import styled, { css } from "@emotion/native";
import { FC } from "react";
import Layout from "../components/Layout";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackPrams";
import Fetch from "../hooks/fetch";
import ProductComponent, {
  ProductComponentSkeleton,
} from "../components/Product";
import { Text } from "react-native";

const Title = styled.Text`
  color: #000000;
  font-family: "Roboto";
  font-size: 40px;
  margin-top: 20px;
  margin-left: 20px;
`;

const Carrusell = styled.ScrollView`
  width: 100%;
  margin: 20px 0px 0px 0px;
  display: flex;
  flex-direction: row;
`;

type ButtonProps = {
  selected: boolean;
};

const ButtonCategory = styled.TouchableOpacity<ButtonProps>`
  border: 1px solid #000000;
  ${({ selected }) =>
    selected &&
    css`
      background-color: #000000;
    `}
  border-radius: 100px;
  margin-left: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const ButtonCategoryText = styled.Text<ButtonProps>`
  width: 100%;
  font-weight: normal;
  font-size: 12px;
  color: ${({ selected }) => (selected ? "#ffffff" : "#000000")};
  margin: 10px 25px 10px 25px;
  display: flex;
  flex-direction: row;
`;

type authScreenProp = StackNavigationProp<RootStackParamList>;
interface Props {}
interface Produc {
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

const App: FC<Props> = (props) => {
  const navigation = useNavigation<authScreenProp>();
  const [Categories, setCategories] = useState([]);
  const [CategoriesSelected, setCategoriesSelected] = useState("");
  const { data, loading, errors } = Fetch("https://fakestoreapi.com/products");

  useEffect(() => {
    setCategories(
      data?.reduce(
        (acc: any, cur: any) =>
          acc.find((item: any) => item === cur.category)
            ? acc
            : [...acc, cur.category],
        []
      )
    );
  }, [data]);

  return (
    <Layout>
      <Title>Products</Title>
      <Carrusell horizontal showsHorizontalScrollIndicator={false}>
        {Categories?.map((item: any) => (
          <ButtonCategory
            selected={CategoriesSelected === item}
            key={`Categories${item}`}
            onPress={() =>
              setCategoriesSelected(CategoriesSelected === item ? "" : item)
            }
          >
            <ButtonCategoryText selected={CategoriesSelected === item}>
              {item.toUpperCase()}
            </ButtonCategoryText>
          </ButtonCategory>
        ))}
      </Carrusell>
      <Carrusell horizontal showsHorizontalScrollIndicator={false}>
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <ProductComponentSkeleton
                key={`SkeletonProductItem${index + 1}`}
              />
            ))
          : data
              ?.filter((item: Produc) =>
                CategoriesSelected === ""
                  ? true
                  : item.category === CategoriesSelected
              )
              .map((item: Produc) => (
                <ProductComponent key={`ProductItem${item.id}`} {...item} />
              ))}
      </Carrusell>

      {Categories?.map((itemCategory: any, index: number) => (
        <React.Fragment key={`CategoriesKey${index + 1}`}>
          <Title>{itemCategory.charAt(0).toUpperCase() + itemCategory.slice(1)}</Title>
          <Carrusell horizontal showsHorizontalScrollIndicator={false}>
            {data
              ?.filter((Filter: Produc) => Filter.category === itemCategory)
              .map((item: Produc) => (
                <ProductComponent key={`ProductItem${item.id}2`} {...item} />
              ))}
          </Carrusell>
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default App;
