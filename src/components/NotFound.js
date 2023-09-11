import { Container, Text, Box, Button } from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function NotFound() {
    const [secondsLeft, setSecondsLeft] = useState(5);

    const handleTick = () => {
        setSecondsLeft(secondsLeft - 1);
    }

    setInterval(handleTick, 1000);

    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(function () {
            navigate("/")
        }, 5000)
    }, [navigate])
 

    return (
        <Container textAlign="center" mt="20">
            <Text fontSize="2xl" fontWeight="bold">
                The Page You're Looking for was not found!!
            </Text>
            <Box mt="4" fontSize="xl">
                Taking you back home in {secondsLeft}
            </Box>
            <Button border={"none"}  onClick={() => navigate('/')}>back Home</Button>
        </Container>
    );
}

export default NotFound