import { SimpleGrid } from "@chakra-ui/layout";
import useScreenshots from "../hooks/useScreenshots";
import { Image } from "@chakra-ui/image";

const GameScreenshots = ({ gameId }: Props) => {
    const { data: screenshots, isLoading, error } = useScreenshots(gameId);

    if (isLoading) return null;

    if (error) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {screenshots?.results.map((file) => (
                <Image key={file.id} src={file.image} />
            ))}
        </SimpleGrid>
    );
};

export default GameScreenshots;

interface Props {
    gameId: number;
}
