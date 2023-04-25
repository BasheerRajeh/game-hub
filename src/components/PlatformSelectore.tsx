import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

const PlatformSelectore = ({ selectedPlatformId, onSelectPlatform }: Props) => {
    const { data: platforms, error } = usePlatforms();
    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error) return null;

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
