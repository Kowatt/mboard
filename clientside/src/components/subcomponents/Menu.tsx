import { Container, Card, Row, Button, Spacer } from "@nextui-org/react";
import { MdPerson } from "react-icons/md";
import { useState } from "react";


const Menu = () => {

    const [user , setUser] = useState(null)


    const MenuContent = () => {
        if (user === null) {
            return (
                <Row justify="center">
                    <Button shadow color="gradient" auto flat css={{ margin: "auto 3px", flexGrow: "1" }}>
                        Sign in
                    </Button>
                    <Spacer />
                    <Button shadow color="gradient" auto flat css={{ margin: "auto 3px", flexGrow: "1" }}>
                        Sign up
                    </Button>
                </Row>
            );
        }
        
        return (
            <Row justify="center">
                <Button shadow color="gradient" auto flat css={{ margin: "auto 3px" }}>
                    <MdPerson />
                </Button>
                <Spacer />
                <Button shadow color="gradient" auto flat css={{ margin: "auto 3px", flexGrow: "1" }}>
                    Home
                </Button>
                <Spacer />
                <Button shadow color="gradient" auto flat css={{ margin: "auto 3px", flexGrow: "1" }}>
                    Dashboard
                </Button>
            </Row>
        )
    }

    return (
        <Container xl css={{ position: "fixed", bottom: "1em" }}>
            <Card>
                <MenuContent />
            </Card>
        </Container>
    );
}

export default Menu;