import { Box, Heading } from "@chakra-ui/layout";
import { ReactNode } from "react";

const DefinitionItem = ({ term, children }: Props) => {
    return (
        <Box marginY={5}>
            <Heading as="dt" fontSize="md" color="gray.600">
                {term}
            </Heading>
            <dd>{children}</dd>
        </Box>
    );
};

export default DefinitionItem;

interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}
