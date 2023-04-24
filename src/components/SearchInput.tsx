import { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ onSearch }: Props) => {
    const searchRef = useRef<HTMLInputElement>(null);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchRef.current) onSearch(searchRef.current.value);
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

interface Props {
    onSearch: (searchText: string) => void;
}
