import MainImage from "../components/products/MainImage"
import ToolsSwiper from "../components/tools/ToolsSwiper"
export default function Tools() {
    return (
        <div>
            <header className="w-screen h-16">
                <div className="max-w-6xl h-full mx-auto flex items-center justify-between px-3">

                    <button>icon</button>
                    <p>view all</p>
                </div>
            </header>
            <div className="max-w-6xl h-full mx-auto mt-5 grid grid-cols-12">
                <MainImage />
                <ToolsSwiper />
            </div>
        </div>
    )
}