import useData from "./useData";

const usePlatform = () => useData<Platform>("/platforms/lists/parents");

interface Platform {
    id: number;
    name: string;
    slug: string;
}

export default usePlatform;
