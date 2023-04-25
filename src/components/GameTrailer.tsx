import useTrailers from "../hooks/useTrailers";

const GameTrailer = ({ gameId }: Props) => {
    const { data: trailer, error, isLoading } = useTrailers(gameId);

    if (isLoading) return null;

    if (error) throw error;
    const first = trailer?.results[0];

    return first ? (
        <video src={first.data[480]} poster={first.preview} controls />
    ) : null;
};

export default GameTrailer;

interface Props {
    gameId: number;
}
