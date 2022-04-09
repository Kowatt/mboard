import { Card, Container, Text, Spacer } from "@nextui-org/react";
import Menu from "./subcomponents/Menu";

const Home = () => {


    return (
        <>
            <div className="app-bg"></ div>
            <Container css={{ position: 'relative' }}>
                <Text h1 size={60} weight="bold" css={{ textAlign: "center" }}>
                    MBoard
                </Text>
                <Spacer />
                <Card>

                </Card>
            </Container>
            <Menu />
        </>
    );
}

export default Home;