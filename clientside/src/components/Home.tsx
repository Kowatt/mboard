import { Card, Container, Text } from "@nextui-org/react";
import Menu from "./subcomponents/Menu";

const Home = () => {


    return (
        <>
            <Text h1 size={60} weight="bold" css={{ textAlign: "center" }}>
                MBoard
            </Text>
            <Menu />
        </>
    );
}

export default Home;