import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardContainer = ({ children }: Props) => {
    return (
        <Box borderRadius={10} width="300px" overflow="hidden">
            {children}
        </Box>
    );
};

export default GameCardContainer;

interface Props {
    children: ReactNode;
}
