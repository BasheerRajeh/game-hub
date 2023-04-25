import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatforms";

const PlatformSelectore = ({ selectedPlatformId, onSelectPlatform }: Props) => {
    const { data: platforms, error } = usePlatform();

    if (error) return null;

    const selectedPlatform = platforms?.results.find(
        (p) => p.id === selectedPlatformId
    );

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || "Platform"}
            </MenuButton>
            <MenuList>
                {platforms?.results.map((platform) => (
                    <MenuItem
                        onClick={() => onSelectPlatform(platform)}
                        key={platform.id}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelectore;

interface Props {
    selectedPlatformId?: number;
    onSelectPlatform: (platform: Platform) => void;
}
