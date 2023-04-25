import { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore((s) => s.setSearchText);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchRef.current) setSearchText(searchRef.current.value);
    };

    return (
        <form onSubmit={handleSearch}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={searchRef}
                    borderRadius={20}
                    placeholder="Serach game..."
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
