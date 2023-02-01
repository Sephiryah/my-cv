import { Coordinate, Language, Asset, Interest } from "./"
 
const AdditionalInfo = () => {
    return (
        <div className="flex-column text-neutral-200 bg-neutral-700 pl-3 pr-3 text-sm pt-5 pb-5">
            <Coordinate />
            <Language />
            <Asset />
            <Interest />
        </div>
    )
}

export default AdditionalInfo;