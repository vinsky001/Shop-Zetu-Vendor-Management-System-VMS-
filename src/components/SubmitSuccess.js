import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function SubmitSuccess() {
    const navigate = useNavigate();


    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="60vh"
        >
            <Text fontSize="3xl" fontWeight="bold" mb={4} color={"green"}>
                Submission Successful!
            </Text>
            <Text fontSize="lg" textAlign="center" mb={8} color={"green"}>
                We'll reach out to you as soon as we can
            </Text>
            <Button colorScheme="blue" size="lg" onClick={() => navigate("/join-as-vendor")}>
                Make yourself a Vendor Today
            </Button>
        </Box>
    );
}

export default SubmitSuccess;