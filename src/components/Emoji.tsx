import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;

    const emojiMap: { [key: string]: ImageProps } = {
        3: { src: meh, alt: "meh", boxSize: "25px" },
        4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
        5: { src: bullsEye, alt: "exceptional", boxSize: "25px" },
    };

    return <Image {...emojiMap[rating]} mt={1} />;
};

export default Emoji;

interface Props {
    rating: number;
}
