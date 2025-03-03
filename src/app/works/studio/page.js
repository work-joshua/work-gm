
import { StudioWorks, WorkTab } from "@/app/components/works/body";

export async function generateMetadata({ params, searchParams }, parent) {

    return {
        title: 'Studio Shoots',
        description: 'Explore our products.',
    }
}

export default function Studio({  }) {

    return (
        <>
            <WorkTab currentWork="Studio Shoots" />
            <StudioWorks />
        </>
    )
}
