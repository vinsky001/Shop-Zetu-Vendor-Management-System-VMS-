import { Container, Text, Box} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NotFound() {
  const [secondsLeft, setSecondsLeft] = useState(5);

  const handleTick = () => {
    setSecondsLeft(secondsLeft - 1);
  };

  setInterval(handleTick, 1000);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(function () {
      navigate("/");
    }, 5000);
  }, [navigate]);

  return (
    <Container textAlign="center" mt="5%" mb={"30%"} >
      <Text fontSize="2xl" fontWeight="bold">
        The {pathname.split("/")} page is currently unavailable!
      </Text>
      <Box mt="4" fontSize="xl">
        Taking you back home in {secondsLeft}
      </Box>
    </Container>
  );
}

export default NotFound;
