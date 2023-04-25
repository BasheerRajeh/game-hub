import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
    const { data: genres, isLoading, error } = useGenres();
    const selectedGenereId = useGameQueryStore((s) => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize="2xl" mt={9} mb={3}>
                Genres
            </Heading>
            <List>
                {genres?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={genre.id === selectedGenereId ? "bold" : ""}
                                fontSize="md"
                                variant="link"
                                onClick={() => setSelectedGenreId(genre.id)}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
