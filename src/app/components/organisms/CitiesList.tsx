import { cityImages } from "@/constants/cities"
import CityCircle from "../molecules/CityCircle"
import { SpacerSizeMap } from "@/types/components"

export const Cities = () => {
    return (
        <div className="flex flex-no-wrap overflow-x-auto">
            {cityImages.map((city) => (
                <div
                    key={city.id}
                    style={{
                        marginLeft: SpacerSizeMap.S12,
                        marginRight: SpacerSizeMap.S12
                    }}
                >
                    <CityCircle src={city.src} href={`/city/${city.id}`} label={city.label} />
                </div>
            ))}
        </div>
    )
}