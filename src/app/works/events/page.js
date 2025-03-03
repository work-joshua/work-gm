
import { StudioWorks, WorkTab } from "@/app/components/works/body";

export async function generateMetadata({ params, searchParams }, parent) {

    return {
        title: ' Events',
        description: 'Explore our products.',
    }
}

export default function Events({  }) {

    return (
        <>
            <WorkTab currentWork="Events" />
            <StudioWorks />
        </>
    )
}
