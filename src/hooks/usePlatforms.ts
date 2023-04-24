import platforms from "../data/platforms";

const usePlatform = () => ({ data: platforms, isLoading: false, error: null });

/*interface Platform {
    id: number;
    name: string;
    slug: string;
}*/

export default usePlatform;
