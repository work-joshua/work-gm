
import { StudioWorks, WorkTab } from "@/app/components/works/body";

export async function generateMetadata({ params, searchParams }, parent) {

    return {
        title: 'Works',
        description: 'Explore our products.',

        // openGraph: {
        //     title: article.title,
        //     description: article.description,
        //     images: [
        //         {
        //             url: article.cover,
        //             alt: article.title,
        //         },
        //     ],
        //     type: 'article',
        //     publishedTime: article.date_full,
        //     authors: [article.poster.name],
        // },
        // twitter: {
        //     card: 'summary_large_image',
        //     site: '@netintui',
        //     title: article.title,
        //     description: article.description,
        //     images: [article.cover],
        // },
    }
}

export default function Works({  }) {

    return (
        <>
            <WorkTab thisWork='Studio Shoots' thisLink='/works/studio' />
            <StudioWorks />

            <WorkTab thisWork='Frames' thisLink='/works/frames' />
            <StudioWorks />

            <WorkTab thisWork='Wedding' thisLink='/works/wedding' />
            <StudioWorks />

            <WorkTab thisWork='Events' thisLink='/works/events' />
            <StudioWorks />
        </>
    )
}
