import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function SubmitFailed() {
    const navigate = useNavigate();


    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="60vh"
            
        >
            <Text fontSize="3xl" fontWeight="bold" mb={4} color={"red"}>
                Submission Failed
            </Text>
            <Text fontSize="lg" textAlign="center" mb={8} color={"red"}>
                There was an issue with the Submission try again later
            </Text>
            
        </Box>
    );
}

export default SubmitFailed;