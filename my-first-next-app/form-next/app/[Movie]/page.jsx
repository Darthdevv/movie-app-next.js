import Movie from "../movie"
import Image from "next/image"

export default async function MovieDetail({params}) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    const {Movie}=params
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${Movie}?api_key=${process.env.API_KEY}`,{next:{revalidate: 0}}
        )
        const res = await data.json()

    return (
        <div>
            <div>
            <h2 className="text-2xl">{res.title}</h2>
            <h2 className="text-lg">{res.release_date}</h2>
            <h2>Runtime: {res.runtime} minites</h2>
                <h2 className=" text-sm bg-green-500 inline-block py-2 my-2 px-4 rounded-md "> {res.status}</h2>
                <Image className="my-12 w-full" src={imagePath + res.backdrop_path} width={4416} height={3312} priority />
                <p>{ res.overview}</p>
            </div>
        </div>
    )
}