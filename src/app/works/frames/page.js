
import { StudioWorks, WorkTab } from "@/app/components/works/body";

export async function generateMetadata({ params, searchParams }, parent) {

    return {
        title: 'Frames',
        description: 'Explore our products.',
    }
}

export default function Frames({  }) {

    return (
        <>
            <WorkTab currentWork="Frames" />
            <StudioWorks />
        </>
    )
}
