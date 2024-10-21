import DetailDisplay from "./DetailDisplay"
import { DataObj } from "../../context"

interface CardDetails {
    cardDetails: DataObj
}

function DetailDisplayWrapper({ cardDetails }: CardDetails) {
    return (
        <div className="flex flex-col gap-[5px]">
            <DetailDisplay property="SKU" value={"#100078"} />
            <DetailDisplay property={"Gender"} value={cardDetails?.gender} />
            <DetailDisplay property="Age" value={cardDetails?.age} />
            <DetailDisplay property="Size" value={cardDetails?.size} />
            <DetailDisplay property="Color" value={cardDetails?.color} />
            <DetailDisplay property="Vaccinated" value={cardDetails?.vaccinated ? "Yes" : "No"} />
            <DetailDisplay property="Dewormed" value={cardDetails?.dewormed ? "Yes" : "No"} />
            <DetailDisplay property="Cert" value={cardDetails?.certification ? "Yes" : "No"} />
            <DetailDisplay property="Microship" value={cardDetails?.vaccinated ? "Yes" : "No"} />
            <DetailDisplay property="Location" value={cardDetails?.location} />
            <DetailDisplay property="Published-Date" value={cardDetails?.published_date} />
            <DetailDisplay property="Additional Information" value={cardDetails?.additional_information} />
        </div>
    )
}

export default DetailDisplayWrapper
