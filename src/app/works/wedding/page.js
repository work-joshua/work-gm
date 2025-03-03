
import { StudioWorks, WorkTab } from "@/app/components/works/body";

export async function generateMetadata({ params, searchParams }, parent) {

    return {
        title: 'Wedding',
        description: 'Explore our products.',
    }
}

export default function Wedding({  }) {

    return (
        <>
            <WorkTab currentWork="Wedding" />
            <StudioWorks />
        </>
    )
}
