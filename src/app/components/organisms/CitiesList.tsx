import { cityImages } from "@/constants/cities"
import CityCircle from "../molecules/CityCircle"
import { SpacerSizeMap } from "@/types/components"
import { useMemo } from "react"

export const Cities = () => {
    const cityList = useMemo(() => {
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
    }, [cityImages])

    return cityList
}